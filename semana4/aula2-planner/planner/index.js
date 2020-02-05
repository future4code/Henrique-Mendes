function adicionarEvento() {
    const input = document.getElementById('input')
    const novoEvento = input.value

    if(novoEvento === ''){
        alert('Insira um evento!')
    } else {
        const listadeEventos = document.querySelector('ul')

        listadeEventos.innerHTML += '<li>' + input.value + '</li'>

        input.value = ''
    }