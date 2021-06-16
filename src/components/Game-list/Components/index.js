import React, { useEffect, useState } from 'react';
import './css/style.css';
import GameCard from './game-card';
import { connect } from 'react-redux';
import { setUserPoint } from '../../../actions/user';

const GameList = ({ fetchGames, games, users }) => {
  console.log('users.');
  useEffect(() => {
    fetchGames();
  }, []);
  //    console.log('games',games)
  const showGameCards = () =>
    games
      ? games.map((item, i) => (
          <GameCard
            key={item._id}
            nume={item.name}
            image={item.image}
            video={item.video}
            unity={item.isUnity}
            puncte={item.puncte}
          />
        ))
      : null;

  return (
    <>
      <div className="grid">{showGameCards()}</div>
    </>
  );
};

export default GameList;
