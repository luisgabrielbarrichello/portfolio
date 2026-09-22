/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                pathname: '/icons/**',
            },
        ],
        unoptimized: true,
    },

    webpack(config, { isServer }) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: isServer ? { not: /\.(css|scss|sass)$/ } : undefined,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        dimensions: false,
                    },
                },
            ],
        });

        return config;
    },
};
export default nextConfig;
