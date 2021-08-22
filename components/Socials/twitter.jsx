import {TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Twitter(props) {

  let {tweets} = props.attributes;

  return (
    <div className="article">
      <h2>{tweets}</h2>

      <TwitterTimelineEmbed
        sourceType="profile"
        userId={53579052}
        theme="light"
        options={{ height: 600 }}
        noScrollbar
        transparent
      />
    </div>
  );
}
