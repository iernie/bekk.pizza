import Link from "next/link";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <>
      <header>
        <div>
          <h1>#pizza</h1>
        </div>
      </header>
      <main>
        <div className={styles.places}>
          <Link className={styles.place} href="/zz-pizza">
            <div className={styles.left}>
              <p>ZZ Pizza</p>
              <small>16.03.2023</small>
            </div>
            <div className={styles.right}>4.8/6</div>
          </Link>
          <Link className={styles.place} href="/teatro">
            <div className={styles.left}>
              <p>Teatro</p>
              <small>28.04.2023</small>
            </div>
            <div className={styles.right}>?/6</div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Index;
