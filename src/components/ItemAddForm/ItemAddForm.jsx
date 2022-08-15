import React, { Component } from "react";
import { PRIORITIES, STATUSES } from "../../constants/itemConstants";
import { generateOptions } from "../../helpers/itemGenerators";

export default class ItemAddForm extends Component {
    state = {
        title: "",
        description: "",
        prioririty: PRIORITIES.LOW,
        status: STATUSES.TODO,
    };

    handleTitleChange = (event) => this.setState({ title: event.target.value });
    handleDescriptionChange = (event) =>
        this.setState({ description: event.target.value });
    handlePriorityChange = (event) =>
        this.setState({ priority: event.target.value });
    handleStatusChange = (event) =>
        this.setState({ status: event.target.value });

    saveItem = () => {
        const { title, description, status, priority } = this.state;

        this.props.onAdd({ title, description, status, priority });

        this.setState({ title: "", description: "" });
    };

    render() {
        const { title, description } = this.state;

        return (
            <div>
                <form className={this.props.className}>
                    <div className="group">
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleTitleChange}
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Title</label>
                    </div>
                    <textarea
                        name="description"
                        value={description}
                        onChange={this.handleDescriptionChange}
                        rows="1"
                        placeholder="Description"
                    />
                    <p>Priority</p>
                    
                    {generateOptions(
                        "priority",
                        PRIORITIES.LOW,
                        PRIORITIES,
                        this.handlePriorityChange,
                    )}
                    <p>Status</p>
                    
                    {generateOptions("status", STATUSES.TODO, STATUSES, this.handleStatusChange)}
                    <button type="button" onClick={this.saveItem}>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}
