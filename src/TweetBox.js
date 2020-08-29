import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

const TweetBox = () => {
  return (
    <div className="tweetBox ">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1263589784183664642/Tt8BH1Ql_400x400.jpg" />
          <input placeholder="What's happening" type="text" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
