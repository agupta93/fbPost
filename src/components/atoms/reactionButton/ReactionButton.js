import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// Styles
import './reactionButton.css';

const ReactionButton = props => (
  <div className="ReactionButton__text">{props.text}</div>
);

ReactionButton.propTypes = {
  text: PropTypes.string,
};

export default ReactionButton;