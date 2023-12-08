import logo from "./images/react.png";

export default function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777"}}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">React Course - CountOPedia</span>
    </div>
  );
};

