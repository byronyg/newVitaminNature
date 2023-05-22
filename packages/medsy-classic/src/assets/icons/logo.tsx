import Logos from "assets/image/logo.svg";
import Image from "next/image";

const Logo = ({ id, ...props }) => {
  return (
    <div>
      <Image src={Logos} alt="hero-image" className="w-42" />
    </div>
  );
};

export default Logo;
