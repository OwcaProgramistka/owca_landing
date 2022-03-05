import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const { tag, children, className } = props;
  const Tag = tag;
  return <Tag isHeading className={`${tag}Text ${tag}Text${className}`}>{children}</Tag>;
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']).isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Text.defaultProps = {
  className: '',
};

export default Text;
