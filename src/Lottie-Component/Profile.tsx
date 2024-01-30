import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../Lottie/Profile.json";
import { useState, useRef, useEffect } from "react";
const ProfileAnimation: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const playerRef = useRef<Player>(null);

  const toggleAnimation = () => {
    setIsPlaying((prevState) => !prevState);
  };
  useEffect(() => {
    if (isPlaying) {
      playerRef.current?.play();
    } else {
      playerRef.current?.pause();
    }
  }, [isPlaying]);
    return (
        <div onClick={() => {
            toggleAnimation();
          }}
        >
          <Player src={animationData} loop autoplay ref={playerRef} />
        </div>
    );
};

export default ProfileAnimation;
