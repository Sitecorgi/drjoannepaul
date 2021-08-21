import Image from 'next/image';
import HeroImage from '../../img/1200x500.png';

export default function Hero (){
    return (
        <div className="hero-wrapper">
            <Image src={HeroImage} alt="hampton court" layout="responsive"/>
        </div>
    )
}
