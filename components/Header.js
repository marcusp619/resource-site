import Link from "next/link";

const Header = () => (
  <nav>
    <div className="logo">
      <span>Logo</span>
    </div>
    <Link href="/">
      <a>Home</a>
    </Link>

    <style jsx>{`
      nav {
        display: flex;
        font-family: "Lato", sans-serif;
        // font-family: 'Roboto', sans-serif;
        margin-bottom: 50px;
      }

      a {
        text-decoration: none;
        margin: 0 40px 0 0;
        font-size: 1em;
        color: #00b3e6;
        cursor: pointer;
      }

      a:hover {
        border-bottom: 2px solid #00b3e6;
      }

      a:visisted {
        color: #32cefe;
      }

      .logo {
        margin-right: 70px;
      }
    `}</style>
  </nav>
);

export default Header;
