import Lottie from "lottie-react";
import anima from "../assets/shop.json";
const About = () => {
  return (
    <div className="pt-28 mb-10 w-full" id="about">
      <h1 className="text-5xl mb-10 font-semibold text-center ">About</h1>
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/2 md:border-r-2">
          <Lottie
            className="w-full h-full"
            animationData={anima}
            loop={true}
          ></Lottie>
        </div>
        <div className=" md:w-1/2 w-full full flex justify-center items-center">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
            praesentium omnis repellendus veniam? Dicta, natus, nemo, excepturi
            enim quidem aspernatur recusandae ea ipsam est laborum eos sit quod
            ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
