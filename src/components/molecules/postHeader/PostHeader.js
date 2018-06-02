import React from 'react';
import PropTypes from 'prop-types';

// Components
import CircularImage from '../../atoms/circularImage';
import TimeAgo from 'react-time-ago';

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
        {/* <TimeAgo
          locale="en"
          className="postHeader__timeAgo"
        >{props.time}</TimeAgo> */}
      </div>
    </div>
  )
}

PostHeader.propTypes = {
  imageUrl: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.instanceOf(Date),
};

export default PostHeader;