import React from 'react';
import PropTypes from 'prop-types';

const Task = props => (
  <form className="Task" onSubmit={props.handleAddtask}>
    <input
      ref={props.setRef}
      type="text"
      placeholder="Agregar Task"
      name="task"
    />
    <button id="aggTask">Agg Task</button>
  </form>
);

Task.propTypes = {
  handleAddtask: PropTypes.func,
  setRef: PropTypes.func
};

export default Task;
