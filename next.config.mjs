const nextConfig = {
  output: 'export',
  images: {
    domains: ['img.youtube.com'],
  },
  webpack: (config, { isServer }) => {
    config.cache = false
    return config
  },
}

export default nextConfig
