export type TestimonialRecord = {
    id: string
    name: string
    condition?:
        | "Chronic back pain"
        | "Chronic migraines"
        | "Chronic pain"
        | "Chronic fatigue and pain"
    text: string
    homepageExcerptParagraphIndex?: number
}

export const testimonials: TestimonialRecord[] = [
    {
        id: "d-bolger",
        name: "D Bolger",
        condition: "Chronic back pain",
        text: `I've been doing online sessions with Marsha for my chronic back pain for the past few weeks.

Before working with Marsha, I was constantly worrying about my symptoms and what they meant, and I felt like I was going around in circles. She has really helped me understand neuroplastic pain, my nervous system, and how they are both linked.

Although I am still quite early in my healing, I have already become very confident that the methods Marsha has been teaching me will allow for a full recovery.

She is very kind and understanding and has made me feel completely at ease from our first session. The things she has taught me so far have made a difference in how I react to my symptoms and how confident I am that I will recover fully with time.`,
        homepageExcerptParagraphIndex: 3,
    },
    {
        id: "m-sweeney",
        name: "M Sweeney",
        condition: "Chronic migraines",
        text: `Working with Marsha has really changed the way I understand and relate to my chronic migraine. After months of persistent pain, I was very focused on my symptoms and worried about making them worse. Marsha helped me understand the connection between the nervous system and chronic pain and gave me practical tools through pain reprocessing therapy to respond differently to my symptoms.

I genuinely noticed a reduction in my pain after starting the work with her, and for a while I felt I was making really good progress. I've recently had a flare since returning to work and being exposed to screens again, which my migraine brain is particularly sensitive to. However, I now feel more equipped to understand what is happening and work through setbacks rather than being frightened by them.

Marsha is very kind, empathetic, patient, and supportive. I'm still on my recovery journey, but I feel more hopeful and confident about the future because of the work we've done and will continue to do together.`,
        homepageExcerptParagraphIndex: 2,
    },
    {
        id: "n-omahony",
        name: "N O'Mahony",
        condition: "Chronic pain",
        text: `I've spent many years living with severe chronic pain and have sought the help of many different practitioners in both conventional and alternative medicine, but had little to no success in alleviating the pain.

I recently started working with Marsha and, although it is still early days, I am starting to notice reductions in my pain levels and occasional pain-free days. I am fascinated by how "easy" this process feels, and yet I am getting great results!

I'd highly recommend working with Marsha to anybody suffering from chronic pain.`,
        homepageExcerptParagraphIndex: 1,
    },
    {
        id: "kc",
        name: "KC",
        condition: "Chronic fatigue and pain",
        text: `I have suffered from chronic fatigue and pain for 3 years. After only 7 weeks of working with Marsha, I am better. It's life-changing.

Marsha is very thorough but compassionate, and her kindness and patience will never be forgotten by me.`,
    },
]
