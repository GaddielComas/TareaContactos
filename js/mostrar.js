var contenido   = document.querySelector('#MostarC')

function Mostrar(){
    fetch('http://www.raydelto.org/agenda.php')


    .then( res => res.json())
    .then(datos => {
        tabla(datos)
    } )


    function tabla(datos){
        console.log(datos)
        contenido.innerHTML = ' '
        for(let valor of datos){
            contenido.innerHTML += `
               
         
            <td>${valor.nombre}</td>
            <td>${valor.apellido}</td>
            <td>${valor.telefono}</td>
           



            `
        }
    }
}