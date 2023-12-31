import { Link } from "react-router-dom";
import logo from "../../images/logo/Final_ARC_Logo_small_web.png";
import Nav from "../Nav/Nav";
import "./header.css";

export default function Header(props) {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <nav className="navHeader">
        <Nav fontColor={props.fontColor}/>
      </nav>
    </header>
  );
}
