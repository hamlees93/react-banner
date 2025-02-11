import React from "react";
import styles from "./HeroBody.module.scss";

interface Props {
  bodyText: string
}

const HeroBody: React.FC<Props> = ({ bodyText }) => {
  return (
    <div className={styles.content}>
      <p className={styles.text}>{bodyText}</p>
    </div>
  );
};

export default HeroBody;
