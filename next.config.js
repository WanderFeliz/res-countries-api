/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        unoptimized: true,
        domains: ['flagcdn.com', 'upload.wikimedia.org'],
    },
    output: 'export',
}

module.exports = nextConfig
