import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    
  },
  images: {
    domains: ['example.com'], // 만약 외부 이미지 소스를 사용한다면 해당 도메인을 여기에 추가하세요
  },
}

export default nextConfig