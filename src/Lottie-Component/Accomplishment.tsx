import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../Lottie/Accomplishment.json";
const AccomplishmentAnimation: React.FC = () => {
    return (
        <div
        >
          <Player src={animationData} autoplay loop style={{height:250,width:250}}  />
        </div>
    );
};

export default AccomplishmentAnimation;
