const Card = () => {
  return (
    <article>
      <div className="content__count">
        <span>1</span>
      </div>
      <div className="content__data">
        <h3>
          The future of Unreal Tournament begins today{" "}
          <span>(unrealengine.com)</span>
        </h3>
        <p>20 hours ago | By Mark</p>
      </div>

      <style jsx>{`
        article {
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          grid-template-areas:
            "count title title"
            "posted . .";
          align-items: center;
        }

        h3 {
          grid-area: title;
          color: #00b3e6;
        }

        .content__count {
          display: grid;
          background: #2b2b2b;
          grid-area: count;
          width: 30px;
          height: 30px;
          margin-left: 20px;
          border-radius: 4px;
          justify-content: center;
          align-content: center;
          font-weight: bold;
          color: white;
        }

        .content__count span {
          color: #efefef;
        }

        h3 span {
          color: #2b2b2b;
        }

        p {
          grid-area: posted;
          margin-top: -16px;
          font-weight: 600;
        }
      `}</style>
    </article>
  );
};

export default Card;
