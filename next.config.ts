/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-eval' https://app.aminos.ai;",
              "connect-src 'self' https://app.aminos.ai;",
              "img-src 'self' data: https:;",
              "style-src 'self' 'unsafe-inline';",
              "font-src 'self' data: https:;",
              "frame-src https://app.aminos.ai;",
              "base-uri 'self';",
              "form-action 'self';",
            ].join(" "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
