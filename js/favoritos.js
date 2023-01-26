const favObtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

function cardsAHTML (array) {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).then(data =>{
        const contenedor = document.querySelector(".contenedor");
    let i=0 
    const arrayLikes = favObtenerDelLs('arrayLikes') || [];
    array.forEach(publicaciones => { 
        if (!arrayLikes.includes(publicaciones.id.toString())) {
            return;
        }

        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <h2 class="letras-usuario">
                Usuario: ${data[i++%10].name}
            </h2>
            <h3 class="letras-peli">
                Película: ${publicaciones.nombreDePelícula}
            </h3>
            <h4 class="letras-año">
                Estreno: ${publicaciones.añoDeEstreno}
            </h4>
            <p class="post-estilo">
                Análisis: ${publicaciones.post}
            </p>
            <div class="container-img">
                <img class="cardsImg" src=${publicaciones.img} alt=${publicaciones.nombreDePelícula}>
            </div>
            <h5 class="letras-fecha">
                ${publicaciones.fecha}
            </h5>
            <h6 class="letras-fecha">
                ${publicaciones.hora}
            </h6>
        `
        const imagenes = document.querySelectorAll(".cardsImg");
        for (const imagen of imagenes) {
            if (imagen.src.includes("false")) {
                imagen.style.display = "none";
            }
        }
        contenedor.appendChild(card)
        })
    }) 
    .then(corazón =>{
        const sesion = obtenerDelLs('login') 
            if (sesion === true){
            document.querySelectorAll('.bi').forEach(element => element.style.display = "inline-block")
        }
        
        const toggleLike = document.querySelectorAll('.bi-suit-heart');
        const notificacionId = document.querySelector('#notificacionId');
        
        let i = 0;
        toggleLike.forEach(likes => {
            const j = i;
            let like = localStorage.getItem(`like ${j}`); 
            let notif = localStorage.getItem('notif');
            
            likes.addEventListener('click', function(){
                this.classList.toggle('bi-suit-heart');
                if(this.classList.toggle('bi-suit-heart-fill')){
                }
            })
            
            const enableLike = () => {
            likes.classList.add('bi-suit-heart-fill');
            likes.classList.remove('bi-suit-heart');
            localStorage.setItem(`like ${j}`, 'enabled');
            }
            
            const disableLike = () => {
            likes.classList.remove('bi-suit-heart-fill');
            likes.classList.add('bi-suit-heart');
            localStorage.setItem(`like ${j}`, null);
            }
            
            if (like === 'enabled') {
            enableLike();
            }
            
            likes.addEventListener('click', () => {
            like = localStorage.getItem(`like ${j}`);
            notif = localStorage.getItem('notif');
            let total = localStorage.getItem('notif'); 
            let totalNum = parseInt(total)
            
            if (like !== 'enabled') {
                enableLike();
                notificacionId.classList.add('notificacion')
                document.querySelector('.notificacion').style.display = "flex"
                localStorage.setItem('notif', totalNum + 1) 
                document.querySelector('#contNotif').style.display = "block"
            } else {  
                disableLike(); 
            }
            });
            
            if (like === 'enabled') {
                likes.classList.add('bi-suit-heart-fill');
                likes.classList.remove('bi-suit-heart');
            } else {  
                likes.classList.add('bi-suit-heart');
                likes.classList.remove('bi-suit-heart-fill');
            }
            
            i++;
        })
    })
}

cardsAHTML(publicaciones)

let total = localStorage.getItem('notif');
let totalNum = parseInt(total)

for (let i=0; i < totalNum; i++) {
    document.querySelector('.notificacionEstilo').style.display = "block"
}


const sort = document.querySelector('.bi-calendar-week');

let ordenado = 1

sort.addEventListener('click', function(){
    publicaciones.sort((a, b) => {
        const dateA = new Date(a.fecha)
        const dateB = new Date(b.fecha)
        if (dateA < dateB) return 1*ordenado;
        else if (dateA > dateB) return -1*ordenado;
        else return 0;
    })
    const divContenedor = document.querySelector('.contenedor')
    divContenedor.replaceChildren()
    cardsAHTML(publicaciones)
    ordenado = ordenado*-1
    }
)