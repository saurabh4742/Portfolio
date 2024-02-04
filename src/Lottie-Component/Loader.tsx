import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../Lottie/Cat-Loader.json";
const Loader: React.FC = () => {
    return (
        <div className=" z-50"
        >
          <Player src={animationData} loop  autoplay style={{height:300,width:300}}  />
        </div>
    );
};

export default Loader;
