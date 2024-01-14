import SummaryCard from "./UI/SummaryCard";
import Detail from "../assets/detailed-records.svg";
import Brand from "../assets/brand-recognition.svg";
import Customizable from "../assets/fully-customizable.svg";
const Summary = ({ children }) => {
  return (
    <>
      <div className=" max-w-full  bg-zinc-200 pb-28">
      {children}
        <h2 className=" text-center text-2xl font-bold">
          Advanced Statistics
        </h2>
        <p className=" text-grayishViolet m:w-96 mx-auto  my-5 w-80 text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="relative my-24 flex flex-col items-center justify-center gap-14 lg:flex-row lg:gap-5">
          <div className="bg-primaryColor absolute h-2 w-[40rem] rotate-90 lg:rotate-0 "></div>
          <SummaryCard
            title="Brand Recognition"
            img={Brand}
            text="Boost your brand recognition with each click. Generic links dont's mean a thing. Branded links help instil confidence in your content."
          />
          <SummaryCard
            classname="relative top-10"
            title="Detailed Records"
            img={Detail}
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />

          <SummaryCard
            classname="top-20 relative"
            title="Fully Customizable"
            img={Customizable}
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
          />
        </div>
      </div>
    </>
  );
};

export default Summary;
