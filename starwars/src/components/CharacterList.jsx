import React from 'react';
import './StarWars.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map(c => (
        <div key={c.name} className="character-list-item">
          <div className="name">
            <span className="label">Name</span> {c.name}
          </div>
          <div className="dob">
            <span className="label">DOB</span> {c.birth_year}
          </div>
          <div className="eyes">
            <span className="label">Eye Color</span> {c.eye_color}
          </div>
          <div className="gender">
            <span className="label">Gender</span> {c.gender}
          </div>
          <div className="hair">
            <span className="label">Hair Color</span> {c.hair_color}
          </div>
          <div className="height">
            <span className="label">Height</span> {c.height}
          </div>
          <div className="mass">
            <span className="label">Mass</span> {c.mass}
          </div>
          <div className="skin">
            <span className="label">Skin Color</span> {c.skin_color}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
