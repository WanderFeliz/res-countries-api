export type OptionType = {
  value: string;
  label: string;
};

export type CountryNameType = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
};

export type BorderCountryType = {
  common: string;
  goTo: () => void;
  cca3: string;
};
