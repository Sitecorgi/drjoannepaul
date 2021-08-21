import Image from 'next/image';
import LatestBook from '../../img/council_and_command.jpg';

export default function RightImage() {
    return (
        <div className="right-image-wrapper">
            <Image src={LatestBook} layout="intrinsic" ></Image>
        </div>
    )
}