class Post {
    constructor(titulo, autor, tema, texto) {
        this.titulo = document.getElementById('titulo').valeu
        this.autor = document.getElementById('autor')
        this.tema = document.getElementById('tema')
        this.texto = document.getElementById('texto')
    }    
}

function postarTexto(){    
    let valorDoTitulo = document.getElementById('titulo').value
    document.getElementById('titulo-postado').innerHTML += '<p>'+valorDoTitulo+'</p>'
    let valorDoAutor = document.getElementById('autor').value
    document.getElementById('autor-postado').innerHTML += '<p>'+valorDoAutor+'</p>'
    let valorDoTema = document.getElementById('tema').value
    document.getElementById('tema-postado').innerHTML += '<p>'+valorDoTema+'</p>'
    let valorDoTexto = document.getElementById('texto').value
    document.getElementById('texto-postado').innerHTML += '<p>'+valorDoTexto+'</p>'
    console.log(event)
}