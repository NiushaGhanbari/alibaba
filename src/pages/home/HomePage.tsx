import { useEffect, useState } from "react";
import CountryList from "../../components/Country/CountryList/CountryList";
import FilterControl from "../../components/FilterControl/FilterControl";
import SearchBox from "../../components/SearchBox/SearchBox";
import { API_ALL_COUNTRIES } from "../../constants/endpoints";
import { REGIONS } from "../../constants/regions";
import { Country } from "../../types/country";
import "./home-page.scss";

const isFirstRegionItemSelect = (region: string) => region === REGIONS[0];

type Refinement = {
  searchPhrase: string;
  region: string;
};

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setfFilteredCountries] = useState<Country[]>([]);
  const [refinement, setRefinement] = useState<Refinement>({
    region: REGIONS[0],
    searchPhrase: "",
  });

  useEffect(() => {
    async function fetchCountries() {
      if (!filteredCountries || filteredCountries.length === 0) {
        let response = await fetch(API_ALL_COUNTRIES);
        const data = await response.json();
        setCountries(data);
        setfFilteredCountries(data);
      } else {
        setfFilteredCountries(countries);
      }
    }
    fetchCountries();
  }, []);

  const applySearch = (phrase: string): Country[] => {
    return countries.filter((country) =>
      country.name.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())
    );
  };

  const applyRegion = (region: string): Country[] => {
    return countries.filter((country) => country.region === region);
  };

  const applyRegionFilterHandler = (region: string) => {
    let dataSource = countries;
    if (refinement.searchPhrase !== "") {
      dataSource = applySearch(refinement.searchPhrase);
    }
    if (isFirstRegionItemSelect(region)) {
      setfFilteredCountries(dataSource);
    } else {
      const data = dataSource.filter((country) => country.region === region);
      setfFilteredCountries(data);
    }
    setRefinement({ ...refinement, region });
  };

  const doSearchHandler = (phrase: string) => {
    let dataSource = countries;
    if (!isFirstRegionItemSelect(refinement.region)) {
      dataSource = applyRegion(refinement.region);
    }
    if (phrase === "") {
      setfFilteredCountries(dataSource);
    } else {
      const data = dataSource.filter((country) =>
        country.name.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())
      );
      setfFilteredCountries(data);
    }
    setRefinement({ ...refinement, searchPhrase: phrase });
  };

  return (
    <>
      <div className="alb-action-bar">
        <div className="alb-action-bar__search">
          <SearchBox doSearch={doSearchHandler} />
        </div>
        <div className="alb-action-bar__filter">
          <FilterControl onSelectRegion={applyRegionFilterHandler} />
        </div>
      </div>
      <CountryList countries={filteredCountries} />
    </>
  );
};

export default HomePage;
