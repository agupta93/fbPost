import React from 'react';
import PropTypes from 'prop-types';

// Components
import CircularImage from '../../atoms/circularImage';
import TimeAgo from 'react-timeago';

// Styles
import './postHeader.css';

const PostHeader = props => {
  return (
    <div className="postHeader__container">
      <CircularImage
        imageUrl={props.imageUrl}
        size="LG"
      />
      <div className="postHeader__content">
        <div className="postHeader__title">
          <span className="postHeader__userName">{props.userName} </span>
          <span>{props.title}</span>
        </div>
        <TimeAgo
          date={props.time}
          className="postHeader__timeAgo"
        />
      </div>
    </div>
  )
}

PostHeader.propTypes = {
  imageUrl: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  userName: PropTypes.string,
};

export default PostHeader;