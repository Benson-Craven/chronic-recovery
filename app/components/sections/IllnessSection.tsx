"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import React from "react"
import { FadeInOnScroll } from "../animations/FadeInOnScroll"

const IllnessSection = () => {
    return (
        <div className="bg-secondary">
            <div className="flex h-48 items-center justify-center">
                <FadeInOnScroll>
                    {" "}
                    <span className="font-Satoshi font-semibold text-textThird md:text-3xl">
                        What We Do
                    </span>
                </FadeInOnScroll>
            </div>
            <h1 className="mb-2 text-center font-Satoshi text-5xl text-neutral-200">
                <FadeInOnScroll threshold={0.5}>
                    {" "}
                    Are you{" "}
                    <span className="font-butler italic">suffering</span> from?
                </FadeInOnScroll>
            </h1>
            <IllnessSectionCarousel />
            <FadeInOnScroll>
                <div className="flex h-[80vh] items-center justify-center">
                    <span className="p-5 text-center font-Satoshi leading-tight text-textThird md:text-5xl">
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
    console.log(cards.length)
    const x = useTransform(
        scrollYProgress,
        [0, 1, 1 - 1 / cards.length],
        ["1%", -(100 - cards.length) + "%", -(100 - cards.length) + "%"],
    )
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-secondary">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{
                        x,
                    }}
                    className="flex gap-4"
                >
                    {cards.map((card) => {
                        return (
                            <FadeInOnScroll threshold={0.5}>
                                <Card card={card} key={card.id} />
                            </FadeInOnScroll>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] cursor-pointer overflow-hidden bg-neutral-200 duration-300 hover:scale-95"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
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
