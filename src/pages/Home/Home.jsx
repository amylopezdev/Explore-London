import art from "../../images/historymuseum.jpeg";
import landmark from "../../images/londonbridge.jpeg";
import food from "../../images/market.jpeg";
import { Hero } from "../../components/Hero/Hero";
import "./Home.css";

export const Home = () => {
  const categories = [
    {
      category: "art-and-museums",
      image: art,
      title: "art & museums",
    },
    {
      category: "landmarks",
      image: landmark,
      title: "landmarks",
    },
    {
      category: "food-and-drink",
      image: food,
      title: "bars & restaurants",
    },
  ];

  return (
    <section className="home">
      {categories.map((category) => (
        <Hero key={category.title} {...category} />
      ))}
    </section>
  );
};