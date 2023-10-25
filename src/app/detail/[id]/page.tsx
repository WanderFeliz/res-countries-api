import { ICountry } from "@/interfaces";
import { FIELDS } from "@/constants";
import React from "react";
import DetailCountry from "./DetailCountry";

export async function generateStaticParams() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=${FIELDS}`
  );
  const countries: ICountry[] = await res.json();

  return countries.map((country) => ({
    id: country.cca3,
  }));
}

const DetailPage = () => {
  return <DetailCountry />;
};

export default DetailPage;
