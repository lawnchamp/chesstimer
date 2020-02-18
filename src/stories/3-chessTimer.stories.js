import React from 'react';
import { ChessTimer } from '../chessTimer';
import '../styles/tailwind.css';

export default {
  title: 'Chess Timer',
  component: 'ChessTimer',
};

export const Active = () => {
  return (
    <div className="bg-gray-100">
      <ChessTimer />
    </div>
  );
};
