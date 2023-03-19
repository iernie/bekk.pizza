import clsx from "clsx";
import Pizza from "./Pizza";
import styles from "./Score.module.css";

const Score: React.FC<{
  scores: {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
    6?: number;
  };
  category: string;
  comments?: Array<string>;
  className?: string;
}> = ({ scores = {}, category, className, comments = [] }) => {
  const points = Object.keys(scores).reduce(
    (sum, key) => sum + +key * scores[key],
    0.0
  );
  const sum = Object.values(scores).reduce((sum, score) => sum + score, 0.0);
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.left}>
        <Pizza slices={points / sum} />
      </div>
      <div className={styles.right}>
        <h2
          className={clsx(styles.category, {
            [styles.withComment]: comments.length > 0,
          })}
        >
          {category}
        </h2>
        {comments.map((comment, Index) => {
          return (
            <blockquote key={Index} className={styles.comment}>
              {comment}
            </blockquote>
          );
        })}
      </div>
    </div>
  );
};

export default Score;
