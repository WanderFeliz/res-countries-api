"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./page.module.scss";
import { useRouter, useParams } from "next/navigation";
import { ICountry } from "@/interfaces";
import {useCountries} from "@/hooks/useCountries";
import { BorderCountryType } from "@/types";

type DetailPageProps = {
  country: ICountry;
};

const DetailPage: React.FC<DetailPageProps> = () => {
  const router = useRouter();
  const params = useParams();
  const cid = params?.id;
  const { countries } = useCountries();
  const [country, setCountry] = useState<ICountry | undefined>(undefined);
  const [nativeName, setNativeName] = useState<string>("");
  const [borderCountries, setBorderCountries] = useState<
    BorderCountryType[] | []
  >();

  const getNativeName = (country?: ICountry): string => {
    if (!country) return "";
    const nativeName = country?.name?.nativeName;
    const lang = Object.keys(nativeName)[0];
    return nativeName[lang]?.common || "";
  };

  const getBorderCountries = (country?: ICountry): BorderCountryType[] => {
    if (!country) return [];
    const borders = country?.borders || [];
    return borders.map((border) => {
      const country = countries.find((country) => country.cca3 === border);
      return {
        common: country?.name?.common || "",
        goTo: () => router.push(`/detail/${border}`),
        cca3: border,
      };
    });
  };

  useEffect(() => {
    if (!cid) router.push("/");

    const country = countries.find((country) => country.cca3 === cid);
    setCountry(country);
    setNativeName(getNativeName(country));
    setBorderCountries(getBorderCountries(country));
  }, [cid, countries]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <KeyboardBackspaceIcon className={styles.backIcon} />
          Back
        </button>
      </header>
      <section className={styles.detailContainer}>
        <div className={styles.detailImage}>
          <Image
            className={styles.flagImage}
            src={country?.flags?.svg || ""}
            width={100}
            height={100}
            alt={country?.flags?.alt || ""}
          />
        </div>
        <div className={styles.detailContent}>
          <h2 className={styles.detailTitle}>{country?.name?.common}</h2>
          <div className={styles.detailDescription}>
            <div className={styles.leftDesc}>
              <p>
                <span>Native Name: </span>
                {nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country?.population}
              </p>
              <p>
                <span>Region: </span>
                {country?.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country?.subregion}
              </p>
              <p>
                <span>Capital: </span>Capital
              </p>
            </div>
            <div className={styles.rightDesc}>
              <p>
                <span>Top Level Domain: </span> {country?.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.values(country?.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span>Languages: </span>{" "}
                {Object.values(country?.languages || {}).join(", ")}
              </p>
            </div>
          </div>
          <div className={styles.detailBorderCountries}>
            <h4>Border Countries:</h4>
            <div className={styles.buttonContainer}>
              {borderCountries?.map((borderCountry) => (
                <button
                  key={borderCountry.cca3}
                  onClick={borderCountry.goTo}
                  className={styles.borderCountryBtn}
                >
                  {borderCountry.common}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
