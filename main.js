document.addEventListener('DOMContentLoaded', () => {
    
    let paragraphs = document.querySelectorAll('.paragrafi');
    let colorButton = document.querySelector('#colorButton');
    let boldButton = document.querySelector('#boldButton');
    let toggleButton = document.querySelector('#toggleButton');

    colorButton.addEventListener('click', () => {
        paragraphs.forEach(paragrafo => {
            let red = Math.floor(Math.random() * (255 - 0 + 1) );
            let green = Math.floor(Math.random() * (255 - 0 + 1) );
            let blue = Math.floor(Math.random() * (255 - 0 + 1) );
            paragrafo.style.color = `rgb(${red}, ${green}, ${blue})`; 
        });
    });

    boldButton.addEventListener('click', () => {
        paragraphs.forEach(paragrafo => {
            paragrafo.classList.toggle('fw-bold'); 
        });
    });

    
    toggleButton.addEventListener('click', () => {
        paragraphs.forEach(paragrafo => {
            paragrafo.classList.toggle('d-none');
        });
    });
});
