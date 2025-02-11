import React from "react";
import styles from "./CardHeader.module.scss";

interface Props {
  headerText: string
}

const CardHeader: React.FC<Props> = ({ headerText }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.text}>{headerText}</h2>
    </div>
  );
};

export default CardHeader;
