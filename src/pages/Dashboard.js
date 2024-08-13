import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(characters.data.results);
    };
    fetchCharacters();
  }, []);

  console.log("characters", characters);

  return (
    <div>
      <h1>
        <Link to={"/"}>Home</Link>
      </h1>
      <div className="characters__container">
        {characters?.length &&
          characters.map((character) => (
            <div key={character.id} className="character__item">
              <h2>Name: {character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <img src={character.image} alt={character.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
