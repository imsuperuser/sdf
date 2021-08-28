import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

function SuperHero({
  id,
  name,
  image,
  powerstats,
  biography,
  connections,
  appearance,
  work,
}) {
  console.log("render--------------------------------------");
  const { url } = image;
  const [bio, setBio] = useState({});
  const [con, setCon] = useState({});
  console.log("id: ",id);
  console.log("name: ", name);
  console.log("powerstats: ", powerstats);

  const URL = "https://superhero-wikipedia.herokuapp.com"; 
  const reload=async()=>{
    const Bio = await fetch(URL+`/search/${id}/biography`);
    const Con = await fetch(URL+`/search/${id}/connections`);
    Bio.json().then((res)=>{
      console.log("biograhphy res: ",res);
      setBio(res)
    });
    Con.json().then((res) => {
      console.log("connections res: ", res);
      setCon(res);
    });
  }
  useEffect(()=>{
      console.log("inside use effect")
      reload();
      console.log("called relaod()");
  },[]);


  return (
    <div className="biodata">
      <div className="view">
        <img className="big-img" src={url} alt="image" />
        <h1 className="title">{name}</h1>
        <hr width="80%" color="white" />

        {appearance ? (
          <>
            <h1 className="title">Appearance</h1>
            <div className="block">
              {appearance.gender ? (
                <>
                  <span className="prop">Gender:</span> {appearance.gender}
                  <br />
                </>
              ) : (
                <></>
              )}
              {appearance.eyecolor ? (
                <>
                  <span className="prop">Eye Color:</span> {appearance.eyecolor}
                  <br />
                </>
              ) : (
                <></>
              )}
              {appearance.height ? (
                <>
                  <span className="prop">Height:</span> {appearance.height[0]}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}
              {appearance.weight ? (
                <>
                  <span className="prop">Weight:</span> {appearance.weight[1]}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* New block ------------------------------------------------------------------------------------*/}

        {powerstats ? (
          <>
            <hr width="80%" color="white" />
            <h1 className="title">Powerstats</h1>
            <div className="block">
              {powerstats["combat"] ? (
                <>
                  <span className="prop">Combat:</span> {powerstats.combat}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}

              {powerstats.durabilty ? (
                <>
                  <span className="prop">Durability:</span>{" "}
                  {powerstats.durability} <br />
                </>
              ) : (
                <></>
              )}

              {powerstats.intelligence ? (
                <>
                  <span className="prop">Intelligence:</span>{" "}
                  {powerstats.intelligence} <br />
                </>
              ) : (
                <></>
              )}

              {powerstats.power ? (
                <>
                  <span className="prop">Power:</span> {powerstats.power} <br />
                </>
              ) : (
                <></>
              )}

              {powerstats.speed ? (
                <>
                  <span className="prop">Speed:</span> {powerstats.speed} <br />
                </>
              ) : (
                <></>
              )}

              {powerstats.strength ? (
                <>
                  <span className="prop">Strength:</span> {powerstats.strength}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* New block ------------------------------------------------------------------------------------*/}
        {bio ? (
          <>
            <hr width="80%" color="white" />
            <h1 className="title">Biography</h1>
            <div className="block">
              {bio["full-name"] ? (
                <>
                  <span className="prop">Full Name:</span> {bio["full-name"]}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}
              {bio.first - appearance ? (
                <>
                  <span className="prop">First Appearance:</span>{" "}
                  {bio.first - appearance} <br />
                </>
              ) : (
                <></>
              )}
              {bio["alter-egos"] ? (
                <>
                  <span className="prop">Alter Egos:</span> {bio["alter-egos"]}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}
              {bio["place-of-birth"] ? (
                <>
                  <span className="prop">Place Of Birth:</span>{" "}
                  {bio["place-of-birth"]} <br />
                </>
              ) : (
                <></>
              )}
              {bio.alignment ? (
                <>
                  <span className="prop">Strength: </span>
                  {bio.alignment} <br />
                </>
              ) : (
                <></>
              )}
              {bio.publisher ? (
                <>
                  <span className="prop">Publisher: </span>
                  {bio.publisher} <br />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* New block ------------------------------------------------------------------------------------*/}
        {con ? (
          <>
            <hr width="80%" color="white" />
            <h1 className="title">Connections</h1>
            <div className="block">
              {con["group-affiliation"] ? (
                <>
                  <span className="prop">Group Affiliation: </span>
                  {con["group-affiliation"]} <br />
                </>
              ) : (
                <></>
              )}
              {con.relatives ? (
                <>
                  <span className="prop">Relatives: </span>
                  {con.relatives} <br />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* New block ------------------------------------------------------------------------------------*/}

        {work ? (
          <>
            <hr width="80%" color="white" />
            <h1 className="title">Work</h1>
            <div className="block">
              {work.occupation ? (
                <>
                  <span className="prop">Occupation:</span> {work.occupation}{" "}
                  <br />
                </>
              ) : (
                <></>
              )}

              {work.base ? (
                <>
                  <span className="prop">Base:</span>{" "}
                  {work.base} <br />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="back-btn">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

SuperHero.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  powerstats: PropTypes.object.isRequired,
  biograhpy: PropTypes.object.isRequired,
  connections: PropTypes.object.isRequired,
  appearance: PropTypes.object.isRequired,
  work: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.id,
  name: state.name,
  image: state.image,
  powerstats: state.powerstats,
  biograhpy: state.biograhpy,
  connections: state.connection,
  appearance: state.appearance,
  work: state.work,
});
export default connect(mapStateToProps)(SuperHero);
