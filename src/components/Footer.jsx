import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <main className="font-poppins ">
      <div className="flex flex-col items-center justify-center bg-[#F8F8F8] space-y-4 py-12">
        <div className="flex">
          <img className="w-[67px] h-[67px]" src={logo} alt={logo} />
          <p className="font-montserrat text-[48px] font-normal">
            {" "}
            <span className="font-bold">M</span>umair
          </p>
        </div>
        <div className=" font-poppins">
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
          </ul>
        </div>
        <div>
          
          <ul className="flex items-center justify-center gap-4 mt-4">
            <li>
              <FaFacebook size={32} />
            </li>
            <li>
              <FaTwitter size={32} />
            </li>
            <li>
              <AiOutlineInstagram size={32} />
            </li>
            <li>
              <FaLinkedin size={32} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#545454] py-4">
        <p className="text-neutral-50">© 2023 <span className="text-orange">Mumair</span> All Rights Reserved , Inc.</p>
      </div>
    </main>
  );
};

export default Footer;



