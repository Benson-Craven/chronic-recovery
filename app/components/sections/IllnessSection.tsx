"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"
import Image from "next/image"

const IllnessSection = () => {
    return (
        <div className="bg-secondary">
            {/* <div className="flex h-36 items-center justify-center md:h-48">
                <FadeInOnScroll>
                    {" "}
                    <span className="font-Satoshi text-lg font-semibold text-textThird md:text-3xl">
                        What We Do
                    </span>
                </FadeInOnScroll>
            </div> */}
            <h1 className="mb-2 flex h-40 items-center justify-center text-center font-Satoshi text-4xl text-neutral-200 md:text-5xl">
                <FadeInOnScroll threshold={0.5}>
                    {" "}
                    Are you{" "}
                    <span className="font-butler italic">suffering</span> from?
                </FadeInOnScroll>
            </h1>
            <IllnessSectionCarousel />
            <FadeInOnScroll>
                <div className="flex h-[40vh] items-center justify-center md:h-[80vh]">
                    <span className="w-3/4 p-5 text-center font-Satoshi text-3xl leading-tight text-textThird md:w-full md:text-5xl">
                        Have you seen{" "}
                        <span className="font-butler italic">multiple</span>{" "}
                        medical professionals without finding{" "}
                        <span className="font-butler italic">
                            lasting relief?
                        </span>
                    </span>
                </div>
            </FadeInOnScroll>
        </div>
    )
}

// Scrolling element that allows users to scroll horizontal, essentially a bigger div that will stretch whilst the others will cycle through the cards
const IllnessSectionCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(
        scrollYProgress,
        [0, 1, 1 - 1 / cards.length],
        ["1%", -(100 - cards.length) + "%", -(100 - cards.length) + "%"],
    )

    const renderCard = (card: CardType) => <Card card={card} key={card.id} />

    return (
        <section
            aria-label="Illness types carousel"
            role="region"
            ref={targetRef}
            className="relative h-[300vh] bg-secondary"
        >
            <div className="sticky top-0 flex h-[500px] items-center overflow-hidden md:mt-0 md:h-screen">
                <motion.div
                    style={{
                        x,
                    }}
                    className="flex gap-4"
                >
                    {cards.map(renderCard)}
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[300px] w-[300px] overflow-hidden bg-neutral-200 duration-300 md:h-[450px] md:w-[450px]"
        >
            <Image
                src={`${card.url}`}
                alt={card.title}
                fill
                loading="lazy"
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300"
            />
            {/* <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300"
            ></div> */}
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg md:text-6xl">
                    {card.title}
                </p>
            </div>
        </div>
    )
}

export default IllnessSection

type CardType = {
    url: string
    title: string
    id: number
}

const cards: CardType[] = [
    {
        url: "/images/stomach-pain.jpg",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/images/neck-pain.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/images/headache.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/images/wrist-pain.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/images/monstera.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/images/meeting1.jpg",
        title: "Title 6",
        id: 6,
    },
]
