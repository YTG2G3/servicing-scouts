/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "littlevisuals.co",
                port: '',
                pathname: "/images/**"
            }
        ]
    }
}

module.exports = nextConfig
