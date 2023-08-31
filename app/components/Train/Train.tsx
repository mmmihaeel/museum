"use client";

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gameStyles from './Train.module.scss';
import { TrainHead, TrainCar, Wheel } from './Carrieges';
import { GameBackground } from '../GameBackground/Background';
import { IPage } from '../../interfaces/page.interface';
import handImage from '../../assets/images/game/hand.svg';
import { DictionaryData } from '@/lib/dictionary';

type props = {
    localizations: DictionaryData
};

const Train: React.FC<props> = ({ localizations }: props) => {
    const pages: Array<IPage> = [
        { title: "Династя Поппера", link: "popper-dynasty" },
        { title: "Найсаріша Вузькоколійка", link: "oldest-track" },
        { title: "Туристичний маршрут", link: "tourist-track" },
        { title: "Резиденція барона", link: "residence-of-a-baron" },
    ];

    const train = useRef<HTMLDivElement>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const wheelRefs = [
        useRef<HTMLDivElement>(null), 
        useRef<HTMLDivElement>(null), 
        useRef<HTMLDivElement>(null), 
        useRef<HTMLDivElement>(null)
    ];
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
        wheelRefs.forEach(wheelRef => {
            if (wheelRef.current) {
                wheelRef.current.style.transform = `rotate(${rotation}deg)`;
            }
        });
        setDragState(prevState => ({ ...prevState, trainPosition: newTrainPosition }));
    }, [dragState.initialX, dragState.isDragging, wheelRefs]);

    const handleDragEnd = useCallback(() => setDragState(prevState => ({ ...prevState, isDragging: false })), []);

    const handleClick = useCallback(() => {
        setDragState(prevState => ({ ...prevState, trainPosition: prevState.trainPosition - 1068 }));
    }, []);

    return (
        <div className={gameStyles.container}>
            <div
                ref={train}
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
                <div className={gameStyles.wheel_line}></div>
                <div className={gameStyles.wheel_line_2}></div>
                {wheelRefs.map((ref, index) => (
                    <div key={index} className={`${gameStyles.wheel} ${gameStyles[`wheel_${index + 1}`]}`} ref={ref}>
                        <Wheel />
                    </div>
                ))}
                {pages.map((page, index) => (   
                    <div key={index} className={gameStyles.train_car}>
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
                <Image src={handImage} alt={"hand clicker"}></Image>
            </div>
        </div>
    );
};

export default Train;