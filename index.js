import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import "../css/styles.css";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sam Lee</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Knewave&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/*<meta name="description" content="Sam Lee's Personal Site" />*/}
      </Helmet>
      
    <div className="container">
      <h1>Sam Lee</h1>
      <h2>CS Student @ EPFL</h2>

      <div className="buttons">
        <a href="https://github.com/jamsamjam" className="button">
          <img src="images/logos/github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/samleee/" className="button">
          <img src="images/logos/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:andsunlit@gmail.com" className="button">
          <span className="material-icons">email</span>
        </a>
        <Link to="/blog" className="button">
          <span className="material-icons">crossword</span>
        </Link>
        <a href="coco.html" className="button">
          <span className="material-icons">pets</span>
        </a>
      </div>
    </div>
    </>
  );
};

export default IndexPage;
