"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gameStyles from './home.module.scss';
import { TrainHead, TrainCar } from '../components/Train';
import { GameBackground } from '../components/GameBackground';
import { Locale } from '@/i18n.config';
import { IPage } from '../interfaces/page.interface';
import handImage from '../assets/images/game/hand.svg';

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const pages: Array<IPage> = [
    { title: "Династя Поппера", link: "popper-dynasty" },
    { title: "Найсаріша Вузькоколійка", link: "oldest-track" },
    { title: "Туристичний маршрут", link: "tourist-track" },
    { title: "Резиденція барона", link: "residence-of-a-baron" },
  ];

  const [dragState, setDragState] = useState({
    isDragging: false,
    initialX: 0,
    trainPosition: 0,
  });

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    setDragState({
      ...dragState,
      isDragging: true,
      initialX: clientX - dragState.trainPosition,
    });
  };

  const handleDragMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!dragState.isDragging) return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const newTrainPosition = clientX - dragState.initialX;
    setDragState({ ...dragState, trainPosition: newTrainPosition });
  };

  const handleDragEnd = () => setDragState({ ...dragState, isDragging: false });

  const handleClick = () => setDragState({ ...dragState, trainPosition: dragState.trainPosition - 1068 });

  return (
    <div className={gameStyles.container}>
      <div
        className={gameStyles.train}
        style={{ transform: `translateX(${dragState.trainPosition}px)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
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
      <div className={gameStyles.hand} onClick={handleClick}>
        <Image src={handImage} alt={"hand"}></Image>
      </div>
    </div>
  );
}