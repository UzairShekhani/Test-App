import Demobtn from "./Demobtn";
import Newfeature from "./Newfeature";
import image from "../assets/,s,s,s.jfif";
import LogoSection from "./LogoSection";

const Hero = () => {
  return (
    <section className="text-center py-12">
      <Newfeature />
      <br />
      <h1 className="text-5xl font-bold">
        Beautiful analytics to grow smarter
      </h1>
      <br />
      <p className="mt-4 text-lg text-gray-600  font-semibold">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, <br /> and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-6">
        <div class="flex justify-center items-center">
          <Demobtn />
          <button className="ml-4 px-4 py-2 text-white bg-[#8554D7] rounded-lg">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <img
          src={image}
          alt="Centered"
          className="w-[80%] h-[80%] object-contain border-8   border-black  rounded-lg"
        />
      </div>
      <LogoSection/>
      <br />
      <br />
    </section>
  );
};
export default Hero;
