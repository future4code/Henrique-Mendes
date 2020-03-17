import React from 'react';
import './App.css';
import styled from 'styled-components';


const ContainerApp = styled.div`
  background: #FAFAFA;
  height: 100wh;
`

const Header = styled.h1`
  display: flex;
  justify-content: center;
  color: red;
  font-size: 52px;
`

const ContainerBox = styled.div`
  display: grid;
  color: red;
  justify-content: center;
  background: #FAFAFA;
`

const ListTask = styled.ul`
  display: flex;
  justify-content: left;
  list-style-type: none;
`

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <ContainerApp>
      <Header>4Task</Header>
      <div>
        <ContainerBox>
          <input
            placeholder= "O que tem quer ser feito"
          />
          <ListTask>
            <input type="checkbox"></input>
            <li typer="checkbox">Use Redux</li>
          </ListTask>
          <ContainerFilter>
            <span>Marcar todas como comletas</span>
            <span>Todas</span>
            <span>Pendentes</span>
            <span>Completas</span>
            <span>Remover comletas</span>
          </ContainerFilter>
          
        </ContainerBox>
      </div>
    </ContainerApp>
  );
}

export default App;
