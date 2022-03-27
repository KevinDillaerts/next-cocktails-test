import axios from "axios";
import Image from "next/image";

const CocktailDetail = ({ drink }) => {
  return (
    <main className="detail">
      <h1>{drink.strDrink}</h1>
      <Image src={drink.strDrinkThumb} alt={drink.strDrink} width={405} height={405} />
    </main>
  );
};

export default CocktailDetail;

export async function getStaticPaths() {
  const {
    data: { drinks },
  } = await axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=alcoholic");

  return {
    paths: drinks.map(({ idDrink, strDrink }) => ({ params: { id: idDrink, slug: strDrink } })),
    fallback: "blocking", // false or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const {
    data: { drinks },
  } = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);

  const drink = drinks[0];
  return { props: { drink } };
};
