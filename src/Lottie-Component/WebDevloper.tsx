import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../Lottie/WebDevloper3.json";

const WebDeveloper: React.FC = () => {


    return (
        <div >
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};

export default WebDeveloper;
