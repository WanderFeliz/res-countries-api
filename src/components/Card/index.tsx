"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./card.module.scss";

type CardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  onCardClick?: () => void;
};

const Card: FC<CardProps> = ({
  name,
  population,
  region,
  capital,
  flag,
  onCardClick,
}) => {
  return (
    <div className={styles.cardContainer} onClick={onCardClick}>
      <div className={styles.cardImage}>
        <Image
          className={styles.image}
          src={flag}
          alt="Country Flag"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name}</h2>
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
