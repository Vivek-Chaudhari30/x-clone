// import React from 'react';
// import './Widget.css';

// function Widget() {
//   return (
//     <div className='widgets'>Widget</div>
//   )
// }

// export default Widget

import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1687042562513850368"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Hiteshchaudhari"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/Hiteshchaudhari"}
          options={{ text: "#reactjs is awesome", via: "Vivek Chaudhari" }}
        />
      </div>
    </div>
  );
}

export default Widgets;