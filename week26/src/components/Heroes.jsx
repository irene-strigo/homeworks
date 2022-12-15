import './Heroes.css';

function Hero(props) {
    return (
        <div className='hero-card'>
            <img className='hero-img' src={props.picture} />
            <div className='hero-name'>{props.name}</div>
            <div className='hero-universe'>{props.universe}</div>
            <div className='hero-altername'>{props.altername}</div>
            <div className='hero-occupation'>{props.occupation}</div>
            <div className='hero-superpowers'>{props.superpowers}</div>
            <div className='hero-friends'>{props.friends}</div>
            <div className='hero-longtext'>{props.longtext}</div>
        </div>
    );
}
export default Hero