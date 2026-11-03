import Hero from "../components/Hero";
import zonesImage from "../assets/images/zones-image.png";
import api from "../assets/utils/axios-instance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Zones() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get("/zone");
        const zoneData = response.data?.data ?? response.data;

        setZones(Array.isArray(zoneData) ? zoneData : []);
      } catch (error) {
        console.error("Failed to load zones", error);
      } finally {
        setLoading(false);
      }
    }

    getZones();
  }, []);

  return (
    <>
      <Hero
        backgroundImage={zonesImage}
        title="Destinations Defined by Distinction"
        description="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
        showButton={false}
        buttonText="Explore Now"
      />

      <section>
        {loading ? (
          <p className="text-center text-lg text-gray-600">loading...</p>
        ) : (
          <div>
            {zones.map((zones) => (
              <article
                key={zones.id}
              >
                {Array.isArray(zones.images) && zones.images.length > 0 && (
                  <div >
                    {zones.images.map((image, index) => {
                      const imageUrl =
                        typeof image === "string"
                          ? image
                          : image?.url ?? image?.image_url ?? image?.path;

                      return (
                        <img
                          key={`${imageUrl}-${index}`}
                          src={imageUrl}
                          alt={zones.name_en}
                          className="w-50 cursor-pointer"
                          onClick={() => navigate(`/zones/${zones.id}`)}
                        />
                      );
                    })}
                  </div>
                )}
                <div >
                  <h2 >{zones.name_en}</h2>
                  <p >{zones.description_en}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}