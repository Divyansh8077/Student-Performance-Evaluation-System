document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value; // Assuming you have a name input
    const email = document.getElementById('email').value; // Assuming you have an email input
    const evaluationType = document.getElementById('evaluationType').value; // Assuming you have an evaluation type
    const batch = document.getElementById('batch').value; // Assuming you have a batch selection

    // Email validation regex for student format
    const studentEmailPattern = /^[a-zA-Z]+\.[0-9]{6}@stu\.upes\.ac\.in$/;

    if (!studentEmailPattern.test(email)) {
        alert('Please enter a valid student email address (e.g., Divyansh.105563@stu.upes.ac.in)');
        return; // Stop form submission
    }

    // Redirect to the batch evaluation page with query parameters
    window.location.href = `batch.html?batch=${batch}&evaluationType=${evaluationType}`;
});