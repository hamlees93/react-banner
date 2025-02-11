import React from "react";
import Image, { ImageProps } from "next/image";
import styles from "./HeroImage.module.scss";

const HeroImage: React.FC<ImageProps> = ({ alt="Hero Image", ...props }) => {
  return (
    <div className={styles.content}>
      <Image className={styles.image} alt={alt} {...props} />
    </div>
  );
};

export default HeroImage;
