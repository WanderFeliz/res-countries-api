import { useCountry } from "@/hooks/useCountries";
import { useRouter } from "next/navigation";
import React from "react";

type BorderCountryButtonProps = {
  borderCode: string;
  styles: any;
};

export const BorderCountryButton: React.FC<BorderCountryButtonProps> = ({
  borderCode,
  styles,
}) => {

  const router = useRouter();
  const { data: country } = useCountry(borderCode);


  return (
    <button
      onClick={()=> router.push(`/detail/${borderCode}`)}
      className={styles.borderCountryBtn}
    >
      {country?.name?.common || ""}
    </button>
  );
};
