import Card from "./Card";
import { useState, useEffect } from "react";
import cardData from "../utils/data";

const cards = cardData.reduce(
  (acc, resource, i) => {
    acc[resource.category].push(
      <Card source={resource} num={acc[resource.category].length + 1} key={i} />
    );
    return acc;
  },
  { Javascript: [], CSS: [], Podcast: [], General: [] }
);

const CardContainer = () => {
  return (
    <section>
      <article>
        <h1>Javascript</h1>
        {cards.Javascript}
      </article>
      <article>
        <h1>CSS</h1>
        {cards.CSS}
      </article>
      <article>
        <h1>Podcast</h1>
        {cards.Podcast}
      </article>
      <article>
        <h1>General</h1>
        {cards.General}
      </article>

      <style jsx>{`
        section {
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          justify-items: center;
          margin-left: 15px;
        }

        h1 {
          font-size: 2.5rem;
          margin-left: 20px;
          font-family: "Lato", sans-serif;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default CardContainer;
