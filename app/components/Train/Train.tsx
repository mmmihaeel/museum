"use client";

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gameStyles from './Train.module.scss';
import { TrainHead, TrainCar, Wheel } from './TrainComponents';
import Hand from '../Hand/Hand';
import { IPage } from '../../interfaces/page.interface';
import { DictionaryData } from '@/lib/dictionary';
import HomeBg from '../../assets/images/game/home-background.svg';

type props = {
  localizations: DictionaryData;
};

const Train: React.FC<props> = ({ localizations }: props) => {
  const pages: Array<IPage> = [
    { title: "Династя Поппера", link: "popper_dynasty" },
    { title: "Найсаріша Вузькоколійка", link: "oldest_track" },
    { title: "Туристичний маршрут", link: "tourist_track" },
    { title: "Резиденція барона", link: "residence_of_a_baron" },
  ];
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const wheelRefs = Array.from({ length: pages.length }, () => useRef<HTMLDivElement>(null));
  const train = useRef<HTMLDivElement>(null);
  const carriage = useRef<HTMLDivElement>(null);

  const [dragState, setDragState] = useState({
    isDragging: false,
    initialX: 0,
    trainPosition: 0,
  });

  const handleDragStart = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    setDragState(prevState => ({
      ...prevState,
      isDragging: true,
      initialX: clientX - prevState.trainPosition,
    }));
  }, []);

  const handleDragMove = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!dragState.isDragging) return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const newTrainPosition = clientX - dragState.initialX;
    const rotation: number = (newTrainPosition / 360) * 408;

    requestAnimationFrame(() => {
      wheelRefs.forEach(wheelRef => {
        if (wheelRef.current) wheelRef.current.style.transform = `rotate(${rotation}deg)`;
      });
      setDragState(prevState => ({ ...prevState, trainPosition: newTrainPosition }));
    });
  }, [dragState.initialX, dragState.isDragging, wheelRefs]);

  const handleDragEnd = useCallback(() => setDragState(prevState => ({ ...prevState, isDragging: false })), []);
  const handleClick = useCallback(() => {
    setDragState(prevState => ({ ...prevState, trainPosition: prevState.trainPosition - (carriage.current ? carriage.current.offsetWidth : 1068) }))
    train.current && (train.current.style.transition = 'all .4s', setTimeout(() => train.current && (train.current.style.transition = 'none'), 400));
  }, []);

  return (
    <div className={gameStyles.container}>
      <div
        ref={train}
        className={`${gameStyles.train} ${gameStyles.no_user_drag}`}
        style={{
            transform: `translateX(${dragState.trainPosition}px)`,
        }}
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
        <div className={gameStyles.wheel_line}></div>
        <div className={gameStyles.wheel_line_2}></div>

        {wheelRefs.map((ref, index) => (
          <div key={index} className={`${gameStyles.wheel} ${gameStyles[`wheel_${index + 1}`]}`} ref={ref}>
            <Wheel />
          </div>
        ))}
        {pages.map((page, index) => (
          <div key={index} className={gameStyles.train_car} ref={carriage}>
            <TrainCar />
            <div className={gameStyles.train_car_box}>
              <Link className={gameStyles.train_car_link} href={page.link}>
                {page.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Hand className={gameStyles.hand} onClick={handleClick} />
      <Image className={gameStyles.home_bg} src={HomeBg} alt={'home page background'} />
    </div>
  );
};

export default Train;