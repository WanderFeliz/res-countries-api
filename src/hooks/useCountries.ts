import { ICountry } from "@/interfaces";
import { useQuery } from "react-query";

export const useCountries = () => {
  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=cca3,name,flags,tld,currencies,languages,capital,region,subregion,population,borders"
      );
      return response.json();
    } catch (error) {
      throw new Error("Error fetching countries");
    }
  };

  const { data, isLoading, isError } = useQuery<ICountry[], Error>(
    "countries",
    fetchCountries
  );
  const countries = data || [];

  return { countries, isLoading, isError };
};

export const useCountry = ({code}: {code: string}) => {
  // const result = useQuery(['countries', code], () => fetch('/todos'), {
  //   initialData: () => {
  //     // Use a todo from the 'todos' query as the initial data for this todo query
  //     return queryClient.getQueryData('todos')?.find(d => d.id === todoId)
  //   },
  // })
  // const country = data || {};

  // return { countries, isLoading, isError };
  return {}
};

