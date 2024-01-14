import { useState } from "react";
import Button from "./UI/Button";

const Shortener = ({ url, shrtlnk }) => {
  const [copied, setCopied] = useState(false);
  const copyUrlHandler = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
  };
  return (
    <>
      <div className="relative mt-4 w-full rounded-md bg-white ">
        <div className=" flex flex-col items-center m:flex-row ">
          <p className="w-full px-5 py-1 font-bold ">{url}</p>
          <hr className="text-gray m:hidden" />
          <div className="flex w-full flex-col justify-end gap-3 px-5 py-3 m:flex-row m:items-center m:py-4">
            <p className="py-1 font-bold text-primaryColor">{shrtlnk}</p>
            <Button
              onClick={() => copyUrlHandler(shrtlnk)}
              className={`w-full rounded-md m:max-w-[25%] ${copied ? 'bg-secondaryColor lg:hover:bg-opacity-[100%]':''}`}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shortener;
