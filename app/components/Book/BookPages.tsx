"use client";
import React from "react";
import Image from "next/image";

import LeftPageImg from "../../assets/images/book/left-page.png";
import RightPageImg from "../../assets/images/book/right-page.png";

export const LeftPage: React.FC<{className: string}> = ({className}) => {
    return (
        <Image className={className} src={LeftPageImg} alt={"Left book page"} />
    );
};

export const RightPage: React.FC<{className: string}> = ({className}) => {
    return (
        <Image className={className} src={RightPageImg} alt={"Right book page"} style={{transform: "translateY(-2px)"}} />
    );
};