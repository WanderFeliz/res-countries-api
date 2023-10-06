"use client";
import SearchIcon from '@mui/icons-material/Search';
import Card from "@/components/Card";
import { useTheme } from "@/context/ThemeContext";
import styles from "./page.module.scss";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className={styles.main} data-theme={theme}>
      <section className={styles.search}>
        <div className={styles.searchInput}>
          <SearchIcon />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <select className={styles.filter} name="region" id="region">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
      <section className={styles.countriesContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </main>
  );
}
