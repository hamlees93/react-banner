import React from "react";
import styles from "./HeroHeader.module.scss";

interface Props {
  headerText: string
}

const HeroHeader: React.FC<Props> = ({ headerText }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.text}>{headerText}</h2>
    </div>
  );
};

export default HeroHeader;
