import { CountryNameType } from "./types";

export interface ICountry {
    cca3: string;
    name: CountryNameType;
    capital: string[];
    region: string;
    population: number;
    flags:{
        png: string;
        svg: string;
        alt: string;
    };
    nativeName?: {};
    subregion?: string;
    tld?: string[];
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages?: {key: {key: string, value: string}};
    borders?: string[];
}