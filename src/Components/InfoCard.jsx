import React from "react";

const InfoCard = ({topText, mainText, bottomText, className}) => {
  return (
    <div className={`relative border border-white/50 bg-transparent/20 backdrop-blur-sm p-6 px-8 rounded-lg max-w-full overflow-hidden shadow-lg ${className}`}>
      {topText && <p className="text-sm text-white break-words">{topText}</p>}
      {mainText && <h1 className="text-5xl font-bold text-yellow-200 break-words">{mainText}</h1>}
      {bottomText && <p className="text-sm text-white break-words">{bottomText}</p>}
    </div>
  );
};

export default InfoCard;
