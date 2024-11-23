/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 環境變數配置
  env: {
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // 安全性標頭配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // 圖片優化配置
  images: {
    domains: [
      'localhost',
      new URL(process.env.NEXT_PUBLIC_IMAGE_DOMAIN).hostname,
      new URL(process.env.NEXT_PUBLIC_CDN_URL).hostname,
      'images.unsplash.com',
      'via.placeholder.com',
    ].filter(Boolean), // 過濾掉未定義的值
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },

  // i18n 國際化配置
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_SITE_LOCALE || 'zh-TW',
    locales: ['zh-TW', 'en'],
    localeDetection: true,
  },

  // 重定向配置
  async redirects() {
    return [
      // 維護模式重定向
      ...(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
        ? [
            {
              source: '/((?!maintenance).*)',
              destination: '/maintenance',
              permanent: false,
            },
          ]
        : []),
    ]
  },

  // webpack 配置
  webpack: (config, { dev, isServer }) => {
    // 根據環境變數決定是否移除 console.log
    if (!dev && !isServer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.compress.drop_console =
            process.env.NEXT_PUBLIC_SHOW_CONSOLE !== 'true';
        }
      });
    }

    // GLSL 著色器支援
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // SVG 支援
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // 優化打包
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    return config
  },

  // 實驗性功能配置
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverActions: true,
    typedRoutes: true,
  },

  // 編譯器配置
  compiler: {
    // 移除 console.log（根據環境變數）
    removeConsole: process.env.NEXT_PUBLIC_SHOW_CONSOLE !== 'true',
    // emotion 支援
    emotion: true,
    // styled-components 支援
    styledComponents: true,
  },

  // 模組解析配置
  modularizeImports: {
    'lodash': {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
      preventFullImport: true,
    },
  },

  // 效能優化配置
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',

  // robots.txt 和 sitemap 配置
  siteMap: {
    enabled: process.env.NEXT_PUBLIC_ENABLE_SITEMAP === 'true',
  },

  // 自定義路由配置
  async rewrites() {
    return [
      // API 代理範例
      // {
      //   source: '/api/:path*',
      //   destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      // },
    ]
  },
}

// 根據環境變數決定是否允許搜尋引擎索引
if (process.env.NEXT_PUBLIC_ENABLE_ROBOTS === 'false') {
  nextConfig.headers = async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig)