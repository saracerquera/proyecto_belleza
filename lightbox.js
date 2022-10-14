const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLigt = document.querySelector('.agregar-imagen')
const contenedorLigt = document.querySelector('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLigt.addEventListener('click', (e)=>{
    if(e.target !== imagenesLigt){
        contenedorLigt.classList.toggle('show')
     contenedorLigt.classList.toggle('showImage')
        
    }
})

const aparecerImagen = (imagen)=>{
     imagenesLigt.src = imagen;
     contenedorLigt.classList.toggle('show')
     contenedorLigt.classList.toggle('showImage')
}