import Link from "next/link";

const Header = () => (
  <nav>
    <div className="logo">
      <span>SOURCE</span>
    </div>

    <style jsx>{`
      nav {
        display: flex;
        font-family: "Lato", sans-serif;
        // font-family: 'Roboto', sans-serif;
        margin-bottom: 50px;
        background: url(static/owen-cl-571744-unsplash.jpg) no-repeat center
          center fixed;
        background-size: cover;
        height: 500px;
      }

      span {
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        font-size: 20px;
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
        padding: 1rem;
        color: white;
      }
    `}</style>
  </nav>
);

export default Header;
