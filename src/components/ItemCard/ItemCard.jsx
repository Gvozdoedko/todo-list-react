import { Component } from 'react'
import { func, string } from 'prop-types';
import { generateOptions } from '../../helpers/itemGenerators';
import { PRIORITIES, STATUSES } from '../../constants/itemConstants';

export default class ItemCard extends Component {

  state = {
    titleEditMode: false,
    descriptionEditMode: false,
    priorityEditMode: false,
    statusEditMode: false,
  };

  handleDeleteClick = (e) => {
    const target = e.target;
    target.parentElement.remove();
  }

  handleTitleClick = () => {
    this.setState({ titleEditMode: true });
  }

  handleDescriptionClick = () => {
    this.setState({ descriptionEditMode: true });
  }

  handlePriorityClick = () => {
    this.setState({ priorityEditMode: true });
  }

  handleStatusClick = () => {
    this.setState({ statusEditMode: true });
  }

  handleTitleBlur = () => {
    this.setState({ titleEditMode: false });
  }

  handleDescriptionBlur = () => {
    this.setState({ descriptionEditMode: false });
  }

  handleTitleChange = (event) => {
    this.props.onUpdate(this.props.id, { title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.props.onUpdate(this.props.id, { description: event.target.value });
  }


  render() {
    const {
      titleEditMode,
      descriptionEditMode,
      priorityEditMode,
      statusEditMode,
    } = this.state;

    const {
      title,
      description,
      status,
      priority,
    } = this.props;

    return (
      <div className="ItemCard">
        {!this.state.titleEditMode && <p onClick={this.handleTitleClick}>{title}</p>}
        {titleEditMode && (
            <input
              type="text"
              value={title}
              onBlur={this.handleTitleBlur}
              onChange={this.handleTitleChange}
            />
        )}

        {!descriptionEditMode && <p onClick={this.handleDescriptionClick}>{description}</p>}
        {descriptionEditMode && (
          <p>
            <textarea
              onBlur={this.handleDescriptionBlur}
              value={description}
              onChange={this.handleDescriptionChange}
            />
          </p>
        )}

        {!priorityEditMode && <p onClick={this.handlePriorityClick}>{priority}</p>}
        {priorityEditMode && (
          <p>
            {generateOptions('priority', priority, PRIORITIES)}
          </p>
        )}

        {!statusEditMode && <p onClick={this.handleStatusClick}>{status}</p>}
        {statusEditMode && (
          <p>
            {generateOptions('status', status, STATUSES)}
          </p>
        )}
        <button onClick={this.handleDeleteClick} type='button'>Delete</button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: string,
  description: string,
  priority: string,
  status: string,
  onUpdate: func,
};

ItemCard.defaultProps = {
  title: 'Hello world',
  description: 'Lorem ipsum blablabla Lorem ipsum blablabla Lorem ipsum blablabla Lorem ipsum blablabla',
  status: 'TODO',
  priority: 'HIGH',
};

