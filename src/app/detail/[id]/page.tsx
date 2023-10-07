import React from "react";
import Image from "next/image";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./page.module.scss";

const DetailPage = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <KeyboardBackspaceIcon className={styles.backIcon} />
          Back
        </button>
      </header>
      <section className={styles.detailContainer}>
        <div className={styles.detailImage}>
          <Image
            className={styles.flagImage}
            src="/images/flag.png"
            width={100}
            height={100}
            alt="Country Flag"
          />
        </div>
        <div className={styles.detailContent}>
          <h2 className={styles.detailTitle}>Country Name</h2>
          <div className={styles.detailDescription}>
            <div className={styles.leftDesc}>
              <p>
                <span>Native Name:</span> Native Name
              </p>
              <p>
                <span>Population:</span> Population
              </p>
              <p>
                <span>Region:</span> Region
              </p>
              <p>
                <span>Sub Region:</span> Sub Region
              </p>
              <p>
                <span>Capital:</span> Capital
              </p>
            </div>
            <div className={styles.rightDesc}>
              <p>
                <span>Top Level Domain:</span> Top Level Domain
              </p>
              <p>
                <span>Currencies:</span> Currencies
              </p>
              <p>
                <span>Languages:</span> Languages
              </p>
            </div>
          </div>
          <div className={styles.detailBorderCountries}>
            <p>
              <span>Border Countries:</span> Border Countries
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailPage;
