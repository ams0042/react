import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ url, className, content, onClick }) => {
  const isLink = Boolean(url);
  const Component = isLink ? 'a' : 'button';

<Component
  href={isLink ? url : undefined}
  className={`${styles.button} ${className}`}
  onClick={onClick}
>
  {content}
</Component>

};

Button.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  url: null,
  className: '',
  onClick: null,
};

export default Button;
