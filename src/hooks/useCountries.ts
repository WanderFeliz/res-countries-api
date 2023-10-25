import { ICountry } from "@/interfaces";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
  const { data, isLoading, isError } = useQuery<ICountry[], Error>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const countries = data || [];

  return { countries, isLoading, isError };
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

  // if (result.data) {
  //   console.log(result.data);

  //   return { country: result.data, isLoading: result.isLoading };
  // }
};
