const toggle = document.getElementById('toggleDark');
let darkMode = localStorage.getItem('darkMode'); 

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
    }
})

const enableDarkMode = () => {
document.body.classList.add('oscuro');
document.body.classList.remove('claro');
localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
document.body.classList.remove('oscuro');
document.body.classList.add('claro');
localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
enableDarkMode();
}

toggle.addEventListener('click', () => {
darkMode = localStorage.getItem('darkMode'); 

if (darkMode !== 'enabled') {
    enableDarkMode();
} else {  
    disableDarkMode(); 
}
});

if (darkMode === 'enabled') {
    // Haz visible la luna
    toggle.classList.add('bi-moon');
    toggle.classList.remove('bi-brightness-high-fill');
} else {  
    // Haz visible el sol
    toggle.classList.add('bi-brightness-high-fill');
    toggle.classList.remove('bi-moon');
}

