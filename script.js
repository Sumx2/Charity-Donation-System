document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const donationAmount = document.getElementById('amount').value;
    const message = document.getElementById('message').value; // Get the message value

    // Create data object for easy handling of fields
    const data = {
        field1: name,
        field2: email,
        field3: donationAmount,
        field4: message // Include the message in the data object
    };

    const THINGSPEAK_API_KEY = 'PQA70I3BKQIFFQDK'; // Replace with your ThingSpeak Write API Key

    // Construct the URL with the data fields
    const url = `https://api.thingspeak.com/update?api_key=${THINGSPEAK_API_KEY}&field1=${data.field1}&field2=${data.field2}&field3=${data.field3}&field4=${data.field4}`;

    // Fetch API to upload data
    fetch(url)
        .then(response => response.text())
        .then(result => {
            if (result == 0) {
                alert('Failed to upload donation. Please try again.');
            } else {
                alert('Donation uploaded successfully!');
            }
            document.getElementById('donationForm').reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while uploading the donation.');
        });
});


