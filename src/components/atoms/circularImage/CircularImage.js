import React from 'react';
import PropTypes from 'prop-types';

// Constants
import SIZES from './constants/sizes';
import SIZE_TO_STYLE from './constants/sizeToStyle';

// Styles
import './circularImage.css';

const CircularImage = props => {
  const className = SIZE_TO_STYLE[props.size];
  return (
    <img src={props.imageUrl} className={`${className} circularImage__container`} />
  )
};

CircularImage.propTypes = {
  imageUrl: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

export default CircularImage;
export {SIZES};
