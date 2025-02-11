import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./CardImage.module.scss";

const CardImage: React.FC<ImageProps> = ({ alt="Card Image", ...props }) => {
  return (
    <Image className={styles.image} alt={alt} width={300} height={100} {...props} />
  );
};

export default CardImage;
