import { AiOutlineInstagram } from "react-icons/ai";
import profile from "../assets/image/bannar_profile.png";
import rectange from "../assets/image/rectangle.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Banner = () => {
  return (
    <main className="flex justify-between my-12 font-poppins max-w-[1480px] mx-auto ">
      <div className=" w-1/2">
        <div>
          <h2 className="text-2xl">Hi, I am</h2>
          <h2 className="text-[32px] text-orange">Niaz Ahmed</h2>
          <div>
            <h1 className="text-[100px] font-bold">UI & UX</h1>
            <h1 className="text-[100px] font-bold -mt-12 ml-48">Designer</h1>
          </div>
          <p className="mb-4">
            UI/UX designer with a keen eye for detail and a user-centered
            approach to design. With years of experience, I specialize in
            creating intuitive, efficient, and visually appealing digital
            experiences that solve real user problems.
          </p>
        </div>
        <button className="btn bg-[#FD6F00] text-white px-8 hover:bg-[#fd6e00e1]">
          Hire Me
        </button>
      </div>
      <div className="relative  w-1/2 flex items-center justify-center">
        <div className="absolute -mt-96">
          <img className="mb-12" src={rectange} alt="" />
        </div>

        <div>
          <img src={profile} alt={profile} />
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
    </main>
  );
};

export default Banner;
