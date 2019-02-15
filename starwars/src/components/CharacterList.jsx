import React from 'react';
import './StarWars.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map(c => (
        <div key={c.name} className="character-list-item">
          <div className="name">Name: {c.name}</div>
          <div className="dob">DOB: {c.birth_year}</div>
          <div className="eyes">Eye Color: {c.eye_color}</div>
          <div className="gender">Gender: {c.gender}</div>
          <div className="hair">Hair Color: {c.hair_color}</div>
          <div className="height">Height: {c.height}</div>
          <div className="mass">Mass: {c.mass}</div>
          <div className="skin">Skin Color: {c.skin_color}</div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
