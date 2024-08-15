// function cal(){
//     let phy = document.getElementById("phy").value;
//      chem = document.getElementById("chem").value;
//      math = document.getElementById("math").value;
//      bio = document.getElementById("bio").value;

// let sum = 
// parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(bio);
// document.getElementById("demo").innerHTML = `Total mark is = ${sum}`;
// let percentage = (sum / 400) * 100;
// document.getAnimations("demo1") .innerHTML = `Percentage is = ${percentage}%`;
// if (percentage>=100){
//     document.getElementById("demo2").innerHTML = `Excelent`;
// }else if (percentage>=80){
//     document.getElementById("demo2").innerHTML = `Very Good Work`;
// }else if(percetage >=60){
//     document.getElementById("demo2").innerHTML = `Pass`;
// }else if(percetage >=40){
//     document.getElementById("demo2").innerHTML = `Need Hard work`;
// }else{
//     document.getElementById ("demo2").innerHTML = ` Fail`
// }
// }
function cal() {
    let phy = document.getElementById("phy").value;
    let chem = document.getElementById("chem").value;
    let math = document.getElementById("math").value;
    let bio = document.getElementById("bio").value;

    // Parse the input values as floats to calculate the sum
    let sum = parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(bio);

    // Display the total marks
    document.getElementById("demo1").innerHTML = `Total Marks = ${sum}`;

    // Calculate the percentage
    let percentage = (sum / 400) * 100;

    // Display the percentage
    document.getElementById("demo2").innerHTML = `Percentage = ${percentage.toFixed(2)}%`;

    // Determine the grade based on the percentage
    if (percentage >= 90) {
        document.getElementById("demo3").innerHTML = `Grade A+`;
    } else if (percentage >= 80) {
        document.getElementById("demo3").innerHTML = `Grade B`;
    } else if (percentage >= 60) {
        document.getElementById("demo3").innerHTML = `Grade C`;
    } else if (percentage >= 40) {
        document.getElementById("demo3").innerHTML = `Grade E`;
    } else {
        document.getElementById("demo3").innerHTML = `Grade F`;
    }
}
