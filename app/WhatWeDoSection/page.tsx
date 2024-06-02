import React from 'react'

const WeDoSection = () => {
  return (
    <>
      {' '}
      <section className='min-h-screen bg-primary flex justify-center items-center'>
        <div className='h-2/3 w-2/3 flex justify-center items-center flex-col'>
          <h1 className='text-5xl p-5 font-bold font-Jost text-textPrimary'>
            Our approach has helped countless individuals of all ages{' '}
            <span className='font-PlayfairDisplay italic'>overcome</span>{' '}
            debilitating ailments and{' '}
            <span className='font-PlayfairDisplay italic'>reclaim </span> their
            lives.
          </h1>
          <p className='font-Jost font-bold text-2xl p-5 mt-2 text-textSecondary text-center'>
            Experience life-changing results with our proven methods.
          </p>
          <button className='bg-textThird w-auto px-5 py-3 mt-10 md:text-2xl text-l text-secondary font-Jost font-bold rounded-full'>
            Book Your Consultation Now
          </button>
        </div>
      </section>
      <section className='bg-black min-h-screen flex'>
        <div className='bg-white w-1/2 min-h-screen flex flex-coljustify-center flex-col items-center p-10'>
          <h1 className='text-6xl bg-textPrimary mb-8 p-4 font-bold font-Jost'>
            The <span className='font-PlayfairDisplay italic'>truth?</span>
          </h1>

          <p className='text-5xl font-bold font-Jost text-textPrimary mt-5 p-5'>
            <span className='font-PlayfairDisplay italic'>95%</span> of your
            brain is unconsciously on{' '}
            <span className='font-PlayfairDisplay italic'>high alert,</span>{' '}
            stuck in defense mode from past hurts.
          </p>
          <p className='text-5xl font-bold font-Jost text-textPrimary mt-5 p-5'>
            But you can{' '}
            <span className='font-PlayfairDisplay italic'>retrain </span> that
            bad habit. Our pioneering mind-body approach lets you take back the
            reins.
          </p>
        </div>

        <div className='bg-pink-100 w-1/2 min-h-screen flex justify-center items-center '>
          <video
            src='/videos/Waterfall.mp4'
            autoPlay
            muted
            loop
            className='w-full h-full object-cover'
          />
        </div>
      </section>
    </>
  )
}

export default WeDoSection
