import React from 'react';
import PropTypes from 'prop-types';
import styles from './project.module.css';

const project = () => (
  <div className={styles.project} data-testid="project">
    project Component
  </div>
);

project.propTypes = {};

project.defaultProps = {};

export default project;
