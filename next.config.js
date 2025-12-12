/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/audits-and-reports/:path*',
        destination: '/audits/:path*',
        permanent: true,
      },
      {
        source: '/propertypanel',
        permanent: true,
        destination:
          'https://lacontroller.maps.arcgis.com/apps/Cascade/index.html?appid=b6d7907c118d4ea2a1dd96bc0425633d',
      },
      {
        source: '/controlpanel-la/',
        permanent: true,
        destination: '/data',
      },
      {
        source: '/controlpanel-la',
        permanent: true,
        destination: '/data',
      },
      {
        source: '/report-fraud-waste-and-abuse',
        destination: '/fwa',
        permanent: true,
      },
      {
        source: '/pafr22',
        destination: '/reports/pafr22',
        permanent: true,
      },
      {
        source: '/pafr22/',
        destination: '/reports/pafr22',
        permanent: true,
      },
      {
        source: '/payroll-calendar/',
        destination: '/payrollcalendar/',
        permanent: true,
      },
      {
        source: '/payroll-calendar',
        destination: '/payrollcalendar/',
        permanent: true,
      },
      {
        source: '/financial-reports/:path',
        destination: '/reports/:path',
        permanent: true,
      },
      {
        source: '/audits-and-reviews/:path',
        destination: '/audits/:path',
        permanent: true,
      },
      {
        source: '/fraud_hotline/',
        destination: '/fwa/',
        permanent: true,
      },
      {
        source: '/report-fraud-waste-and-abuse/',
        destination: '/fwa/',
        permanent: true,
      },
      {
        source: '/wtf/',
        destination: '/fwa/',
        permanent: true,
      },
      {
        source: '/wp-content/:slug*',
        destination:
          'https://wpstaticarchive.lacontroller.io/wp-content/:slug*',
        permanent: true,
      },
      {
        source: '/4118',
        destination: 'https://4118.lacontroller.io',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
