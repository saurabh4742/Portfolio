import Lottie from 'lottie-react';
import animationData from "../Lottie/Profile.json";
const ProfileAnimation: React.FC = () => {


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

export default ProfileAnimation;
