import { ICountry } from "@/interfaces";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";

const FIELDS =
  "cca3,name,flags,tld,currencies,languages,capital,region,subregion,population,borders";

const COUNTRY_API_URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

const fetchCountries = async (): Promise<ICountry[]> => {
  try {
    const response = await fetch(COUNTRY_API_URL);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching countries");
  }
};

const fetchCountryByCode = async (code: string): Promise<ICountry> => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/codes=${code}?fields=${FIELDS}`
    );
    return response.json();
  } catch (error) {
    throw new Error("Error fetching country");
  }
};

export const useCountries = () => {
  const [countryFilter, setCountryFilter] = useState<string | null>("");
  const [regionFilter, setRegionFilter] = useState<string | null>("");

  const filterCountryByRegion = (countries: ICountry[]) => {
    if (!regionFilter) return countries;
    return countries.filter((country) =>
      country.region.toLowerCase().includes(regionFilter.toLowerCase())
    );
  };

  const filterCountryByName = (countries: ICountry[]) => {
    if (!countryFilter) return countries;
    return countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(countryFilter.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(countryFilter.toLowerCase())
    );
  };

  const filterCountry = useCallback(
    (countries: ICountry[]) => {
      if(countryFilter && regionFilter){
        return filterCountryByName(filterCountryByRegion(countries));
      }else if (countryFilter) {
        return filterCountryByName(countries);
      }else if (regionFilter) {
        return filterCountryByRegion(countries);
      } else{
        return countries;
      }
    },
    [countryFilter, regionFilter]
  );

  const { data, isLoading, isError } = useQuery<ICountry[], Error>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    refetchOnWindowFocus: false,
    select: filterCountry,
  });

  const countries = data || [];

  return { countries, isLoading, isError, setCountryFilter, setRegionFilter };
};

export const useCountry = (code: string | string[]) => {
  const paramCode: string =
    typeof code == "object" && code?.length ? code[0] : code.toString();
  const queryClient = useQueryClient();

  return useQuery<ICountry, Error>({
    queryKey: ["country", code],
    queryFn: () => fetchCountryByCode(paramCode),
    initialData: () =>
      queryClient
        .getQueryData<any>(["countries"])
        ?.find((country: ICountry) => country.cca3 === code),
  });
};
