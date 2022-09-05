import React from 'react';
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

const today = Date.now();
const oneDayMs = 86400000;

const ProgressChart:React.FC<{
  tests: {date: string, testId: string}[]
  articles: {date : string, articleId: string}[]
}> = ({ tests, articles })=> {

  const date = [
    `${new Date(today)}`.split(' '),
    `${new Date(today - oneDayMs)}`.split(' '),
    `${new Date(today - oneDayMs * 2)}`.split(' '),
    `${new Date(today - oneDayMs * 3)}`.split(' '),
    `${new Date(today - oneDayMs * 4)}`.split(' '),
    `${new Date(today - oneDayMs * 5)}`.split(' '),
    `${new Date(today - oneDayMs * 6)}`.split(' '),
  ]

  const data = [
    {
      name: `${date[6][1]}.${date[6][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[5][1]}.${date[5][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[4][1]}.${date[4][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[3][1]}.${date[3][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[2][1]}.${date[2][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[1][1]}.${date[1][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
    {
      name: `${date[0][1]}.${date[0][2]}`,
      "Тестов сдано": 0,
      "Статей прочитанно": 0,
    },
  ];
  
  const dataChange = () => {
    date.map((el) => {
      tests.map((test) =>{
        const dt = `${new Date(Date.parse(test.date))}`.split(' ');
        if ( el[0] === dt[0] && el[1] === dt[1] && el[2] === dt[2] && el[3] === dt[3]) {
          const time = `${dt[1]}.${dt[2]}`;
          data.map((da)=>{
            if (da.name === time) {
              da['Тестов сдано'] +=1;
            }
          })
        }
      })
      articles.map((art)=>{
        const dt = `${new Date(Date.parse(art.date))}`.split(' ');
        if ( el[0] === dt[0] && el[1] === dt[1] && el[2] === dt[2] && el[3] === dt[3]) {
          const time = `${dt[1]}.${dt[2]}`;
          data.map((da)=>{
            if (da.name === time) {
              da['Статей прочитанно'] +=1;
            }
          })
        }
      });
    })
  }
  dataChange();

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis ticks={[2, 4, 6, 8, 10]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Тестов сдано" fill="#8884d8" />
          <Bar dataKey="Статей прочитанно" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default ProgressChart;