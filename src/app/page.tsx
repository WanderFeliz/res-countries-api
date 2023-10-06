"use client";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "@/components/Card";
import { useTheme } from "@/context/ThemeContext";
import styles from "./page.module.scss";
import React from "react";
import Select from "@/components/Select";

export default function Home() {
  const { theme } = useTheme();
  HTMLDivElement;
  const selectOptions = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
