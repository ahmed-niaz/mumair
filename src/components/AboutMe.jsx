import profile from "../assets/image/about-profile.png";
import rectange from "../assets/image/rectangle.png";

const AboutMe = () => {
  const rangeErrorStyle = {
    "--range-shdw": "#fd6f00",
  };

  return (
    <main className="flex justify-between my-12 font-poppins max-w-[1480px] mx-auto">
      <div className="relative w-1/2 flex items-center justify-center">
        <div className="absolute -mt-96">
          <img className="mb-12" src={rectange} alt="" />
        </div>

        <div>
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center">
        <h2 className="text-6xl mb-4 font-semibold">About Me</h2>
        <p>
          My approach combines creativity with data-driven insights, ensuring
          that every design decision is purposeful and user-centered. I believe
          that great design goes beyond visual appeal—it`s about creating
          meaningful interactions that resonate with users and drive business
          goals.
        </p>

        <div className="w-full">
          <h2 className="font-semibold text-2xl my-4">UX</h2>
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value="80"
              className="range range-error"
              style={rangeErrorStyle}
            />
          </div>
          <h2 className="font-semibold text-2xl my-4">Website Design</h2>
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value="70"
              className="range range-error"
              style={rangeErrorStyle}
            />
          </div>
          <h2 className="font-semibold text-2xl my-4">App Design</h2>
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value="94"
              className="range range-error"
              style={rangeErrorStyle}
            />
          </div>
          <h2 className="font-semibold text-2xl my-4">Graphic Design</h2>
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value="90"
              className="range range-error"
              style={rangeErrorStyle}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
