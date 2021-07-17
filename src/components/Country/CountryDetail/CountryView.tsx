import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Country } from "../../../types/country";
import Button from "../../Button/Button";
import "./detail-page.scss";

type CountryDetailProps = {
  countryData: Country;
};
const CountryDetail = ({ countryData }: CountryDetailProps) => {
  if (!countryData) {
    return <></>;
  }
  return (
    countryData && (
      <div className="country">
        <div className="country--back-button">
          <Link to={`/`}>
            <Button hasShadow={true} iconName={faArrowLeft}>
              Back
            </Button>
          </Link>
        </div>
        <div className="country__container">
          <img className="country__flag" src={countryData.flag} />
          <div className="flex-col jus-center">
            <p className="country__title">{countryData.name}</p>
            <div className="country__detail">
              <div>
                <p>
                  <label>Native Name:</label> &nbsp;
                  {countryData.nativeName}
                </p>
                <p>
                  <label>Population:</label> &nbsp;
                  {countryData.population}
                </p>
                <p>
                  <label>Region:</label> &nbsp;
                  {countryData.region}
                </p>
                <p>
                  <label>Sub Region:</label> &nbsp;
                  {countryData.subregion}
                </p>
                <p>
                  <label>Capital:</label> &nbsp;
                  {countryData.capital}
                </p>
              </div>
              <div>
                <p>
                  <label>Top Level Domain:</label> &nbsp;
                  {countryData.topLevelDomain}
                </p>
                <p>
                  <label>Currenciesn:</label> &nbsp;
                  {countryData.currencies.map((currency) => {
                    return currency.name;
                  })}
                </p>
                <p>
                  <label>Languages:</label> &nbsp;
                  {countryData.languages.map((language) => {
                    return language.name;
                  })}
                </p>
              </div>
            </div>
            <div className="country__border-countries">
              <label>Border Countries:</label>&nbsp;
              <div>
                {countryData.borders.map((border: string, index: number) => (
                  <Link to={`/detail/code/${border.toLowerCase()}`} key={index}>
                    <Button hasShadow={true}>{border}</Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CountryDetail;
