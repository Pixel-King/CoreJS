import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useAppSelector } from '../../app/hooks';
import { selectUserState } from '../User/userSlice';
import './Profile.css';
import ProfileImg from './ProfileImg/ProfileImg';
import { Accordion, Spinner } from 'react-bootstrap';
import ProgressChart from './ProgressChart/ProgressChart';
import RangeProgress from './RangeBar/RangeProgress';
import PieCharts from './PieChart/PieChart';
import { dbHostURL } from '../../dburl';
import RankingImg from './CodewarsImg/rankings.svg';
import LanguagesImg from './CodewarsImg/programming-language.svg';
import { iteratorSymbol } from 'immer/dist/internal';
import markdown from './MarkDown/markdown';


interface userBody{
    id: string;
    email: string;
    role: string;
    userName: string;
    rating: string;
    passedTests: { date: string, testId: string}[];
    readedArticle: { date: string, articleId: string}[];
    codewarsname: string;
}

type codewarsUser = null | {
    id: string,
    username: string,
    name: string | null,
    honor: number | null,
    clan: string | null,
    leaderboardPosition: number | null,
    skills: string[] | null,
    ranks: {
        overall: {
            rank: number | null,
            name: string,
            color: string,
            score: number | null
        },
        languages: {
            javascript: {
                rank: number | null,
                name: string,
                color: string,
                score: number | null
            }
        }
    },
    codeChallenges: {
        totalAuthored: number | null,
        totalCompleted: number | null
    }
}

type codewarsAllSolved = {
    totalPages: number | null,
    totalItems: number | null, 
    data: {
        id: string | '',
        name: string | '',
        slug: string | '',
        completedAt: string | '',
        completedLanguages: string[] | [],
    }[]
}

type taskInfo = null | {
    id: string,
    name: string,
    slug: string,
    category: string,
    publishedAt: string,
    approvedAt: string,
    languages: string[],
    url: string,
    rank: {
        id: number | null,
        name: string,
        color: string
    },
    createdAt: string,
    createdBy: {
        username: string,
        url: string
    },
    approvedBy: {
        username: string,
        url: string
    },
    description: string,
    totalAttempts: number | null,
    totalCompleted: number | null,
    totalStars: number | null,
    voteScore: number | null,
    tags: string[],
    contributorsWanted: boolean,
    unresolved: {
        issues: number | null,
        suggestions: number | null
    }
}[]

