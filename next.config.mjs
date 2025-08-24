/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'res.cloudinary.com',
			'ucarecdn.com',
			'images.unsplash.com',
			'cdn.discordapp.com'
		],
	},
};

export default nextConfig;
