import Image from "next/image";
import React from "react";
import styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <Image className={styles.image} src="/images/flag.png" alt="Country Flag" width={50} height={50} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>Germany</h2>
        <div className={styles.cardDescription}>
          <p>
            <span>Population:</span> 123456789
          </p>
          <p>
            <span>Region:</span> Region
          </p>
          <p>
            <span>Capital:</span> Capital
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
