import PostcardImage from "../../img/jowithfalcon.jpg";
import Image from "next/image";

export default function Postcard() {
  return (
    <>
      <div className="postcard-wrapper">
        <Image src={PostcardImage} layout="intrinsic" width="270px"></Image>
      </div>

      <p className="postcard-message">
        <strong>
          Dr Joanne Paul, BA, MA, PhD (Queen Mary, University of London) is an
          award-winning historian who has published her research on the
          Renaissance and Early Modern Periods widely.{" "}
        </strong>
      </p>
    </>
  );
}
