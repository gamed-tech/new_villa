import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import DevelopersImage from "../assets/images/developers-image.png";
import api from "../assets/utils/axios-instance";

export default function Developers() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await api.get("/");
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.data;

        if (!Array.isArray(data)) {
          throw new Error("The developers API returned an invalid response.");
        }

        setDevelopers(data);
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      }
    };

    fetchDevelopers();
  }, []);

  useEffect(() => {
    document.title = "Developers";
  }, [developers]);

  return (
    <>
      <Hero
        backgroundImage={DevelopersImage}
        title="Defining the Future Skyline."
        description="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        showButton={false}
        buttonText="Explore Now"
      />

      {developers.map((developer) => (
        <h1 key={developer.id} className="bg-red-300">
          {developer.name_en}
        </h1>
      ))}
    </>
  );
}