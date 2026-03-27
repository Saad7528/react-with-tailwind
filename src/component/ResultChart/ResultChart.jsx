import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "student_name": "Rahim Ahmed",
    "bangla": 85,
    "english": 78,
    "math": 42
  },
  {
    "id": 2,
    "student_name": "Karim Ullah",
    "bangla": 72,
    "english": 65,
    "math": 50
  },
  {
    "id": 3,
    "student_name": "Sumaiya Akter",
    "bangla": 90,
    "english": 88,
    "math": 85
  },
  {
    "id": 4,
    "student_name": "Tanvir Hasan",
    "bangla": 60,
    "english": 55,
    "math": 58
  },
  {
    "id": 5,
    "student_name": "Mitu Islam",
    "bangla": 82,
    "english": 75,
    "math": 85
  },
  {
    "id": 6,
    "student_name": "Sajid Khan",
    "bangla": 45,
    "english": 40,
    "math": 50
  },
  {
    "id": 7,
    "student_name": "Nabila Sultana",
    "bangla": 88,
    "english": 92,
    "math": 89
  },
  {
    "id": 8,
    "student_name": "Arif Rayhan",
    "bangla": 30,
    "english": 45,
    "math": 32
  },
  {
    "id": 9,
    "student_name": "Rupa Khatun",
    "bangla": 77,
    "english": 81,
    "math": 79
  },
  {
    "id": 10,
    "student_name": "Fahim Shahriar",
    "bangla": 95,
    "english": 98,
    "math": 77
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={1000} height={700} data={resultData}>
                <XAxis dataKey="student_name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey='bangla'></Line>
                <Line dataKey='english' stroke='blue'></Line>
                <Line dataKey='math' stroke='red'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultChart;