"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const SciencePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#fafafa] to-textSecondary px-4 py-12 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="mb-8 text-3xl font-bold text-[#323629] md:text-5xl lg:text-6xl">
                    The Science
                </h1>
                <p className="text-xl text-gray-700">
                    Understanding Chronic Pain and Its Treatments
                </p>
            </motion.div>

            {/* Content Section */}
            <div className="mx-auto mt-12 max-w-7xl">
                {/* Image and Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
                >
                    <div className="relative h-96">
                        <Image
                            src="/images/study.webp"
                            alt="Brain and Pain"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-textPrimary">
                            What Causes Chronic Pain?
                        </h2>
                        <p className="leading-relaxed text-gray-700">
                            95% of our brain is unconscious and directs the
                            function of our body based on its perception of
                            immediate danger. It constantly interprets all of
                            the information from the world as well as from
                            nerves up from our body to decide if we are in
                            danger or are safe. Our brain bases this
                            interpretation on our experiences and what it has
                            ‘learned’. Our brain stores and remembers everything
                            that happened that was unsafe and applies it to the
                            current moment. This all happens away from our
                            conscious awareness.
                        </p>
                    </div>
                </motion.div>

                {/* Treatments Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16"
                >
                    <h2 className="mb-8 text-center text-3xl font-bold text-textPrimary">
                        Treatments and Therapeutic Approaches
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Re-introducing movement / exercise and getting back to 'normal life' activities",
                            "Pain reprocessing therapy",
                            "Somatic tracking",
                            "Graded exposure therapy",
                            "EAET - Emotional awareness & expression therapy",
                            "ISTDP - Intensive short-term dynamic psychotherapy",
                            "Brain / body training",
                            "Pain counselling",
                            "Nervous system regulation",
                            "Pain psychology exercises & education",
                            "Pain neuroscience education",
                            "Clinical hypnotherapy",
                            "Mindfulness exercises",
                        ].map((treatment, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                            >
                                <p className="text-gray-700">{treatment}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Note Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16 rounded-lg bg-white p-8 text-center"
                >
                    <p className="text-gray-700">
                        <strong>NOTE:</strong> Please consult your doctor to
                        rule out structural abnormality, disease, or infection.
                        Take the{" "}
                        <Link href="/self-assessment">
                            <b className="hover:darken">
                                self-assessment questionnaire
                            </b>
                        </Link>{" "}
                        to help determine whether this approach is a good fit
                        for you.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default SciencePage
