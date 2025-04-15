import {studentsArr} from './studensArr.js'



const rainJanuaryByWeek = [ 10, 20, 0, 122 ];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
    return total + currentElement;
})
// console.log(totalRainfallJanuary);// 152

function calculateAverage(studentsArr){
    const totalGrades = studentsArr.reduce(function(total,currentStudents){
        return total + currentStudents.grade
    }, 0)
    return totalGrades / studentsArr.length
}


console.log(calculateAverage(studentsArr));
