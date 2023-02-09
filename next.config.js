/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // connecting database
  env: {
    MONGO_URL: "mongodb+srv://Hetashri:Hetashri1603@cluster0.lfs5ilq.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
