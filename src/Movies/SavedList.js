import React from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      {/* <div className="home-button"> prev. */}
      {/* <div onClick={() => navigate('/')} className="home-button"> prev. */}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
