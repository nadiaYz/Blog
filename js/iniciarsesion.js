const datosUsuario = {
    user: "usuario123",
    password: "contraseña123"
}

const infoAlLs = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const obtenerDelLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const formLogin = document.querySelector("#login")
console.log(formLogin)

const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const contenedorFormulario = document.querySelector(".container-login")
const datosIncorrectos = document.querySelector("#incorrecto")
const inicioTexto = document.querySelector('#iniciarSesionTexto')

if (formLogin !== null){
    formLogin.onsubmit = ( event ) => {
        event.preventDefault()
        if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password){
            infoAlLs("login", true)
            contenedorFormulario.style.display = "none"
            document.querySelector ("#logout").style.display = "block"
            datosIncorrectos.style.display ="flex"
            document.querySelector ("#incorrecto").style.display = "none"
            inicioTexto.innerHTML = "Cerrar Sesión";
            location.replace('../index.html')
        } else {
            datosIncorrectos.style.display ="none"
            document.querySelector ("#incorrecto").style.display = "block"
        }
    }

const validarInicioSesion = (valor) => {
    if (valor === true ){
        contenedorFormulario.style.display = "none"
        document.querySelector ("#logout").style.display = "block"
    } else {
        contenedorFormulario.style.display = "flex"
        document.querySelector ("#logout").style.display = "none"
    }
}

validarInicioSesion(obtenerDelLs("login"))

document.querySelector("#logout").onclick = () => {
    localStorage.removeItem("login")
    validarInicioSesion(obtenerDelLs("login"))
    inicioTexto.innerHTML = "Iniciar Sesión";
}
}

const sesion = obtenerDelLs('login') 
if (sesion === true){
    inicioTexto.innerHTML = "Cerrar Sesión";
}


const favoritos = document.querySelector('#favoritos')
const favoritosSesion = obtenerDelLs('login') 
document.querySelector("#favoritos").onclick = (event) => {
    if (favoritosSesion !== true){
        event.preventDefault()
        location.replace('./Pages/iniciarsesion.html')
    }
}


