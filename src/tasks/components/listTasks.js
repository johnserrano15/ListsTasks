import React from 'react';
import UpdateTask from './updateTask';
import Task from './task';
import PropTypes from 'prop-types';
import { TasksContext } from '../containers/taskContext';

import './tasks.sass';

function ListTasks(props) {
  const { items, shouldHide } = props;
  return (
    <ul className="ListTasks">
      <li>Task one.</li>
      <TasksContext.Consumer>
        {context =>
          context.state.items.map((item, index) => {
            {
              /* console.log(item) */
            }
            return shouldHide != item.id ? (
              <Task key={item.id} {...item} {...props} />
            ) : (
              <UpdateTask key={item.id} {...props} id={item.id} />
            );
          })
        }
      </TasksContext.Consumer>
    </ul>
  );
}

ListTasks.propTypes = {
  // items: PropTypes.array.isRequired,
  shouldHide: PropTypes.number
};

export default ListTasks;
