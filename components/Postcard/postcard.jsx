
export default function Postcard(props) {
  
  let {about} = props.attributes
  return (
    <>
      <div className="postcard-wrapper">
        <img src="../../img/jowithfalcon.jpg" />
      </div>

      <p className="postcard-message">
        {about}
      </p>
    </>
  );
}
