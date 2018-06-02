import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

// Components
import ReactionButton from '../../atoms/reactionButton';

// Styles
import './reactions.css';

const renderReaction = reaction => (<ReactionButton text={reaction} />);

const Reactions = props => (
  <div className="Reactions__container">
    {_map(props.reactions, renderReaction)}
  </div>
);

Reactions.propTypes = {
  reactions: PropTypes.arrayOf(PropTypes.string),
}

export default Reactions;
