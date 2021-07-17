import { Link } from "react-router-dom";
import "./country-item.scss";
type CountryItemProps = {
  image: string;
  title: string;
  population: number;
  region: string;
  capital: string;
};
const CountryItem = ({
  image,
  title,
  population,
  region,
  capital,
}: CountryItemProps) => {
  return (
    <div className="alb-country-item">
      <Link to={`/detail/name/${title}`}>
        <img className="alb-country-item__flag" src={image} />
        <div className="alb-country-item__detail-container">
          <p className="alb-country-item__title">{title}</p>
          <div className="alb-country-item__detail">
            <p>
              <label>Population:</label>&nbsp;
              {population}
            </p>
            <p>
              <label>Region:</label> &nbsp;
              {region}
            </p>
            <p>
              <label>Capital:</label>&nbsp;
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryItem;

export type { CountryItemProps };
