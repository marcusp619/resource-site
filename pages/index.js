import withLayout from "../components/Layout";
import Head from "next/Head";
import CardContainer from "../components/CardContainer";

const Page = () => (
  <div>
    <Head>
      <title>Flatiron Resources</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Roboto"
        rel="stylesheet"
      />
    </Head>
    <CardContainer category={"Javascript"} />
    <CardContainer category={"CSS"} />
    <CardContainer category={"A11Y"} />
    <CardContainer category={"HTML"} />
    <CardContainer category={"General"} />
  </div>
);

export default withLayout(Page);
