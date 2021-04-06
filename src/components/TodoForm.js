import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    };

    handleSubmit = evt => {
        evt.preventDefault();
        
        this.props.addItem(this.state.name);
        
    }
    // handleClick = () => {
    //     this.props.clearCompleted();
    // }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="task" value={this.state.name}/>
                <button type="submit"> Add </button>
                {/* <button onClick={this.handleClick}>Clear Completed</button> */}
            </form>
        );
    }
}

export default TodoForm 