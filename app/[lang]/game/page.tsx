"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import trainImage from '../../assets/images/game/train.svg';
import gameStyles from './game.module.scss';

export default function Page() {
  interface DragState {
    isDragging: boolean;
    initialX: number;
    trainPosition: number;
  }

  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    initialX: 0,
    trainPosition: 0,
  });

  const handleMouseDown = (event: React.MouseEvent) => {
    setDragState({
      ...dragState,
      isDragging: true,
      initialX: event.clientX - dragState.trainPosition,
    });
  };

  const handleMouseUp = () => {
    setDragState({ ...dragState, isDragging: false });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!dragState.isDragging) return;

    const newTrainPosition = event.clientX - dragState.initialX;
    setDragState({ ...dragState, trainPosition: newTrainPosition });
  };

  const { trainPosition } = dragState;

  return (
    <div className={gameStyles.container}>
      <div
        className={gameStyles.train}
        style={{ transform: `translateX(${trainPosition}px)` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Image src={trainImage} width={5236} height={732} alt="train" />
      </div>
    </div>
  );
}