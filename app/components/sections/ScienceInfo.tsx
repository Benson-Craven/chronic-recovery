import React, { useEffect, useRef, useState } from "react"

const AnimatedSVG = () => {
    const svgRef = useRef(null)
    const pathRef = useRef(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const Path_440 = pathRef.current
        const theFill = svgRef.current.getElementById("theFill")
        const l = Path_440.getTotalLength()

        const handleScroll = () => {
            const e = document.documentElement
            const scrollPosition = window.scrollY
            const maxScroll = e.scrollHeight - e.clientHeight
            const percentage = scrollPosition / maxScroll
            setScrollPercentage(percentage)

            theFill.setAttributeNS(null, "stroke-dasharray", l)
            const dashoffset = l - percentage * l
            theFill.setAttributeNS(null, "stroke-dashoffset", dashoffset)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial call to set the initial state

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const svgStyle = {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${scrollPercentage * 100}%)`,
        width: "80vw",
        height: "80vh",
        zIndex: -1,
    }

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 802.354 3245.896"
            style={svgStyle}
        >
            <defs>
                <path
                    ref={pathRef}
                    id="Path_440"
                    d="m355.55806,26.67908c77.16443,217.75782 -356.68844,132.13693 -316.06661,591.71916c153.83245,545.11426 790.47004,206.35276 740.054,854.77046c-31.64836,123.2837 -146.90235,276.6134 -625.84238,230.674c-229.95855,-50.4664 -121.34094,544.3187 -22.895,642.0533c177.00145,175.7225 265.11295,8.9322 497.25982,138.5774c168.87195,94.3086 184.12246,714.8868 -69.22951,686.9277"
                    fill="none"
                />
            </defs>
            <use
                xlinkHref="#Path_440"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="8"
            />
            <use
                id="theFill"
                xlinkHref="#Path_440"
                stroke="#000"
                strokeWidth="25"
            />
        </svg>
    )
}

export default AnimatedSVG
