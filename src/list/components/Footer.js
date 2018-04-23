import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = ({ visibilityFilter }) => (
  // {/* Con el { ' ' } dejamos un espacio al lado. */}
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Activate</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default Footer;
