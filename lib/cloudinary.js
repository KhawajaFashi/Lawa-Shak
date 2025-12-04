import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
/**
 * Uploads a file buffer to Cloudinary
 * @param {Buffer} fileBuffer - The file buffer to upload
 * @param {string} path - Folder or public_id for the file
 * @param {object} options - Extra Cloudinary upload options (e.g., resource_type)
 */
export const uploadToCloudinary = async (fileBuffer, path = 'lava-shak', options = {}) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { public_id: path, ...options },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );
        uploadStream.end(fileBuffer);
    });
};

/**
 * Fetches a raw/JSON file from Cloudinary
 * @param {string} publicId - The public_id of the file (e.g., 'lava-shak/reviews/reviews.json')
 * @returns {Promise<string|null>} - Returns file content as string or null if failed
 */
export const fetchFromCloudinary = async (publicId) => {
    try {
        // Cloudinary URL for raw files
        const url = cloudinary.url(publicId, { resource_type: 'raw', version: Date.now() });
        const res = await fetch(url);
        if (!res.ok) return null;
        return await res.text();
    } catch (err) {
        console.error('Error fetching from Cloudinary:', err);
        return null;
    }
};

export default cloudinary;
