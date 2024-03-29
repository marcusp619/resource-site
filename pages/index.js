import withLayout from "../components/Layout";
import Head from "next/Head";
import CardContainer from "../components/CardContainer";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Roboto"
          rel="stylesheet"
        />
        <style>{`
          body { box-sizing: border-box; margin: 0; padding: 0 }
        `}</style>
      </Head>
      <CardContainer category={"Javascript"} />
    </div>
  );
};

export default withLayout(Page);
