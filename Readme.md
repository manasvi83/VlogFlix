# Video Streaming Platform API - VlogFlix

VlogFlix is the backend API for a full-fledged video streaming platform similar to YouTube. The platform includes features such as video uploads, user authentication, video playback, and community posts (akin to Twitter). The API is built using Node.js, Express.js, and MongoDB, with Cloudinary integrated for media storage.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)


## Features

- **User Authentication**: Register and log in users with JWT-based authentication.
- **Video Management**: Upload, retrieve, update, and delete videos.
- **Community Posts**: Post, like, and comment on updates in the community section.
- **Video Playback**: Stream videos with support for multiple resolutions.
- **Search & Filtering**: Search videos by title, tags, or description and filter based on criteria.
- **Media Storage**: All media files (videos, images) are stored on Cloudinary.
- **Responsive Design**: Ensures seamless user experience across devices.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Media Storage**: Cloudinary
- **Other Libraries**: Mongoose, bcrypt, multer, dotenv

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/videostreaming-platform-api.git
   cd videostreaming-platform-api```
2. **Install dependencies:**

```bash
Copy code
npm install 
```
3. **Set up environment variables:**
    Create a .env file in the root directory and add the following variables:

```bash
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
4. **Run the server:**

```bash
  Copy code
  npm start
```
The server will start on http://localhost:5000.

## Environment Variables
  - PORT: The port on which the server will run (default is 5000).
  - MONGODB_URI: Connection string for MongoDB.
  - JWT_SECRET: Secret key for JWT token encryption.
  - CLOUDINARY_CLOUD_NAME: Cloudinary cloud name for media storage.
  - CLOUDINARY_API_KEY: API key for Cloudinary.
  - CLOUDINARY_API_SECRET: API secret for Cloudinary.
