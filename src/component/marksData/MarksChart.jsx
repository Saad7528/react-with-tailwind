import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromice}) => {

    const markRes = use(marksPromice)
    const marksData = markRes.data
    // console.log(marksData);


    
    
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.student_name,
            english: studentData.marks.english,
            bangla: studentData.marks.bangla,
            math: studentData.marks.math
        }

        const ave = (student.bangla + student.english + student.math)/3;
        student.ave = ave;
        return student
    })
    console.log(marksChartData);
    return (
        <div>
            <BarChart width={800} height={500} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="ave" fill='blue'></Bar>
                <Bar dataKey="bangla" fill='red'></Bar>
                <Bar dataKey="english" fill='green'></Bar>
                <Bar dataKey="math" fill='white'></Bar>

            </BarChart>
            
        </div>
    );
};

export default MarksChart;