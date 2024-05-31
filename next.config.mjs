/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        /**
         * this will allow/whitelist fetching image from external source,
         * nextjs need to specify the hostname first.
         */
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'YOUR_URL_HOSTNAME'
            // }
        ]
    }
};

export default nextConfig;
