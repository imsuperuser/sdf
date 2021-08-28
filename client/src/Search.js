import axios from "axios";
import React, { useState} from "react";
import HeroList from "./HeroList";

function Search() {
  const url = "http://localhost:5000";
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    searchByName().catch(e=>console.log("hey there ",e));
  };
  const searchByName = async () => {
      console.log("inside search func");
      // await fetch(`/search/${name}`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // })
      //   .then((res) => {res.json();
      //                   if(!res.ok)
      //                     console.log("not okay");})
      //   .then((data) => {
      //     let { results } = data;
      //     console.log("data", results);
      //     setResult(results);
      //     setLoading(false);
      //   });
      // const url=url+`/search/${name}`;
      // console.log()
      const res = await fetch(
        `https://superhero-wikipedia.herokuapp.com/search/${name}`
      );
      res.json().then((res)=>{console.log("my res: ",res['results'])
                              const results= res['results'];
                              console.log("results array: ",results);
                              setResult(results);
                              setLoading(false);
                              console.log("now results: ",result)
                              console.log("superhero id: ",result['id'])});
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-area">
            <h1>Search your favourite Super Hero</h1>
            <input
              type="text"
              placeholder="Ironman"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="hero-list">
        <HeroList key={Date.now()} res={result} loading={loading} />
      </div>
    </>
  );
}

export default Search;

/* In the input box the name of the super hero is entered and on submission of the form, searchByName() is called with fetches
the results and stores it in result using useState. In Superhero component a prop is passed with key as res and value as
result variable which contains the array of superhero.

My api:- https://superheroapi.com/api/1579438955593639
*/
