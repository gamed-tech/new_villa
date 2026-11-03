
import api from "../assets/utils/axios-instance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ZonesDetails() {
  const { id } = useParams();
  const [zones, setZones] = useState(null);

  useEffect(() => {
    const getZone = async () => {
      try {
        const response = await api.get(`/zone/${id}`);
        setZones(response.data?.data ?? response.data);
      } catch (error) {
        console.error("Failed to load zone", error);
      }
    };

    getZone();
  }, [id]);

  return (
    <>
      
      {zones && <h1>{zones.name_en}</h1>}
    </>
  );
}