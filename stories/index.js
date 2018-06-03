import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ReactionButton from '../src/components/atoms/reactionButton';
import Reactions from '../src/components/molecules/reactions';
import CircularImage from '../src/components/atoms/circularImage';
import PostHeader from '../src/components/molecules/postHeader';
import Post from '../src/components/organisms/post';

storiesOf('ReactionButton', module)
  .add('sample text', () => <div style={{width: '100px'}}><ReactionButton text="Comment" /></div>)

storiesOf('Reactions', module)
  .add('sample reactions', () => <div style={{width: '300px'}}><Reactions reactions={['Like', 'Comment', 'Share']} /></div>)

storiesOf('Circular Image', module)
  .add('Sample Image', () => <CircularImage size="MD" imageUrl="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg" />)

storiesOf('Post Header', module)
  .add('Sample Header', () => (
    <PostHeader
      imageUrl="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg"
      userName="Kim Jones"
      title="updated the following post"
      time={new Date('2018-06-02T15:33:03.985Z')}
    />
  ))

storiesOf('Post', module)
  .add('Sample header', () => (
    <Post
      imageUrl="https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg"
      userName="Kim Jones"
      title="updated the following post"
      time={new Date('2018-06-02T15:33:03.985Z')}
      description="When your city is nearly out of water, every drop counts. Dena shows you how to use only 13 gallons a day in Cape Town."
    />
  ));