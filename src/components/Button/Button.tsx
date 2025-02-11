import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...props}) => {
  return (
    <div className={styles.content}>
      <button
        className={`${styles.button} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
