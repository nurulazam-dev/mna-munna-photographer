import { useEffect, useState } from "react";

const useServicesData = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data))
      .catch((error) => {
        console.error("Failed to fetch services data:", error);
        setServicesData([]);
      });
  }, []);
  return [servicesData, setServicesData];
};

export default useServicesData;
