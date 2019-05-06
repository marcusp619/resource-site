import withLayout from "../components/Layout";
import Link from "next/link";
import Head from "next/Head";
import CardContainer from "../components/CardContainer";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Flatiron Resources</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Roboto"
          rel="stylesheet"
        />
      </Head>
      <CardContainer category={"Javascript"} />
    </div>
  );
};

export default withLayout(Page);
