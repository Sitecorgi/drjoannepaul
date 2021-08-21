import {TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Twitter() {
  return (
    <div className="article">
      <h2>Latest Tweets from Joanne</h2>

      <TwitterTimelineEmbed
        sourceType="profile"
        userId="53579052"
        theme="light"
        options={{ height: 600 }}
        noScrollbar
        transparent
      />
    </div>
  );
}
