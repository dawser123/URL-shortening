import { useState } from "react";
import AuthButtons from "./AuthButtons";
import NavBarLinks from "./NavBarLinks";
import SideBarMenu from "./SideBarMenu";
import MaxWidthContainer from "./UI/MaxWidthContainer";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isActive, setIsactive] = useState(false);
  const toogleSidebar = () => {
    setIsactive((prevState) => !prevState);
  };
  return (
    <MaxWidthContainer>
      <div className=" flex items-center justify-between py-5">
        <div className="flex items-center justify-center">
          <h1 className="mr-5 text-4xl font-bold">Shortly</h1>
          <NavBarLinks className="hidden" />
        </div>

        <RxHamburgerMenu
          onClick={toogleSidebar}
          className="m:hidden text-gray cursor-pointer text-5xl"
        />

        <AuthButtons className="hidden " />
      </div>
      {isActive && <SideBarMenu />}
    </MaxWidthContainer>
  );
};

export default Navbar;
