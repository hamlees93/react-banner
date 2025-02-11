import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./CardImage.module.scss";

const CardImage: React.FC<ImageProps> = ({ alt="Card Image", ...props }) => {
  return (
    <div className={styles.content}>
      <Image className={styles.image} alt={alt} {...props} />
    </div>
  );
};

export default CardImage;
