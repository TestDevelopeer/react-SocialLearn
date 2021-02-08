import preloader from "../../../assets/images/loader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div style={ {background: 'white'} }>
            <img src={preloader} alt="Preloader"/>
        </div>
    );
}

export default Preloader;