import { Brand } from "../assets/Images";
import "./logo.css";
const Logo = () => {
  return (
    <div className="brand">
      <img className="brand-img" src={Brand} alt="" />
      <p className="brand-name">
        Zerihun<span>Associates</span>
      </p>
      <p className="moto">Advancing Evidence Based Policy Making In Africa</p>
    </div>
  );
};

export default Logo;
