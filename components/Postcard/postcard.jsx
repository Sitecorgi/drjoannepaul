
export default function Postcard(props) {
  
  let {about} = props.attributes
  return (
    <>
      <div className="postcard-wrapper">
        <img src="../../img/djpheadshot1600.jpg" />
      </div>

      <p className="postcard-message">
        {about}
      </p>
    </>
  );
}
