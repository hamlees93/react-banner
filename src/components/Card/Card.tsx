import React from "react";
import styles from "./Card.module.scss";
import CardImage from "@/components/Card/CardImage/CardImage";
import CardHeader from "@/components/Card/CardHeader/CardHeader";
import CardBody from "@/components/Card/CardBody/CardBody";
import Button from "@/components/Button/Button";

interface Props {
  bodyText: string
  index: number
  isSelected: boolean
  handleButtonClick: () => void
}

const Card: React.FC<Props> = ({ bodyText, index, isSelected, handleButtonClick }) => {
  return (
    <div className={`${styles.content} ${isSelected ? styles.selected : ""}`}>
      <CardImage src={"/images/card-image.jpg"} alt={"Image of Brisbane"} />

      <div className={styles.text}>
        <CardHeader headerText={`Heading ${index + 1}`} />
        <CardBody bodyText={bodyText} />
        <Button className={styles.button} onClick={handleButtonClick}>{`Button ${index + 1}`}</Button>
      </div>
    </div>
  );
};

export default Card;
