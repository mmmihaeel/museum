"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { IPage } from '../interfaces/page';
import gameStyles from './home.module.scss';
import { TrainHead, TrainCar } from '../components/Train';
import { GameBackground } from '../components/GameBackground';

function Home() {
  const pages: Array<IPage> = [
    { title: "Династя Поппера", link: "popper-dynasty" },
    { title: "Найсаріша Вузькоколійка", link: "oldest-track" },
    { title: "Туристичний маршрут", link: "tourist-track" },
    { title: "Резиденція барона", link: "residence-of-a-baron" },
  ];

  const [isDragging, setDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [trainPosition, setTrainPosition] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragging(true);
    setInitialX(event.clientX - trainPosition);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const newTrainPosition = event.clientX - initialX;
    setTrainPosition(newTrainPosition);
  };

  const trainStyles = {
    transform: `translateX(${trainPosition}px)`,
  };

  return (
    <div className={gameStyles.container}>
      <div
        className={gameStyles.train}
        style={trainStyles}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className={gameStyles.train_head}>
          <TrainHead />
        </div>
        {pages.map((page) => (
          <div key={page.link} className={gameStyles.train_car}>
            <TrainCar />
            <div className={gameStyles.train_car_box}>
              <Link className={gameStyles.train_car_link} href={page.link}>
              {page.title}
            </Link>
            </div>
          </div>
        ))}
      </div>
      <GameBackground className={gameStyles.game_background} />
    </div>
  );
}

export default Home;