import React from "react";
import styles from "./CardBody.module.scss";

interface Props {
  bodyText: string
}

const CardBody: React.FC<Props> = ({ bodyText }) => {
  return (
    <div className={styles.content}>
      <p className={styles.text}>{bodyText}</p>
    </div>
  );
};

export default CardBody;
