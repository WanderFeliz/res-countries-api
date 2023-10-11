/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['flagcdn.com', 'upload.wikimedia.org'],
    },
}

module.exports = nextConfig
