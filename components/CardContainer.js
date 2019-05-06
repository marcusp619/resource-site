import Card from "./Card";
import cardData from "../utils/data";

const cards = cardData.map((sourceData, i) => (
  <Card source={sourceData} num={i + 1} key={i} />
));

const CardContainer = props => {
  return (
    <section>
      <h1>{props.category}</h1>
      {cards}
      <style jsx>{`
        section {
          margin: 0 auto;
          margin-bottom: 20px;
          display: grid;
          justify-content: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-left: 20px;
        }
      `}</style>
    </section>
  );
};

export default CardContainer;
