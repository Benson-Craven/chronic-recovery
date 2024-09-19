import { motion } from "framer-motion"

interface ButtonProps {
    isActive: boolean
    toggleMenu: () => void
}

export default function Button({ isActive, toggleMenu }: ButtonProps) {
    return (
        <div className="absolute right-[15px] top-[15px] h-[40px] w-[100px] cursor-pointer overflow-hidden rounded-[25px]">
            <motion.div
                className="relative h-full w-full"
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                <div
                    className="h-full w-full bg-textSecondary"
                    onClick={toggleMenu}
                >
                    <PerspectiveText label="Contact" />
                </div>
                <div
                    className="h-full w-full bg-textPrimary"
                    onClick={toggleMenu}
                >
                    <PerspectiveText label="Close" textColor="text-[#fafafa]" />
                </div>
            </motion.div>
        </div>
    )
}

interface PerspectiveTextProps {
    label: string
    textColor?: string
}

function PerspectiveText({
    label,
    textColor = "text-black",
}: PerspectiveTextProps) {
    return (
        <div className="transform-style-preserve-3d group-hover:rotate-x-90 flex h-full w-full flex-col items-center justify-center transition-transform duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)]">
            <p
                className={`pointer-events-none m-0 uppercase transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor} group-hover:-translate-y-full group-hover:opacity-0`}
            >
                {label}
            </p>
            <p
                className={`pointer-events-none absolute m-0 uppercase transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor} rotate-x-90 origin-bottom translate-y-[9px] transform opacity-0 group-hover:opacity-100`}
            >
                {label}
            </p>
        </div>
    )
}
