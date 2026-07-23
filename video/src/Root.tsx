import { Composition } from "remotion";
import { PortfolioIntro, TOTAL_DURATION } from "./PortfolioIntro";

export const RemotionRoot = () => {
  return (
    <Composition
      id="PortfolioIntro"
      component={PortfolioIntro}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
