import React from "react";

const InfoCard = ({topText, mainText, bottomText}) => {
  return (
    <div className="card relative border border-white/50 bg-transparent backdrop-blur-sm p-6 px-8 rounded-lg max-w-full overflow-hidden">
      {topText && <p className="text-sm text-white break-words">{topText}</p>}
      {mainText && <h1 className="text-5xl font-bold text-yellow-400 break-words">{mainText}</h1>}
      {bottomText && <p className="text-sm text-white break-words">{bottomText}</p>}
    </div>
  );
};

export default InfoCard;
