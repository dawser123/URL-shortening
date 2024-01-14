import Button from "./UI/Button";

const Showcase = () => {
  return (
    <div className="bg-boostMobile m:bg-boostDesktop bg-veryDarkBlue bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-10 " >
      <h2 className="font-bold text-white mb-5 text-2xl">Boost your links today</h2>
      <Button className='rounded-full px-5'>Get Started</Button>
    </div>
  );
};

export default Showcase;
