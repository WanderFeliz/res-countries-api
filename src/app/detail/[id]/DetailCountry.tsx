"use client";
import React from "react";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./page.module.scss";
import { useRouter, useParams } from "next/navigation";
import { ICountry } from "@/interfaces";
import { useCountry } from "@/hooks/useCountries";
import { BorderCountryButton } from "@/components/BorderCountryButton";

const DetailCountry = () => {
  const router = useRouter();
  const params = useParams();
  const cid = params?.id;
  const { data: country, status } = useCountry(cid);
  const borders = country?.borders || [];


  const nativeName = (country?: ICountry): string => {
    if (!country) return "";
    const nativeName = country?.name?.nativeName;
    const lang = Object.keys(nativeName)[0];
    return nativeName[lang]?.common || "";
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => router.back()}>
          <KeyboardBackspaceIcon className={styles.backIcon} />
          Back
        </button>
      </header>
      <section className={styles.detailContainer}>
        {status !== "success" ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles.detailImage}>
              <Image
                className={styles.flagImage}
                src={country?.flags?.svg || "/"}
                width={100}
                height={100}
                priority
                alt={country?.flags?.alt || ""}
              />
            </div>
            <div className={styles.detailContent}>
              <h2 className={styles.detailTitle}>{country?.name?.common}</h2>
              <div className={styles.detailDescription}>
                <div className={styles.leftDesc}>
                  <p>
                    <span>Native Name: </span>
                    {nativeName(country)}
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
                  {borders?.map((borderCode) => (
                    <BorderCountryButton
                      key={borderCode}
                      borderCode={borderCode}
                      styles={styles}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default DetailCountry;
