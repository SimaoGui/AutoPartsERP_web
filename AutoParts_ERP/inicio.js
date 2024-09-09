document.addEventListener('DOMContentLoaded', () => {

    const exitLink = document.querySelector('.divexit a span');
    const header1 = document.querySelector('header');

    exitLink.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o redirecionamento imediato
        
        // Remove o header e mostra o loader após o clique
        header1.remove(); 
        const loading = document.createElement('div');
        loading.className = 'loader'; 
        document.body.append(loading);

        // Aguarda 2 segundos antes de redirecionar
        setTimeout(() => {
            window.location.href = 'index.html'; // Redireciona após 2 segundos
        }, 2000); // 2000 ms = 2 segundos
    });
});