const Profile = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAppSelector(selectUserState);
    const [email, setEmail] = useState<string>('');
    const [NickName, setNickName] = useState<string>('');
    const [rang, setRang] = useState<string>('');
    const [rangProgress, setRangProgres] = useState<number>(0);
    const [passedTests, setPasedTest] = useState<{ date: string, testId: string}[]>([]);
    const [articles, setArticles] = useState<{ date: string, articleId: string}[]>([]);
    
    const [codewarsName, setCodewarsName] = useState<string>('');
    const [codewarsProgress, setCodewarsProgress] = useState<codewarsUser>(null);
    const [codewarsSolved, setCodewarsSolved] = useState<taskInfo>(null);
    const [cdwNameIsValid, setValid] = useState(false);

    useEffect(()=>{
        getUserAsync();
    }, []);

    useEffect(()=>{
        getCodewarsUserInfo();
    }, [codewarsName]);

    useEffect(()=>{
        getCodewarsSolved();
    }, [codewarsProgress]);

    async function getUserAsync() {
        try {
            setLoading(true);
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.get(`${dbHostURL}/users/${user.id}`, config);
            const data: userBody = res.data;
            setEmail(data.email);
            setNickName(data.userName);
            setRang(+data.rating < 100 ? "Junior" : +data.rating < 300 ? "Middle" : "Senior");
            setRangProgres(+data.rating < 100 ? +data.rating : +data.rating < 300 ? (+data.rating - 100)/2 : 100);
            setPasedTest(data.passedTests);
            setArticles(data.readedArticle);
            setCodewarsName(data.codewarsname);
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            setLoading(false);
        }
    }

    async function getCodewarsUserInfo() {
        try {
            if (codewarsName !== '') {
                const resp = await axios.get(`https://www.codewars.com/api/v1/users/${codewarsName}`);
                if (resp.status === 200) {
                    setValid(true);
                    const data: codewarsUser = resp.data;
                    setCodewarsProgress(data);
                }
            }
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);
        }
    }

    async function getCodewarsSolved() {
        try {
            if (codewarsName !== '') {
                const resp = await axios.get(`https://www.codewars.com/api/v1/users/${codewarsName}/code-challenges/completed?page=0`);
                if (resp.status === 200) {
                    const data: codewarsAllSolved = resp.data;
                    const dataArray = data.data;
                    const slugsArray = dataArray.map((item) => item.slug);
                    let lastSlugsArray = [];
                    if (slugsArray.length > 7) {
                        for (let i = 0; i < 7; i ++) {
                            lastSlugsArray.push(slugsArray[i]);
                        }
                    } else {
                        lastSlugsArray = slugsArray.slice();
                    }
                    const promiseArray = lastSlugsArray.map( async (slug) => {
                        return (await axios.get(`https://www.codewars.com/api/v1/code-challenges/${slug}`)).data;
                    })
                    const lastTasksInfoRes = await Promise.allSettled(promiseArray);
                    const lastTasksInfo: taskInfo = lastTasksInfoRes.map((result) => result.status === 'fulfilled' && result.value);
                    setCodewarsSolved(lastTasksInfo);
                }
            }
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);
        }
    }

    return (
        <>
        {!loading && <div key={`user-profile-${user.id}`} className='user-profile__wrap'>
                <section key={`profile-inf-${user.id}`} className='profile-inf__wrap'>
                    <div key={`profile-img-${user.id}`} className="profile-img__wrap">
                        <ProfileImg developer={user.rating}></ProfileImg>
                    </div>
                    <div key={`user-inf-${user.id}`} className='user-inf m-4'>
                        <h3>Эл. почта: </h3>
                        <div key={`user-email-${user.id}`} className='p-r fs-5 typewriter'>
                            <div className='transform-translate-x'>{email}</div>
                        </div>
                        <h3>Позывной:</h3>
                        <div key={`user-nickname-${user.id}`} className='p-r fs-5 typewriter'>
                            <div className='transform-translate-x'>{NickName}</div>
                        </div>
                        <h3>Ранг:</h3>
                        <div key={`user-rank-${user.id}`} className='typewriter p-r fs-5'>
                            <div className='transform-translate-x'>{rang}</div>
                        </div>
                        <h3>Позывной Codewars:</h3>
                        <div key={`user-cdwarsname-${user.id}`} className='typewriter p-r fs-5'>
                            <div className='transform-translate-x'>{codewarsName === '' ? 'Не задано' : codewarsName}</div>
                        </div>
                    </div>
                </section>
                <section key={`user-stat-${user.id}`} className='user-stat__wrap'>
                    <div key={`bar-chart-${user.id}`} className='bar-chart'>
                        <h3 className='mb-5'>Статистика за последнюю неделю:</h3>
                        <ProgressChart tests={passedTests} articles={articles}></ProgressChart>
                    </div>
                        <div key={`range-progres-${user.id}`} className="range-progres">
                            <h3 className='mb-4'>Прогресс ранга:</h3>
                            <RangeProgress 
                                progres={rangProgress}
                                tests={passedTests.length}
                                art={articles.length}
                                text={rang === "Junior"? "Middle": rang === "Middle"? "Senior" : "Вы достигли макс. ранга!"}
                            />
                        </div>
                        { 
                            codewarsName !=='' && 
                            <div key={`codewars-progress-${user.id}`} className='codewars-progress mt-5'>
                                <h3 className='mb-3'>Codewars progress</h3>
                                {
                                    cdwNameIsValid
                                      ?
                                      <div key={`codewars-progress-overall-wrap-${user.id}`} className='codewars-progress-overall-wrap'>
                                        <div key={`codewars-progress-wrap-${user.id}`} className='codewars-progress-wrapper gap-3 d-flex flex-wrap'>
                                            <div key={`codewars-progress-main-${user.id}`} className='codewars-progress-main ms-auto me-auto'>
                                                <h4 className='mb-3'>Progress</h4>
                                                <div key={`codewars-progress-main-wrap-${user.id}`} className='codewars-progress-main-wrap d-flex align-items-center'>
                                                    <div key={`codewars-progress-main-img-${user.id}`} className='codewars-progress-main-img'>
                                                        <img className='w-25' src={RankingImg} alt='codewars rank'></img>
                                                    </div>
                                                    <div key={`codewars-progress-main-info-${user.id}`} className='codewars-progress-main-info d-flex flex-column justify-content-start text-start'>
                                                        <b>Rank: {codewarsProgress ? codewarsProgress.ranks.overall.name : ''}</b>
                                                        <b>Honor: {codewarsProgress ? codewarsProgress.honor : ''}</b>
                                                        <b>Score: {codewarsProgress ? codewarsProgress.ranks.overall.score : ''}</b>
                                                        <b>Leaderboard Position: {codewarsProgress ? codewarsProgress.leaderboardPosition : ''}</b>
                                                        <b>Total Completed Kata: {codewarsProgress ? codewarsProgress.codeChallenges.totalCompleted : ''}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={`codewars-progress-languages-${user.id}`} className='codewars-progress-languages d-flex flex-column ms-auto me-auto'>
                                                <h4 className='mb-3'>Languages</h4>
                                                <div key={`codewars-progress-languages-wrap-${user.id}`} className='codewars-progress-languages-wrap d-flex align-items-center'>
                                                    <div key={`codewars-progress-languages-wrap-${user.id}`} className='codewars-progress-languages-img'>
                                                        <img className='w-25' src={LanguagesImg} alt='codewars languages'></img>
                                                    </div>
                                                    <div key={`codewars-progress-languages-info-${user.id}`} className='codewars-progress-languages-info d-flex flex-column justify-content-start text-start'>
                                                        <b>Total Languages Trained: {codewarsProgress ? Object.keys(codewarsProgress.ranks.languages).length : ''}</b>
                                                        <b>JavaScript Rank: {codewarsProgress ? codewarsProgress.ranks.languages.javascript ? codewarsProgress.ranks.languages.javascript.name : 'ещё нет :(' : ''}</b>
                                                        <b>JavaScript Score: {codewarsProgress ? codewarsProgress.ranks.languages.javascript ? codewarsProgress.ranks.languages.javascript.score : 'ещё нет :(' : ''}</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div key={`codewars-completed-tasks-${user.id}`} className='codewars-completed-tasks d-flex flex-column justify-content-center mt-3'>
                                            <h4 className='mb-3'>Последние выполненные kata</h4>
                                            <div key={`codewars-completed-tasks-card-${user.id}`} className="codewars-completed-tasks-card card card-body">
                                                {
                                                    codewarsSolved ?
                                                        <Accordion key={`accordeon-completed-tasks-${user.id}`}>
                                                            {
                                                                codewarsSolved.map((task, index) => {
                                                                    return (
                                                                        <Accordion.Item key={`accordion-item-${task.id}`} eventKey={`${task.id}`}>
                                                                            <Accordion.Header key={`accordion-header-${task.id}`}><h4><small className="text-muted">{task.name}</small></h4></Accordion.Header>
                                                                            <Accordion.Body key={`accordion-body-${task.id}`}>
                                                                                <div key={`${task.id}`} className={`task-${task.id} border border-4 rounded mt-2 mb-2`}>
                                                                                    <div className={ `task-ref-${task.id} m-2 p-2` }>
                                                                                        <h5>Название задачи:</h5>
                                                                                    <p>{task.name}</p>
                                                                                    </div>
                                                                                    <div key={`task-rank-${task.id}`} className={ `task-rank-${task.id} m-2 p-2` }>
                                                                                        <h5>Ранг задачи:</h5>
                                                                                        <p>{task.rank.name}</p>
                                                                                    </div>
                                                                                    <div key={`task-description-${task.id}`} className={ `task-description-${task.id} m-2 p-2` }>
                                                                                        <h5>Описание задачи:</h5>
                                                                                        <a href={`${task.url}`} target='_blank'>{task.slug}</a>
                                                                                        {/* <div className='text-start' dangerouslySetInnerHTML={{__html: markdown(task.description)}} /> если захочется преобразовать, но не всегда получится норм */}
                                                                                    </div>
                                                                                    <div key={`task-tags-${task.id}`} className={ `task-tags-${task.id} m-2 p-2` }>
                                                                                        <h5>Ключевые слова:</h5>
                                                                                        <p>{task.tags.join(', ')}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    )
                                                                })
                                                            }
                                                        </Accordion>
                                                    :
                                                        'Здесь пусто :('
                                                }
                                            </div>
                                        </div>
                                      </div>
                                      :
                                      <h4 style={{color: 'red'}}>Такого бойца Codewars не найдено :(</h4>
                                }
                            </div> 
                        }
                </section>
            </div>}
            {loading && <Spinner animation="border" variant="primary" />}
        </>
    );
}

export default Profile;