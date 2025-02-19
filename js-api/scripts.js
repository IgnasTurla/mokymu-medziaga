async function getJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        document.getElementById('jokeContainer').innerText = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}
