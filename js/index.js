const form = document.forms['agregarUsuario'];


form.onsubmit = (event) => {
    event.preventDefault();
    console.log(personasJson());
};

function personasJson()
{
    const personas = {}

    Array.from(form.elements).forEach(Element => {
        if(Element.name) personas[Element.name] =  Element.value
    })

    fetch('http://www.raydelto.org/agenda.php',{
    method: 'POST',
    body: JSON.stringify(personas) 

    })
    .then( res => res.json())
    .then(data => {
        console.log(data)
    })
    location.reload();
    return personas;
    
}


