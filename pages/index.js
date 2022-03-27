import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const staticHome = ({ drinks }) => {
  return (
    <main className="home">
      <h1>Alcoholic cocktails</h1>
      {
        <ul className="cocktailgrid">
          {drinks.length &&
            drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
              <Link key={idDrink} href={`${idDrink}/${strDrink}`}>
                <a className="drinkcard">
                  <Image src={strDrinkThumb} alt={strDrink} width={350} height={350} />
                  <h3 className="drinkname">{strDrink}</h3>
                </a>
              </Link>
            ))}
        </ul>
      }
    </main>
  );
};

export async function getStaticProps() {
  const {
    data: { drinks },
  } = await axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");

  return { props: { drinks } };
}

export default staticHome;
