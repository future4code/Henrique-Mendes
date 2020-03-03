import React from 'react';
import styled from 'styled-components';
import InputTarefas from '../InputTarefas/InputTarefas';




const MainContainerOutput = styled.div`
    display: flex;
    justify-content: center;
`



class OutputTarefas extends React.Component{
    constructor(props){
        super(props)
    }



    render = () =>{
        return(
            <MainContainerOutput>
                <ul>
                    {/*------ AJUDA COM ESSA PROPS ------ */}
                    <li>{this.props.tarefaImpressa}</li>
                    <li>Tarefa2</li>
                    <li>Tarefa3</li>
                </ul>
            </MainContainerOutput>
        )
    }
}

export default OutputTarefas;