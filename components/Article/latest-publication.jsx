export default function LatestPublication(props)  {

  let {title, subtitle} = props.attributes;

  return (
    <div className="article">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {props.content}
    </div>
  );
}
