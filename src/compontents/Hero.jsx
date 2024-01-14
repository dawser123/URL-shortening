import illustration from "../assets/illustration-working.svg";
import Button from "./UI/Button";

const Hero = ({ children }) => {
  return (
    <div className="m:flex-row mt-16 flex w-full flex-col items-center ">
      <img
        className="m:order-1  m:w-auto m:absolute -right-28 mx-auto h-80 w-96 overflow-hidden"
        src={illustration}
        alt="Person working at a desk with a computer"
      />
      <div className=" m:text-left  m:mx-0 m:min-w-96 mx-auto my-10 w-64 text-center">
        <h2 className=" m:text m:text-5xl text-3xl font-bold ">
          More than just shorter links
        </h2>
        <p className="text-grayishViolet my-5 ">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Button className="rounded-full px-6">Get Started</Button>
      </div>
      {children}
    </div>
  );
};

export default Hero;
