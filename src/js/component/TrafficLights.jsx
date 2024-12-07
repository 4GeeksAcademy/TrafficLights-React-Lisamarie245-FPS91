import React from "react";
import { useState } from 'react';



export const TrafficLights = () => {
    //codigo JS

    // let color = "blue";

    const [color, setColor] = useState("red");

   


    // componente HTML 1SOLO
    return (
        <div className="body container row">

            <div className="trafficLightBox">

                <div className="trafficLightStick"></div>

                <div className="trafficLightBody">
                    <div className="trafficLights">
                        <div onClick={()=> setColor("red")} className={ `red ${color === "red"? "glow": ""}`}></div>
                        <div onClick={()=> setColor("yellow")} className={ `yellow ${color === "yellow"? "glow": ""}`}></div>
                        <div onClick={()=> setColor("green")} className={ `green ${color === "green"? "glow": ""}`}></div>
                    </div>
                </div>
                <div className="trafficLightFoot"></div>

            </div>

        </div>


    );
}