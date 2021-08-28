import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import image from "./assets/loading3.gif";

const HeroList = (props) => {
  const [redirect, setRedirect] = useState(false);
  const { res, setHero, loading } = props;
  console.log("inside herolist component", res);
  const handleclick = (hero) => {
    setHero(hero);
    setRedirect(true);
  };
  if (loading) {
    return <img className="loading" src={image} alt="img" />;
  }
  if (redirect) {
    return <Redirect to="/superhero" />;
  }
  if (!res) {
    return <h2 className="error">Not Found</h2>;
  }

  return (
    <>
      {res.map((hero) => {
        return (
          <button
            className="hero"
            key={hero.id}
            onClick={() => handleclick(hero)}
          >
            <img className="small-img" src={hero.image.url} alt="image" />
            <h2>{hero.name}</h2>
          </button>
        );
      })}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setHero: (hero) => dispatch({ type: "SET_INITIALS", payload: hero }),
});

export default connect(null, mapDispatchToProps)(HeroList);
