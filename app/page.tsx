import WeDoSection from './WhatWeDoSection/page'
import IllnessSection from './illnessSection/page'

export default function Home() {
  return (
    <>
      <main>
        <section className='min-h-screen bg-primary flex justify-center items-center'>
          <h1 className='text-4xl md:text-9xl font-bold text-textPrimary font-PlayfairDisplay uppercase flex-wrap mx-11'>
            The <i>Biophysical Approach</i> to{' '}
            <span className='text-textSecondary'>chronic pain recovery</span>
          </h1>
        </section>
        <section>
          <IllnessSection />
          <WeDoSection />
        </section>
      </main>
    </>
  )
}
