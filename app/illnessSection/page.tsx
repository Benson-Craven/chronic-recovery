'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'

const IllnessSection = () => {
  return (
    <div className='bg-secondary'>
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold md:text-3xl uppercase text-textThird font-Jost'>
          what we do
        </span>
      </div>
      <h1 className='font-Jost text-center text-5xl mb-2 text-neutral-200'>
        Are you <span className='font-PlayfairDisplay italic'>suffering</span>{' '}
        from?
      </h1>
      <IllnessSectionCarousel />
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold md:text-5xl text-textThird leading-tight'>
          Have you seen{' '}
          <span className='font-PlayfairDisplay italic'>multiple</span> medical
          professionals without finding{' '}
          <span className='font-PlayfairDisplay italic'>lasting relief?</span>
        </span>
      </div>
    </div>
  )
}

// Scrolling element that allows users to scroll horizontal, essentially a bigger div that will stretch whilst the others will cycle through the cards
const IllnessSectionCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])
  return (
    <section ref={targetRef} className='relative h-[300vh] bg-secondary'>
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        <motion.div
          style={{
            x,
          }}
          className='flex gap-4'
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />
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
      className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
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
    url: '/images/abstract/1.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/images/abstract/2.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/images/abstract/3.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/images/abstract/4.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/images/abstract/5.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/images/abstract/6.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/images/abstract/7.jpg',
    title: 'Title 7',
    id: 7,
  },
]
