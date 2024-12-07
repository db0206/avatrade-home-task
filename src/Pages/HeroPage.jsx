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

  return (
    <div>
      <div className="background">
        {/* <video className="background" src={background} autoPlay loop muted/> */}
      </div>
      <div className="bg-gray-500 flex flex-col justify-center items-center min-h-screen gap-y-4 px-8 mx-4">
        <h1 className="text-5xl">{titleText || "Loading..."}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard mainText="$0.19" bottomText="Per Micro contract" />
          <InfoCard mainText="$0.49" bottomText="Per Standard contract" />
          <InfoCard
            topText="Up to"
            mainText="3% interest"
            bottomText="on free margin"
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>
        <button className="bg-yellow-200 ">{buttonText || "Loading..."}</button>
        <button>Free Demo</button>
      </div>
    </div>
  );
};

export default HeroPage;
