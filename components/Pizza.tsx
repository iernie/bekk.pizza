import clsx from "clsx";
import Image from "next/image";
import styles from "./Pizza.module.css";

const Pizza: React.FC<{
  slices: number;
  className?: string;
}> = ({ slices = 0, className }) => {
  const numberOfSlices = Math.floor(slices);
  const decimal = slices - numberOfSlices;
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.pizza}>
        {[...Array(Math.max(Math.min(Math.ceil(slices), 6), 0))].map(
          (_, index) => (
            <div
              key={index}
              style={
                decimal > 0 && index === numberOfSlices
                  ? {
                      clipPath: "inset(0 " + (44 - 44 * decimal) + "px 0 0)",
                    }
                  : undefined
              }
              className={styles.slice}
            >
              <Image
                height={50}
                width={44}
                src="/images/pizza.png"
                alt="Pizza"
              />
            </div>
          )
        )}
      </div>
      <div className={styles.number}>{slices.toFixed(1)} / 6</div>
    </div>
  );
};

export default Pizza;
