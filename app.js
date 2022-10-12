const carrito =  document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
// cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso );
//elimina curso del carrito
    carrito.addEventListener('click', eliminarCurso );

///vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e) => {
        articulosCarrito = [];
        limpiarHTML();
    })
}

//////////////////////////////// funciones

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }else{

    }
}
// eliminar curso
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const cursoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

         carritoHTML();
    }
}

//lee el contenido y extrae la info en un objeto

function leerDatosCurso(curso){
    const infoCurso = {
        img: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('p span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }
//revisa si un elemento ya existe en el carrito
    if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
        }
        })
        articulosCarrito = [...cursos];
    }  else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito)



    // console.log(articulosCarrito)
    carritoHTML();
}

//muestra el html del carro de compras

function carritoHTML () {

    //limpiar el html 
    limpiarHTML();
    //recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const {titulo,img,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${img}" width = "100" </td>
            <td> ${titulo}</td>
            <td> ${precio}</td>
            <td> ${cantidad}</td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a> </td>
        `;
        console.log(row);
        //agrega el contenedor de carrito en el tbody

        contenedorCarrito.appendChild(row);
    });
}
//elimina los cursos del tbody

function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
    // while(contenedorCarrito.firstChild){
    //     contenedorCarrito.removeChild(contenedorCarrito)
    // }

}