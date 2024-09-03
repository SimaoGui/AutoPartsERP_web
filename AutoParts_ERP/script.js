document.addEventListener('DOMContentLoaded', () => {
    
    const correctUsername = 'Thomas';
    const correctPassword = '12345';

    
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === correctUsername && password === correctPassword) {
            window.location.href = 'inicio.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});