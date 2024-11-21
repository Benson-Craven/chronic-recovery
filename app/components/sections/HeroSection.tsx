import React, { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface Picture {
    src: string
    scale: number
}

interface ImageGalleryProps {
    pictures: Picture[]
}

const ImageGallery: React.FC<ImageGalleryProps> = () => {
    const container = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])

    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])

    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])

    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])

    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: "forest.avif",

            scale: scale4,
        },

        {
            src: "forest.avif",

            scale: scale5,
        },

        {
            src: "forest.avif",

            scale: scale6,
        },
    ]

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-full">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 && "left-[5vw] top-[-30vh]"} ${index === 2 && "left-[-25vw] top-[-10vh]"} ${index === 3 && "left-[27.5vw]"} ${index === 4 && "left-[5vw] top-[27.5vh]"} ${index === 5 && "left-[-22.5vw] top-[27.5vh]"} ${index === 6 && "left-[25vw] top-[22.5vh]"} `}
                    >
                        <div
                            className={`relative ${index === 0 && "h-[25vh] w-[25vw]"} ${index === 1 && "h-[30vh] w-[35vw]"} ${index === 2 && "h-[45vh] w-[20vw]"} ${index === 3 && "h-[25vh] w-[25vw]"} ${index === 4 && "h-[25vh] w-[20vw]"} ${index === 5 && "h-[25vh] w-[30vw]"} ${index === 6 && "h-[15vh] w-[15vw]"} `}
                        >
                            <Image
                                src={`/images/${src}`}
                                fill
                                alt={`Image ${index + 1}`}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery
