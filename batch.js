// Simulated student data
const studentsData = {
    batch1: ['Saikarthik', 'Divyansh', 'Kaustubh'],
    batch2: ['Saikarthik', 'Divyansh', 'Kaustubh'],
    batch3: ['Saikarthik', 'Divyansh', 'Kaustubh']
};

// Predefined grades for each student
const studentGrades = {
    'Saikarthik': 'Excellent',
    'Divyansh': 'Good',
    'Kaustubh': 'Bad'
};

const urlParams = new URLSearchParams(window.location.search);
const batch = urlParams.get('batch');
const evaluationType = urlParams.get('evaluationType');

document.addEventListener('DOMContentLoaded', function() {
    const studentList = document.getElementById('students');
    const students = studentsData[batch] || [];

    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;

        const evaluateButton = document.createElement('button');
        evaluateButton.textContent = 'Evaluate';
        evaluateButton.onclick = () => openEvaluationModal(student);
        
        li.appendChild(evaluateButton);
        studentList.appendChild(li);
    });
});

// Function to open the evaluation modal
function openEvaluationModal(student) {
    const modal = document.getElementById('evaluationModal');
    const studentName = document.getElementById('studentName');
    const evaluationResult = document.getElementById('evaluationResult');

    studentName.textContent = student;
    evaluationResult.textContent = ''; // Clear previous result
    modal.style.display = 'block';

    // Automatically assign the grade based on the student
    const grade = studentGrades[student] || 'No grade assigned';
    evaluationResult.textContent = `Evaluation for ${student}: ${grade}`;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('evaluationModal');
    modal.style.display = 'none';
}