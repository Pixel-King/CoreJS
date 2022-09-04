import * as React from 'react';
import axios, { AxiosError } from 'axios';
import './Rating.css'
import { Spinner } from 'react-bootstrap';
import Medal from './Medal/Medal';

interface resBody{
    id: string;
    userName: string;
    rating: string;
}

const Statistics: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [user, setUser] = React.useState<resBody[]>([]);

    React.useEffect(()=>{
        getUserAsync();
    }, []);

    async function getUserAsync() {
        try{
            setLoading(true);
            const res = await axios.get(`http://localhost:4200/users`);
            const body: resBody[] = res.data;
            setUser(body.sort((el1, el2)=>+el2.rating - +el1.rating).filter((el, idx) => idx < 3));
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.log(err);
        }
    }
    // user.map((el, idx)=><div key={idx} className="rating-card">{el.userName + ' ' + el.rating}</div>)
    return (
        <>
        {!loading && <section className='leaderboard-wrap'>
            {user.map((el, idx)=>{
                return (
                    <div key={idx} className={`rating-card-${idx + 1}`}>
                        <Medal place={idx+1}/>
                        <span className={`rating-card-${idx + 1}__text`}>{el.userName + ''}</span>
                        <span className='rating-wrap'>Rating: <span className='rating fire'>{el.rating}</span></span>
                    </div>
                    )
                })}
        </section> }
        {loading && <Spinner animation="border" variant="primary" />}
        </>
    )
}

export default Statistics;