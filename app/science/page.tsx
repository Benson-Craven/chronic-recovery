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
                    Understanding Chronic Pain and its Treatments
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
  I am delighted to tell you that there is new help for chronic pain sufferers and for people with other medically unexplained diagnoses such as IBS, long covid, chronic fatigue, migraine, anxiety, back pain, fibromyalgia and many more. If you have been to several medical professionals and are still not getting better, you may benefit from this approach. You may even have been given a diagnosis for your chronic pain, but if your pain has not resolved, then there has to be a neuroplastic component to it.
</p>

<p className="leading-relaxed text-gray-700">
  It is important to stress that ALL PAIN IS REAL — it is not imaginary or ‘all in your head’. All pain originates in the brain, and to treat chronic pain, you must start with the brain. These insights come from the most recent scientific studies into the causes of chronic pain.
</p>

<p className="leading-relaxed text-gray-700">
  Sufferers of chronic pain are often unaware that pain can get “stuck” in the body when neural circuits keep sending pain signals, even after the body is safe. This can happen for many reasons, including stress, trauma, or unprocessed emotions. Pain can also persist as a learned response — for example, when an injury has healed but the pain continues. This is where Pain Reprocessing Therapy (PRT) can help the brain turn off the danger and pain signals.
</p>

<p className="leading-relaxed text-gray-700">
  The biopsychosocial method is the most up-to-date approach to treating chronic pain and is now being taught to medical practitioners worldwide, including Australia, the US, and the NHS in the UK. I have trained under Dr. Howard Schubiner, a pioneer in mind-body medicine, and I work with many people of all ages and conditions, with life-changing results. Let me help you too.
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
                            "PRT - Pain Reprocessing Therapy",
                            "Somatic tracking",
                            "Graded exposure therapy",
                            "EAET - Emotional awareness & expression therapy",
                            "Brain / body re-training",
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
                        rule out structural abnormality, disease or infection.
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
