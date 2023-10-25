"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@/hooks/useTheme";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { useRouter } from "next/navigation";
import { useCountries } from "@/hooks/useCountries";

export default function Home() {
  const { theme } = useTheme();
  const { countries, isLoading, isError, setCountryFilter, setRegionFilter } =
    useCountries();
  const router = useRouter();
  const selectOptions = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const handleOpenCard = (cca3: string) => {
    router.push(`/detail/${cca3}`);
  };

  return (
    <main className={styles.main} data-theme={theme}>
      <section className={styles.search}>
        <div className={styles.searchInput}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={({target}) => setCountryFilter(target.value)}
          />
        </div>
        <Select
          options={selectOptions}
          placeholder="Filter by Region"
          onFilter={setRegionFilter}
        />
      </section>
      <section className={styles.countriesContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          countries.map((country) => (
            <Card
              key={country.cca3}
              country={country}
              onCardClick={() => handleOpenCard(`${country.cca3}`)}
            />
          ))
        )}
        {isError && <p>Something when wrong</p>}
      </section>
    </main>
  );
}
