document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('fetchMessage');
    const messageEl = document.getElementById('message');

    btn.addEventListener('click', function() {
        fetch('/api/message')
            .then(response => response.json())
            .then(data => {
                messageEl.textContent = data.message;
            })
            .catch(error => {
                messageEl.textContent = 'Error fetching message';
                console.error('Error:', error);
            });
    });
});