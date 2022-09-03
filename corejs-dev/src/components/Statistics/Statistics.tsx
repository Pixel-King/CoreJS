import * as React from 'react';

const Statistics: React.FC = () => {
    const number_tests = localStorage.getItem('tests_number');
    const score_tests = localStorage.getItem('tests_score');
    return (
        <div>
            <h2>
                Статистика доступна только зарегистрированным пользователям
            </h2>
            <h3>
                Тестов пройдено: {number_tests}
            </h3>
            <h3>
                Баллов набрано: {score_tests}
            </h3>
        </div>
    )
}

export default Statistics;