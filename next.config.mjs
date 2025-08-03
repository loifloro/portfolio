/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME,
                pathname: "/storage/**",
                port: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PORT ?? "",
            },
        ],
    },
};

export default nextConfig;
