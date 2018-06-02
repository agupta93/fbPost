import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactionButton from '../src/components/atoms/reactionButton';
import Reactions from '../src/components/molecules/reactions';

storiesOf('ReactionButton', module)
  .add('sample text', () => <div style={{width: '100px'}}><ReactionButton text="Comment" /></div>)

storiesOf('Reactions', module)
  .add('sample reactions', () => <div style={{width: '300px'}}><Reactions reactions={['Like', 'Comment', 'Share']} /></div>)