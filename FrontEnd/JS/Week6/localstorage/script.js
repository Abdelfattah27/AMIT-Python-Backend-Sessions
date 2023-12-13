function saveData() {
    // Get input value
    const inputData = document.getElementById('dataInput').value;

    // Check if local storage is supported
    if (typeof(Storage) !== 'undefined') {
        // Save data to local storage
        localStorage.setItem('userInput', inputData);
        document.getElementById('outputMessage').innerText = 'Data saved to local storage.';
    } else {
        document.getElementById('outputMessage').innerText = 'Sorry, your browser does not support local storage.';
    }
}

function retrieveData() {
    // Check if local storage is supported
    if (typeof(Storage) !== 'undefined') {
        // Retrieve data from local storage
        const storedData = localStorage.getItem('userInput');

        // Display the stored data
        if (storedData) {
            document.getElementById('outputMessage').innerText = `Stored Data: ${storedData}`;
        } else {
            document.getElementById('outputMessage').innerText = 'No data stored in local storage.';
        }
    } else {
        document.getElementById('outputMessage').innerText = 'Sorry, your browser does not support local storage.';
    }
}

const data = localStorage.getItem("userInput")

if (data) {
    document.getElementById('outputMessage').innerText =data;

}
