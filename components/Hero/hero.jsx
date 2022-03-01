
export default function Hero (props){

    let url = props.url;
    let display = props.display;
    return (
        <div className={`hero-wrapper hero-wrapper-${display}`}>
            <img src={`../img/${url}`} />
        </div>
    )
}
