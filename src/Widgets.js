import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1298701285630398465'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="davak_01"
          options={{ height: 400 }}
        />

        <TwitterShareButton url={'https://facebook.com/david.akpughe'} />
      </div>
    </div>
  );
};

export default Widgets;
