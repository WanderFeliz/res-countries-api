"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@/context/ThemeContext";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { useRouter } from "next/navigation";

export default function Home() {
  const { theme } = useTheme();
  const router = useRouter();
  const selectOptions = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const countries = [
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
    {
      name: "Germany",
      population: 123456789,
      region: "Europa",
      capital: "Capital",
      flag: "/images/flag.png",
    },
  ];

  const handleOpenCard = (index: string) => {
    router.push(`/detail/${index}`)
  }

  return (
    <main className={styles.main} data-theme={theme}>
      <section className={styles.search}>
        <div className={styles.searchInput}>
          <SearchIcon className={styles.searchIcon} />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <Select options={selectOptions} placeholder="Filter by Region"/>
      </section>
      <section className={styles.countriesContainer}>
        {
          countries.map((country, index) => (
            <Card key={index} {...country} onCardClick={() => handleOpenCard(`${index}`)}/>
          ))
        }
      </section>
    </main>
  );
}
