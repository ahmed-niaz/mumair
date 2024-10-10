import logo from "../assets/logo/logo.png";
const Navbar = () => {
  return (
    <main className="max-w-[1480px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-[67px] h-[67px]" src={logo} alt={logo} />
          <p className="font-montserrat text-[48px] font-normal">
            {" "}
            <span className="font-bold">M</span>umair
          </p>
        </div>
        <div className="flex-none font-poppins">
          <ul className="menu menu-horizontal px-1 mx-[12px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <button className="bg-orange text-white hover:bg-white hover:bg-[#fd6e00e1]">
                Download CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
