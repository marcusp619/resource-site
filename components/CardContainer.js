import Card from "./Card";

const CardContainer = props => {
  return (
    <section>
      <h1>{props.category}</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

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
