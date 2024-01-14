const NavBarLinks = ({ className }) => {
  return (
    <>
      <ul
        className={`text-gray ${className} m:flex  cursor-pointer gap-5 font-bold`}
      >
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </>
  );
};

export default NavBarLinks;
