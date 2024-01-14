import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-veryDarkViolet">
      <div className=" mx-auto flex max-w-[1200px] flex-col items-center justify-center py-14 text-white m:flex-row m:justify-between">
        <h2 className="my-10 text-2xl font-bold sm:mx-auto">Shortly</h2>
        <div className="flex flex-col gap-10 px-10 m:flex-row m:gap-4">
          <ul>
            <h3 className=" my-5  text-center font-bold">Features</h3>
            <div className="flex cursor-pointer flex-col items-center gap-1">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </div>
          </ul>
          <ul>
            <h3 className=" my-5  text-center font-bold">Resources</h3>
            <div className="flex cursor-pointer flex-col items-center gap-1">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </div>
          </ul>
          <ul>
            <h3 className=" my-5  text-center font-bold">Company</h3>
            <div className="flex cursor-pointer flex-col items-center gap-1">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </div>
          </ul>
          <div className="flex gap-5 py-5 text-2xl m:flex-row">
            <FaFacebookSquare />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
