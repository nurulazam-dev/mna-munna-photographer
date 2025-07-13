import { useEffect, useState } from "react";
// import url from "../Data/data.json"

const useServicesData = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    // fetch(url)
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return [servicesData, setServicesData];
};

export default useServicesData;
