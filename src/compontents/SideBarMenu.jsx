import NavBarLinks from "./NavBarLinks";
import Button from "./UI/Button";

const SideBarMenu = ({onclick}) => {
  return (
    <div onClick={onclick} className="bg-secondaryColor m:hidden  flex w-full flex-col items-center justify-center rounded-md py-5 text-white ">
      <div className="flex w-[90%] flex-col items-center gap-5">
        <NavBarLinks className="block" />
        <hr className="text-grayishViolet w-full" />
        <div className="mt5 flex flex-col gap-2  ">
          <button className="text-gray cursor-pointer font-bold">Login</button>
          <Button className="rounded-full px-14">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
