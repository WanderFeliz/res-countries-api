"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./card.module.scss";
import { ICountry } from "@/interfaces";

type CardProps = {
  country: ICountry;
  onCardClick?: () => void;
};

const Card: FC<CardProps> = ({ country, onCardClick }) => {
  const { name, population, region, capital, flags } = country;
  return (
    <div className={styles.cardContainer} onClick={onCardClick}>
      <div className={styles.cardImage}>
        <Image
          className={styles.image}
          src={flags.svg}
          alt="Country Flag"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name.common}</h2>
        <div className={styles.cardDescription}>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
