import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../Lottie/Celebration.json";
const Celebration: React.FC = () => {
    return (
        <div className=" z-50"
        >
          <Player src={animationData}  autoplay style={{height:250,width:250}}  />
        </div>
    );
};

export default Celebration;
