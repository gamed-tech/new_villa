import Hero from "../components/Hero";
import unitsImage from "../assets/images/unit-image.png";
import Counter from "./Counter";

export default function Units() {
  return (
    <>
    <Counter />
     <Hero
          backgroundImage={unitsImage}
          title="Where Visionary Design Meets Daily Life"
          description="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
          showButton={false}
          buttonText="Explore Now"
        />
        </>

  );
}