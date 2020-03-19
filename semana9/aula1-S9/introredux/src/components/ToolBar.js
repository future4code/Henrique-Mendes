import React from 'react';
import styled from 'styled-components';

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
`

const ToolBar = () => {
    return (
        <ContainerFilter>
            <button>Marcar todas como completas</button>
            <button>Todas</button>
            <button>Pendentes</button>
            <button>Completas</button>
            <button>Remover comletas</button>
        </ContainerFilter>
    );    
};

export default ToolBar;