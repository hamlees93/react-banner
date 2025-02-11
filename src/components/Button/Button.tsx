import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...props}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
