// ThingSpeak API Key and Channel ID
const THINGSPEAK_API_KEY = 'PQA70I3BKQIFFQDK'; // Replace with your ThingSpeak Read API Key
const CHANNEL_ID = '2684238';           // Replace with your ThingSpeak Channel ID

// Fetch donation history from ThingSpeak
function loadDonationHistory() {
    const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${THINGSPEAK_API_KEY}&results=50`; // Change 'results' to control how many donations you want to fetch

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const feeds = data.feeds;
            const tableBody = document.getElementById('donationHistoryTable').querySelector('tbody');

            // Clear the table before adding new data
            tableBody.innerHTML = '';

            feeds.forEach(feed => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const emailCell = document.createElement('td');
                const amountCell = document.createElement('td');
                const dateCell = document.createElement('td');

                // ThingSpeak fields
                nameCell.innerText = feed.field1;     // Assuming field1 is for name
                emailCell.innerText = feed.field2;    // Assuming field2 is for email
                amountCell.innerText = feed.field3;   // Assuming field3 is for donation amount
                dateCell.innerText = new Date(feed.created_at).toLocaleDateString(); // Display date

                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(amountCell);
                row.appendChild(dateCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching donation history:', error);
            alert('Unable to load donation history. Please try again later.');
        });
}

// Call function to load donation history when the page loads
window.onload = loadDonationHistory;
