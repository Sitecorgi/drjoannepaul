
export default function Postcard(props) {
  
  let {about} = props.attributes
  return (
    <>
      <div className="postcard-wrapper">
        <img src="../../img/jo_headshot2.jpeg" />
      </div>

      <p className="postcard-message">
        {about}
      </p>
    </>
  );
}
