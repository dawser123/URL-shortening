import { useEffect, useState } from "react";
import Shortener from "./Shortener";
import Button from "./UI/Button";
import MaxWidthContainer from "./UI/MaxWidthContainer";

const apiUrl = "https://www.shrtlnk.dev/api/v2/link";
const apiKEY = import.meta.env.VITE_REACT_APP_SHORTENER_API_KEY;
const linkFromLocalStorage = JSON.parse(localStorage.getItem("link") || "[]");

const Input = () => {
  const validateLink = /^[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const [enteredText, setEnteredText] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState(linkFromLocalStorage);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const orginalUrl = enteredText;
  const isValid = validateLink.test(enteredText);

  useEffect(() => {
    localStorage.setItem("link", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);
  const inputValue = (event) => {
    setEnteredText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredText.trim() === "" || !isValid) {
      setError(true);
      return;
    } else {
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "api-key": apiKEY,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: orginalUrl }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} server error`);
        }
        return response.json();
      })
        .then((data) => {
          setShortenedLinks((prevState) => [...prevState, data]);
        })
        .catch((error) => {
          setErrorMsg(" An error occured " + error.message);
        });
      setError(false);
      setEnteredText("");
    }
  };

  return (
    <MaxWidthContainer>
      <div id="input" className="relative -top-20 mx-auto m:mx-0 w-[90%] m:w-full">
        <div className=" relative mt-16 min-w-[225px] rounded-lg bg-veryDarkBlue  bg-inputImgMobile bg-cover bg-left-bottom bg-no-repeat p-10 m:mt-24 m:bg-inputImgDesktop ">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-start justify-center gap-2 m:flex-row"
          >
            <input
              value={enteredText}
              onChange={inputValue}
              className={`w-full ${
                error
                  ? "border-2 border-red-500 placeholder:text-red-500/75"
                  : ""
              } rounded-md p-2`}
              type="text"
              placeholder="Shorten a link here..."
            />
            {error && (
              <p className="text-left text-red-500 m:hidden">
                Please add a link
              </p>
            )}

            <Button className="w-full rounded-md m:w-[30%]">Shorten it!</Button>
            <p className="text-white ">{errorMsg}</p>
          </form>
          {error && (
            <p className="hidden pt-1 text-left text-red-500 m:block">
              Please add a link
            </p>
          )}
        </div>
        {shortenedLinks.map((data) => (
          <Shortener key={data.key} url={data.url} shrtlnk={data.shrtlnk} />
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default Input;
