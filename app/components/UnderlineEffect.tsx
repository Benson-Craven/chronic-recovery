"use client"

import React from "react"

const ShineUnderlineEffect: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <span className="group relative inline-block overflow-hidden">
            <span className="shine-effect relative z-10">{children}</span>
            <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-slate-100 to-slate-200 bg-[length:0%_2px] bg-right bg-no-repeat transition-all duration-300 ease-in-out group-hover:bg-[length:100%_2px]"></span>
            <style jsx>{`
                .shine-effect {
                    display: inline-block;
                }
                .shine-effect:hover {
                    -webkit-mask-image: linear-gradient(
                        -75deg,
                        rgba(0, 0, 0, 0.6) 30%,
                        #000 50%,
                        rgba(0, 0, 0, 0.6) 70%
                    );
                    mask-image: linear-gradient(
                        -75deg,
                        rgba(0, 0, 0, 0.6) 30%,
                        #000 50%,
                        rgba(0, 0, 0, 0.6) 70%
                    );
                    -webkit-mask-size: 200%;
                    mask-size: 200%;
                    animation: shine 2s infinite;
                }
                @keyframes shine {
                    from {
                        -webkit-mask-position: 150%;
                        mask-position: 150%;
                    }
                    to {
                        -webkit-mask-position: -50%;
                        mask-position: -50%;
                    }
                }
            `}</style>
        </span>
    )
}

export default ShineUnderlineEffect
