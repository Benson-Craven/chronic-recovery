/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... any other config you have ...

    async redirects() {
        return [
            // 2. FIX OLD DRUPAL PAGES (Mapping old -> new)
            {
                source: "/questionnaire",
                destination: "/self-assessment", // Assuming this matches your new structure
                permanent: true,
            },
            {
                source: "/links",
                destination: "/resources", // "Links" usually maps best to Resources
                permanent: true,
            },
            {
                source: "/about",
                destination: "/info", // You have an /info page, but no /about
                permanent: true,
            },
            {
                source: "/services",
                destination: "/info", // Redirect to Info or Home if you don't have a dedicated Services page
                permanent: true,
            },

            // 3. CATCH-ALL FOR OLD "NODE" URLS (Optional but smart for Drupal)
            // If old site used /node/123, this sends them to home instead of a 404
            {
                source: "/node/:slug*",
                destination: "/",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
