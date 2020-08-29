import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'David Akpughe',
      username: 'davak',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1263589784183664642/Tt8BH1Ql_400x400.jpg',
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox ">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1263589784183664642/Tt8BH1Ql_400x400.jpg" />
          <input
            placeholder="What's happening"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
