import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/todo';

const ListTask = styled.ul`
  display: flex;
  justify-content: left;
  list-style-type: none;
  flex-direction: column;
`

class TaskList extends React.Component {
    render() {
    console.log(this.props.taskList);
        return (
            <ListTask>
                {this.props.taskList.map(task => 
                (<li 
                key= {task.id}
                onClick={() => this.props.toggleTask(task.id)}
                >
                    {task.text} - Completa: {String(task.complete)}
                    <button onClick={() => this.props.deleteTask(task.id)}>Deletar</button>
                </li>
                ))}
            </ListTask>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        taskList: state.todos.todosList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTask: (id) => dispatch(toggleTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id))
    };
};
    

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);