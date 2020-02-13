import React from 'react'
import styled from 'styled-components'

const ContainerPost = styled.div`
    border= 1px black solid;
    margin: 2vh 2vw;
    width: 50vw;
    display: flex;
    flex-direction: columns;
    justify-content: center;
`

const ContainerImagem = styled.div`
    display: flex;
`

const ImagemPerfil = styled.img`

`
const ImagemPostada = styled.img`
    height: 300px;
    width: 300px;
`

const ContainerInterativo = styled.div`
    display: flex;
`


class PostFoto extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <ContainerPost>                
                <ContainerImagem>
                    <ImagemPerfil src={ this.props.fotoPerfil } alt={ this.props.altFotoPerfil } />
                    <p> { this.props.nomePerfil } </p>
                </ContainerImagem>
                <ImagemPostada src={ this.props.fotoPostada } alt={ this.props.altFotoPostada } />
                <ContainerInterativo>
                    <img src={ this.props.iconLike } alt={ this.props.altIconLike } />
                    <p> { this.props.numeroLikes }</p>
                    <img src={ this.props.iconComentario } alt={ this.props.altIconComentario } />
                    <p>numero comenatario</p>
                    <button>comentar</button>
                </ContainerInterativo>
            </ContainerPost>


        )
    }
}

export default PostFoto