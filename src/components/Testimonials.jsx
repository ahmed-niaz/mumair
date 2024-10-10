import { useState } from "react";
import profile1 from "../assets/testimonial/profile-1.png";
import profile2 from "../assets/testimonial/profile-2.jpg";
import profile3 from "../assets/testimonial/profile-3.jpg";
import profile4 from "../assets/testimonial/profile-4.jpg";
const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <main className="font-poppins max-w-[1480px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-8xl">Testimonials</h1>
        <p className="w-3/5 text-center">
          Design process involves thorough research, wireframing, prototyping,
          and user testing to ensure that each product not only looks appealing
          but also provides meaningful interactions.
        </p>
      </div>
      <div>
        <div className="carousel w-full my-12">
          <div
            id="item1"
            className="carousel-item w-full flex items-center  justify-center"
          >
            <div className="flex w-3/5 items-center justify-between bg-[#F8F8F8]  p-4">
              <div className="w-1/5 ">
                <img
                  className="w-24 h-24  rounded-full"
                  src={profile1}
                  alt={profile1}
                />
              </div>
              <div className="w-4/5 ">
                <p>
                  I couldn`t be happier with the service I received! The team
                  was incredibly professional, responsive, and went above and
                  beyond to meet my needs. From start to finish, the process was
                  seamless, and the final product exceeded my expectations.
                </p>

                <h2 className="font-bold mt-2">Alex Falcon</h2>
                <h4 className="font-medium">CEO</h4>
              </div>
            </div>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex items-center  justify-center"
          >
            <div className="flex w-3/5 items-center justify-between bg-[#F8F8F8]  p-4">
              <div className="w-1/5 ">
                <img
                  className="w-24 h-24  rounded-full"
                  src={profile2}
                  alt={profile2}
                />
              </div>
              <div className="w-4/5 ">
                <p>
                  "Working with this team was a game-changer for my business.They took the time to understand my vision and delivered a solution that perfectly matched my goals. Their attention to detail and willingness to iterate until everything was perfect .
                </p>

                <h2 className="font-bold mt-2">Tom Clark</h2>
                <h4 className="font-medium">CEO</h4>
              </div>
            </div>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex items-center  justify-center"
          >
            <div className="flex w-3/5 items-center justify-between bg-[#F8F8F8]  p-4">
              <div className="w-1/5 ">
                <img
                  className="w-24 h-24 rounded-full"
                  src={profile3}
                  alt={profile3}
                />
              </div>
              <div className="w-4/5 ">
                <p>
                "Absolutely fantastic! From the moment I reached out they were attentive, professional, and incredible knowledgeable.They listened to my requirements and came up with a solution that was better than I could have imagined.
                </p>

                <h2 className="font-bold mt-2">Joe</h2>
                <h4 className="font-medium">App Designer</h4>
              </div>
            </div>
          </div>
          <div
            id="item4"
            className="carousel-item w-full flex items-center  justify-center"
          >
            <div className="flex w-3/5 items-center justify-between bg-[#F8F8F8]  p-4">
              <div className="w-1/5 ">
                <img
                  className="w-24 h-24  rounded-full"
                  src={profile4}
                  alt={profile4}
                />
              </div>
              <div className="w-4/5 ">
                <p>
                I had an amazing experience! They were prompt, communicative, and most importantly, they delivered a fantastic end product that fit exactly what I was looking for. The team’s creativity and expertise are unmatched, and I couldn’t be more satisfied with the outcome.
                </p>

                <h2 className="font-bold mt-2">Soha Vaan</h2>
                <h4 className="font-medium">Graphic Designer</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {[1, 2, 3, 4].map((slideNumber) => (
            <a
              key={slideNumber}
              href={`#item${slideNumber}`}
              className={`btn btn-xs ${
                activeSlide === slideNumber ? "bg-orange" : "bg-gray-300"
              }`}
              onClick={() => handleSlideChange(slideNumber)}
            ></a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
