/**
 * gradeCalculator - Function that takes care of students score
 * @param {*} studentScore 
 * @param {*} totalScore 
 * 
 */

let gradeCalculator = function(studentScore = 0, totalScore = 20)
{
    let percent = (studentScore / totalScore) * 100;

    if (percent >= 90)
        console.log(`You got an A ${percent}`);
    else if (percent >= 80)
        console.log(`You got a B ${percent}`);
    else if (percent >= 70)
        console.log(`you got a C (%${percent})`);
    else if (percent >= 60)
        console.log(`You got a D ${percent}`);
    else
        console.log(`You got an F ${percent}`);
}

let num = gradeCalculator();
console.log(num);