import React from 'react';
import styled from 'styled-components';
import OutputTarefas from '../OutputTarefas/OutputTarefas';



const MainContainerInput = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;    
`

const ContainerFiltro = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`
const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`




class InputTarefas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            novaTarefa: "",
            listaTarefas: [],
        }
    }

    escreverNovaTarefa = (event) => {
        this.setState({
            // --------- Ajuda ------------
            // novaTarefa: event.target.value
        })
    }

    // --------- Ajuda ------------
    adicionaNovaTarefa = () =>{
        const novaTarefa = {novaTarefa: tarefaImpressa}
        
        const novaListaTarefas = [...this.state.listaTarefas, novaTarefa]
        this.setState({
            listaTarefas: novaListaTarefas
        })
    }
    

    


    render = () =>{         
        return(
            <MainContainerInput>
                <h2>Lista de tarefas</h2>
                <ContainerInput>                    
                    <input type="text" value={this.state.novaTarefa} onChange={this.escreverNovaTarefa}></input>
                    <button onClick={this.adicionaNovaTarefa}>Adicionar</button>
                </ContainerInput>
                <ContainerFiltro>
                    <label>Filtro</label>
                    <select>
                        <option>Nenhum</option>
                        <option>Pendentes</option>
                        <option>Completas</option>
                    </select>
                </ContainerFiltro>
            </MainContainerInput>          
        )
    }
}

export default InputTarefas;