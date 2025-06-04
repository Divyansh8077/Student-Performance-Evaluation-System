document.getElementById('teacherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const evaluationType = document.getElementById('evaluationType').value;
    const batch = document.getElementById('batch').value;

    // Email validation regex for the desired format
    const emailPattern = /^[a-zA-Z]+\.[0-9]{6}@ddn\.upes\.ac\.in$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address (e.g., Divyansh.100563@ddn.upes.ac.in)');
        return; // Stop form submission
    }

    // Redirect to the batch evaluation page with query parameters
    window.location.href = `batch.html?batch=${batch}&evaluationType=${evaluationType}`;
});