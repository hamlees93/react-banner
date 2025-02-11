import Button from "@/components/Button/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h2 className={styles.heroHeader}>
          {"Welcome to G Automotive"}
        </h2>
        <div className={styles.heroBody}>
          {`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.
          `}
        </div>

        <Button>{"Contact Us"}</Button>
      </div>

      {/* Card Section */}
      <div className={styles.cards}></div>
    </main>
  );
}
