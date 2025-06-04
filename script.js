document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const profession = document.getElementById('profession').value;
    
    if (profession === 'student') {
        // Redirect to the student dashboard
        window.location.href = 'student.html'; // Redirect to student dashboard
    } else if (profession === 'teacher') {
        window.location.href = 'teacher.html'; // Redirect to teacher dashboard
    } else {
        alert('Please select a profession.'); // Alert if no profession is selected
    }
});