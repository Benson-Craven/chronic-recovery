import React, { useEffect, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"

const Dancehaus: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div
            ref={ref}
            className="min-h-screen bg-[#faf4e7] font-['Bebas_Neue',_sans-serif] text-3xl text-black"
        >
            <header className="fixed left-0 top-0 z-10 flex h-20 w-full items-center justify-center">
                <h1 className="text-6xl">Dancehaus</h1>
            </header>

            <main className="relative z-0 grid auto-rows-[320px] grid-cols-3 gap-4 px-8 pt-20">
                {[1, 2, 3, 4, 5].map((num) => (
                    <motion.div
                        key={num}
                        className={`pos${num} flex items-center justify-center bg-[#cd3c2f] p-4 text-center text-white`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: num * 0.1 }}
                    >
                        <p>Dance Move {num}</p>
                    </motion.div>
                ))}
            </main>

            <footer className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-between p-4">
                <nav className="flex gap-4">
                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        About
                    </a>

                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        Join
                    </a>

                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        Contact
                    </a>
                </nav>
                <nav className="flex gap-4">
                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        Instagram
                    </a>

                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        Twitter
                    </a>

                    <a className="decoration-[#cd3c2f] underline-offset-4 hover:underline">
                        TikTok
                    </a>
                </nav>
            </footer>

            <motion.svg
                className="fixed left-0 top-0 z-[1] h-[200vw] w-screen"
                viewBox="0 0 1000 2000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
                    stroke="#CD3C2F"
                    strokeWidth="30"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{
                        pathLength: pathLength,
                        strokeDasharray: 1,
                        strokeDashoffset: 1,
                    }}
                />
            </motion.svg>
        </div>
    )
}

export default Dancehaus
