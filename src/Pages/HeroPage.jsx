import React from "react";
import background from '../Assets/background.mp4'

const HeroPage = () => {
    

    return(
        <div>
            <video className="background" src={background} autoPlay loop muted/>
            <h1>Does Your Borker Offer You All This?</h1>
            <button>Start Now</button>
            <br/>
            <button>Free Demo</button>
        </div>
    )
}

export default HeroPage;