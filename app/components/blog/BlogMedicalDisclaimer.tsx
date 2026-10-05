export default function BlogMedicalDisclaimer() {
    return (
        <aside
            className="bg mt-14 border-l border-[rgba(30,58,32,0.24)] bg-[rgba(30,58,32,0.04)] px-6 py-5"
            aria-labelledby="medical-disclaimer-heading"
        >
            <h2
                id="medical-disclaimer-heading"
                className="mb-3 font-satoshi text-base font-medium text-[#1E3A20]"
            >
                Medical disclaimer
            </h2>

            <p className="font-satoshi text-sm font-light leading-relaxed text-light-body md:text-base">
                This article is for general education only and is not a
                substitute for medical advice, diagnosis, or treatment. Please
                speak with your GP, consultant, or relevant health professional
                about new, worsening, unexplained, or urgent symptoms before
                using a pain recovery approach.
            </p>
        </aside>
    )
}
