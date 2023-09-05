/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import { DictionaryData } from '@/lib/dictionary';
import "../../../lib/turn";

type props = {
    localizations: DictionaryData;
    children: React.ReactNode
};

const options = {
    width: 980,
    height: 630,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    //@ts-ignore
    gradients: !$.isTouch,
    when: {
        turned: function (e: any, page: any) {
            //@ts-ignore
            console.log("Current view: ", $(this).turn("view"));
        },
    },
};

const Book: React.FC<props> = (props) => {
    const { localizations, children } = props;
    const elRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        $(document).ready(function () {
            if (elRef.current) {
                //@ts-ignore
                $(elRef.current).turn({ ...options });
                document.addEventListener("keydown", handleKeyDown, false);
                return () => {
                    //@ts-ignore
                    $(elRef.current!).turn("destroy").remove();
                    document.removeEventListener("keydown", handleKeyDown, false);
                };
            }
        });
    }, []);


    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 37) {
            //@ts-ignore
            $(elRef.current!).turn("previous");
        }
        if (event.keyCode === 39) {
            //@ts-ignore
            $(elRef.current!).turn("next");
        }
    };

    useEffect(() => {
        console.log($);
    }, []);

    return (
        <div ref={elRef} className="magazine">
            {children}
        </div>
    );
};

export default Book;