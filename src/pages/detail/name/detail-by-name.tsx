import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetail from "../../../components/Country/CountryDetail/CountryView";
import { API_GET_COUNTRY_BY_NAME } from "../../../constants/endpoints";
import { Country } from "../../../types/country";

const DetailByNamePage = () => {
  const [countryData, setCountryData] = useState<Country[] | null>(null);
  let params = useParams();
  const name = (params as any)?.name || "";
  useEffect(() => {
    async function fetchCountryDataByName() {
      let response = await fetch(`${API_GET_COUNTRY_BY_NAME}/${name}`);
      const data = await response.json();
      setCountryData(data);
    }
    fetchCountryDataByName();
  }, []);

  if (!countryData) {
    return <></>;
  }

  if ((countryData as any).status === 404) {
    return <div>Country not found</div>;
  }

  return <CountryDetail countryData={countryData[0]} />;
};

export default DetailByNamePage;
