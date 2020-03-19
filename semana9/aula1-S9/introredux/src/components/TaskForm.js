import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/todo';


class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
        }
    };

    onChangeInput = (element) => {
        this.setState({ inputText: element.target.value })
    };

    onClickAdicionar = () => {
        this.props.addTask(this.state.inputText);
    };

    render() {
        return (
            <form>
                <input 
                placeholder = "O que tem quer ser feito"
                value = {this.state.inputText}
                onChange = {this.onChangeInput}
                />
                <button
                type = "button"
                onClick= {this.onClickAdicionar}>
                    Adicionar
                </button>
            </form>
        )
    };
};

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: text => {
            dispatch(addTask(text));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);