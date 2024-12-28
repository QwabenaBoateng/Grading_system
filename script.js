document.getElementById('gradingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('studentName').value;
    const marks = parseInt(document.getElementById('studentMarks').value);
    let grade;
    
    if (marks >= 80 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 75 && marks <= 79) {
        grade = 'B+';
    } else if (marks >= 70 && marks <= 74) {
        grade = 'B';
    } else if (marks >= 65 && marks <= 69) {
        grade = 'C+';
    } else if (marks >= 60 && marks <= 64) {
        grade = 'C';
    } else if (marks >= 55 && marks <= 59) {
        grade = 'D+';
    } else if (marks >= 50 && marks <= 54) {
        grade = 'D';
    } else if (marks >= 45 && marks <= 49) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `${name}, your grade is: ${grade}`;
});
