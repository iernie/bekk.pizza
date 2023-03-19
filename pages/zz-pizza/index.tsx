import Link from "next/link";
import Image from "next/image";
import Score from "../../components/Score";
import styles from "./Index.module.css";

const Index = () => {
  return (
    <>
      <header>
        <div>
          <Link href="/">Tilbake</Link>
          <h1>ZZ Pizza</h1>
          <p>16.03.2023</p>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <h2>Utseende</h2>
          <Score
            scores={{
              4: 1,
              5: 4,
              6: 1,
            }}
            category="Helhetlig"
            comments={["Så litt dvasse ut pga. for mye ost"]}
          />
          <Score
            scores={{
              5: 4,
              6: 2,
            }}
            category="Bunn"
            comments={["Litt svart i leopardingen, ellers mye av det."]}
          />
        </div>
        <div className={styles.container}>
          <h2>Tekstur</h2>
          <Score
            scores={{
              4: 3,
              5: 1,
              6: 2,
            }}
            category="Bunn"
            comments={[
              "Vanskelig å tolke pga. mye ost. Skorpen var god, men kunne vært enda mer chewy. Litt svitt på toppene og bunnen.",
            ]}
          />
          <Score
            scores={{
              4: 4,
              5: 2,
            }}
            category="Sprøhet (crispy/soggy)"
            comments={[
              "Variantene med mye ost trekker ned da de ble for soggy",
            ]}
          />
        </div>
        <div className={styles.container}>
          <h2>Smak</h2>
          <Score
            scores={{
              4: 2,
              5: 3,
              6: 1,
            }}
            category="Bunn"
            comments={["God skorpe."]}
          />
          <Score
            scores={{
              3: 1,
              4: 3,
              5: 2,
            }}
            category="Saus (rød)"
          />
          <Score
            scores={{
              4: 2,
              5: 2,
              6: 1,
            }}
            category="Saus (hvit)"
            comments={[
              "Hvit saus var ikke for kvalm/overdøvende noe som er bra for min del for hvit pizza.",
            ]}
          />
          <Score
            scores={{
              2: 1,
              4: 1,
              5: 2,
              6: 2,
            }}
            category="Ost"
            comments={[
              "God ost, men kan være litt mye på margartiaen og chilli cheese",
              "Alle pizzaene hadde for mye ost. God strekk i osten, bra, men for mye ost.",
            ]}
          />
          <Score
            scores={{
              2: 1,
              4: 1,
              5: 3,
              6: 1,
            }}
            category="Topping"
            comments={[
              "Toppingene var enten litt kjedelige, lite smak, eller for mye av.",
            ]}
          />
          <Score
            scores={{
              4: 3,
              5: 1,
              6: 2,
            }}
            category="Helhetlig"
            comments={[
              "Bacon og blåmugg var jevnt over god, og derfor trekker det opp helheten for alle pizzaene. Margarita var kjip, og det skal være den enkleste å gjøre god. Kjente ikke sausen på mararita/ tenkte ikke over den - og det er trekk fra min side.",
            ]}
          />
        </div>
        <div className={styles.container}>
          <h2>Opplevelse</h2>
          <Score
            scores={{
              3: 2,
              5: 4,
            }}
            category="Stemning"
            comments={[
              "Ikke så komfortable benker",
              "Vondt å sitte på benker uten ryggstøtte. Elendig akkustikk. Remote beliggenhet. Trivelig stemning med folka <3 hyggelige arbeidere her",
            ]}
          />
          <Score
            scores={{
              5: 2,
              6: 4,
            }}
            category="Tid"
            comments={["Rask å lage pizza!!! Treg å ta bestilling."]}
          />
          <Score
            scores={{
              5: 2,
              6: 4,
            }}
            category="Rennslighet"
          />
        </div>
        <div className={styles.container}>
          <h2>Favoritter</h2>
          <ul>
            <li>Bacon og blåmuggost</li>
            <li>Mortadella og valnøtter</li>
          </ul>
        </div>
        <div className={styles.container}>
          <h2>Dommerne</h2>
          <ul className={styles.judges}>
            <li>
              <Image
                width={70}
                height={70}
                src="/images/einar.png"
                alt="Einar"
              />
            </li>
            <li>
              <Image
                width={70}
                height={70}
                src="/images/markus.png"
                alt="Markus"
              />
            </li>
            <li>
              <Image
                width={70}
                height={70}
                src="/images/kamilla.png"
                alt="Kamilla"
              />
            </li>
            <li>
              <Image
                width={70}
                height={70}
                src="/images/tobias.png"
                alt="Tobias"
              />
            </li>
            <li>
              <Image width={70} height={70} src="/images/ole.png" alt="Ole" />
            </li>
            <li>
              <Image width={70} height={70} src="/images/thea.png" alt="Thea" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Index;
