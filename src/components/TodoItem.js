import React, { Component } from 'react';
import PropTypes from "prop-types";
import "../bootstrap/css/bootstrap.css";

export default class TodoItem extends Component {

    getStyle = () => {
        return {
            background: "#f5f5f5",
            padding: "10px",
            borderBottom: "1px dotted #cccccc",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    {title}
                    <button
                        className="btn btn-danger btn-sm m-2"
                        style={{ float: "right" }}
                        onClick={this.props.delete.bind(this, id)}>Delete</button>
                </p>
            </div>
        )
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

