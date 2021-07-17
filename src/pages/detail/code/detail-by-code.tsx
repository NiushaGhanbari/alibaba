import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetail from "../../../components/Country/CountryDetail/CountryView";
import { API_GET_COUNTRY_BY_CODE } from "../../../constants/endpoints";
import { Country } from "../../../types/country";

const DetailByCodePage = () => {
  const [countryData, setCountryData] = useState<Country | null>(null);
  let params = useParams();
  const code = (params as any)?.code || "";
  useEffect(() => {
    async function fetchCountryDataByCode() {
      let response = await fetch(
        `${API_GET_COUNTRY_BY_CODE}/${code.toLowerCase()}`
      );
      const data = await response.json();
      setCountryData(data);
    }
    fetchCountryDataByCode();
  }, [code]);

  if (!countryData) {
    return <></>;
  }

  if ((countryData as any).status === 404) {
    return <div>Country not found</div>;
  }

  return <CountryDetail countryData={countryData} />;
};

export default DetailByCodePage;
