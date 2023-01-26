const notificaciones = document.querySelector('.bi-envelope');
let subMenu = document.getElementById('sub-Menu');

notificaciones.addEventListener('click', function(){
    subMenu.classList.toggle('subMenuWrapAbrir');
    document.querySelector('.notificacion').style.display = "none"
})

const eliminarTodo = document.querySelector('.eliminarTodo')

eliminarTodo.addEventListener('click', event => {
    const todasNotifs = document.querySelectorAll('.notifi')
    todasNotifs.forEach(argumento => argumento.remove())
    localStorage.setItem('notif', 0)
    document.querySelector('#contNotif').style.display = 'none'
})