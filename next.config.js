/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Serve /public images directly instead of via `/_next/image`. Netlify (and other
    // static/edge setups) often break when that optimization route is not wired to the
    // Next runtime; localhost `next dev` always provides it.
    images: {
        unoptimized: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    async headers() {
        return [
            {
                source: "/assets/:path*",
                headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
            },
            {
                source: "/Arpit_Resume.pdf",
                headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
            },
        ];
    },
};

module.exports = nextConfig;
