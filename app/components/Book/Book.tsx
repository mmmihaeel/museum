/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import { DictionaryData } from '@/lib/dictionary';
import "../../../lib/turn";

type props = {
    localizations: DictionaryData;
    children: React.ReactNode;
};

const Book: React.FC<props> = (props) => {
    const { children } = props;
    const elRef = useRef<HTMLDivElement | null>(null);

    const options = {
        width: (window.innerHeight * 0.8677) * 1.556,
        height: window.innerHeight * 0.8677,
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

    useEffect(() => {
        $(document).ready(function () {
            if (elRef.current) {
                //@ts-ignore
                $(elRef.current).turn({ ...options });
                
                //@ts-ignore
                $(elRef.current!).turn("next");

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
        if (event.key === 'ArrowLeft') {
            //@ts-ignore
            $(elRef.current!).turn("previous");
        }
        if (event.key === 'ArrowRight') {
            //@ts-ignore
            $(elRef.current!).turn("next");
        }
    };

    return (
        <div ref={elRef} className="magazine">
            {children}
        </div>
    );
};

export default Book;