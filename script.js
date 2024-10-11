document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const donationAmount = document.getElementById('amount').value;

    // Validate if donationAmount is valid
    if (donationAmount && !isNaN(donationAmount)) {
        const THINGSPEAK_API_KEY = '4KZ6HLYUPF4XVTDO'; // Replace with your ThingSpeak Write API Key
        const url = `https://api.thingspeak.com/update?api_key=${THINGSPEAK_API_KEY}&field1=${donationAmount}`;

        // Fetch API to upload data
        fetch(url)
            .then(response => response.text())
            .then(result => {
                if (result == 0) {
                    alert('Failed to upload donation. Please try again.');
                } else {
                    alert('Donation uploaded successfully!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while uploading the donation.');
            });
    } else {
        alert('Please enter a valid donation amount.');
    }
});
