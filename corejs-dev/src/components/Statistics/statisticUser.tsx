import axios from "axios";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserState } from "../User/userSlice";


//const userID = localStorage.getItem('userID');
// const user = useAppSelector(selectUserState);





// axios.get<User[]>('http://localhost:8080/admin/users')
//         .then(response => {
//             console.log(response.data);
//             setUserList( response.data );
//         });

export const StatisticUser: React.FC = () => {
    const number_tests = localStorage.getItem('tests_number');
    const score_tests = localStorage.getItem('tests_score');
    const [score, setScore] = React.useState(0);

    // async function getUserScore() {
    //     const user = useAppSelector(selectUserState);
    //     const res = await axios.get(`http://localhost:4200/users/${user.id}`);
    //     if (res) {
    //         setScore(res.data)
    //     }
    
    // }

    // useEffect(() => {
    //     if (!admin) {
    //         const currentAccountState = async (): Promise<AccountState> => {
    //             return await axios.get<AccountState>(`/api/account`)
    //                 .then((response) => {
    //                     return response.data
    //                 });
    //         };
    //         currentAccountState()
    //             .then(response => {
    //                 console.log('as : ', response );
    //                 // probably add better handling here in the case that there is no result in the find, otherwise you mightrun into the same issue if admin is undefined again
    //                 setAdmin(response.authorities.find(authority => authority === AUTHORITIES.ADMIN) !== undefined);
    //             });
    //     }

    // React.useEffect(() => {
        
    //         const getUserScore = async () => {
    //             const user = useAppSelector(selectUserState);
    //             return await axios.get(`http://localhost:4200/users/${user.id}`)
    //                 .then((response) => {
    //                     return response.data
    //                 })
                
    //         }
    //         getUserScore()
    //             .then(response => {
    //                 setScore(response.data)
    //             })
        
    // }, [score])

    // const data = score;
    // console.log('data', data)
    const user = useAppSelector(selectUserState);
    console.log('user', user);
    return (
       
        <div>
            <h3>
                Тестов пройдено: {number_tests}
            </h3>
            <h3>
                Баллов набрано: {user.rating}
            </h3>
        </div> 

    )
}