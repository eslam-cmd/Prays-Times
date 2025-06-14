import { useState, useEffect } from "react";
import axios from "axios";

const usePrayerTimes = (city) => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const cities = [
    { name: "Aleppo", value: "Aleppo" },
    { name: "Damascus", value: "Damascus" },
    { name: "Homs", value: "Homs" },
    { name: "Hama", value: "Hama" },
    { name: "Latakia", value: "Latakia" },
    { name: "Tartus", value: "Tartus" },
    { name: "Idlib", value: "Idlib" },
    { name: "Al-Hasakah", value: "Al-Hasakah" },
    { name: "Reqqa", value: "Reqqa" },
    { name: "Daraa", value: "Daraa" },
  ];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Syria&method=5`;
        const response = await axios.get(apiUrl);
        if (response.data.code === 200) {
          setPrayerTimes(response.data.data.timings);
        } else {
          console.error("Failed to fetch prayer times");
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, [city]);

  return { prayerTimes, cities };
};

export default usePrayerTimes;
