import React from "react";
import styles from "./CardBody.module.scss";

interface Props {
  bodyText: string
}

const CardBody: React.FC<Props> = ({ bodyText }) => {
  return (
    <div className={styles.content}>
      {bodyText.split("\n").map((paragraph, index) => (
        <p key={`paragraph-${index}`} className={styles.text}>{paragraph}</p>
      ))}
    </div>
  );
};

export default CardBody;
