export interface ICountry {
    name: string;
    capital: string;
    region: string;
    population: number;
    flag: string;
    nativeName?: string;
    subRegion?: string;
    topLevelDomain?: string;
    currencies?: string;
    languages?: string;
    borderCountries?: string[];
}