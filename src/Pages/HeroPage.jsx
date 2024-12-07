import React, { useEffect, useState } from "react";
import background from "../Assets/background.mp4";
import InfoCard from "../Components/InfoCard";

const HeroPage = () => {
  const [buttonText, setButtonText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const updateText = () => {
          setButtonText(
            windowWidth <= 768
              ? data.hero_section.mobile_btn_text
              : data.hero_section.desktop_btn_text
          );
          setTitleText(
            windowWidth <= 768
              ? data.hero_section.mobile_title_text
              : data.hero_section.desktop_title_text
          );
        };
        updateText(); // Initial text update
        // Update text when resizing
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          updateText();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // Cleanup
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [windowWidth]);

  const getStyledText = (titleText) => {
    const words = titleText.split(" ");
    const lastTwoWords = words.slice(-2).join(" "); // Last two words
    const restOfText = words.slice(0, -2).join(" "); // Rest of the text

    return (
      <>
        <span>{restOfText} </span>
        <span className="text-yellow-200">{lastTwoWords}</span>
      </>
    );
  };

  return (
    <div>
      {/* video background */}
      <div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={background}
          autoPlay
          loop
          muted
        />
      </div>

      {/*gentle black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-[-1]"></div>

      {/*page content */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-y-4 px-8 mx-4">
        {/*main text */}
        <h1 className="text-7xl text-white">
          {titleText ? getStyledText(titleText) : "Loading..."}
        </h1>

        {/*cards*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-6">
          <InfoCard mainText="$0.19" bottomText="Per Micro contract" />
          <InfoCard mainText="$0.49" bottomText="Per Standard contract" />
          <InfoCard
            topText="Up to"
            mainText="3% interest"
            bottomText="on free margin"
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>

        {/*buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <button className="bg-yellow-200 text-black py-4 px-20  ">
            {buttonText || "Loading..."}
          </button>
          <button className="text-white opacity-60">Free Demo</button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
