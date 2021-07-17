import CountryItem from "../CountryItem/CountryItem";
import "./country-list.scss";
import { Country } from "../../../types/country";

type CountryListProps = {
  countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => (
  <div className="alb-country-list">
    {countries.map((country: Country, index: number) => (
      <CountryItem
        key={index}
        image={country.flag}
        title={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ))}
  </div>
);

export default CountryList;
