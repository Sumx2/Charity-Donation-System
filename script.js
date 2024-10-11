document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;

    const data = {
        field1: name,
        field2: email,
        field3: amount,
        field4: message
    };

    const writeAPIKey = 'PQA70I3BKQIFFQDK'; // Replace with your Write API Key
    const channelID = '2684238'; // Replace with your Channel ID

    fetch(`https://api.thingspeak.com/update?api_key=${writeAPIKey}&field1=${data.field1}&field2=${data.field2}&field3=${data.field3}&field4=${data.field4}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseMessage').innerText = 'Thank you for your donation!';
            document.getElementById('donationForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseMessage').innerText = 'There was an error. Please try again.';
        });
});


// document.getElementById('donationForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let amount = document.getElementById('amount').value;

//     // Send data to ThingSpeak
//     let apiKey = 'PQA70I3BKQIFFQDK'; // Replace with your ThingSpeak API key
//     let field1 = amount; // Assuming amount is being sent to ThingSpeak
//     let url = `https://api.thingspeak.com/update?api_key=${apiKey}&field1=${field1}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             alert('Thank you for your donation!');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('There was an error processing your donation.');
//         });
// });
