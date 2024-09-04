document.addEventListener('DOMContentLoaded', () => {
    
    const loading = '<div class="loader"></div>';

    const correctUsername = 'RafinhaGostosão';
    const correctPassword = '12345';

    const main1 = document.getElementById('main1');
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === correctUsername && password === correctPassword) {
            main1.remove()
            const loading = document.createElement('div');
            loading.className = 'loader'; 
            document.body.append(loading);

            setTimeout(() => {

                window.location.href = "inicio.html";
            }, 3000);

        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});