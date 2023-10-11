import { ICountry } from "@/interfaces";
import { useEffect, useState } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=cca3,name,flags,tld,currencies,languages,capital,region,subregion,population,borders"
      );
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useCountries;
