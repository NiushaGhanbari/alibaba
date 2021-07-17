import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  children: ReactNode;
  hasShadow?: boolean;
  iconName?: IconDefinition;
  modifierStyle?: string;
  [propName: string]: any; // other valid image properties
};

const Button = ({
  hasShadow,
  iconName,
  children,
  modifierStyle,
  ...otherImgProps
}: ButtonProps) => {
  return (
    <>
      <button
        className={`alb-button ${hasShadow ? "alb-button--with-shadow " : ""} ${
          modifierStyle ? modifierStyle : ""
        }`}
        {...otherImgProps}
      >
        {iconName && <FontAwesomeIcon icon={iconName} />} &nbsp;
        {children}
      </button>
    </>
  );
};

export default Button;
