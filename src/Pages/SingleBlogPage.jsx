// src/pages/SingleBlogPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogData"; // Import the same data

const SingleBlogPage = () => {
  const { slug } = useParams(); // Get the 'slug' from the URL
  const post = blogData.find((p) => p.slug === slug);

  // Handle case where the blog post isn't found
  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-white">Post not found!</h1>
        <Link
          to="/blog"
          className="mt-4 inline-block text-indigo-400 hover:underline"
        >
          &larr; Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Post Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              By {post.author} on {post.date}
            </p>
          </div>

          {/* Post Image */}
          <img
            className="w-full h-auto max-h-[450px] object-cover rounded-lg shadow-lg mb-12"
            src={post.imageUrl}
            alt={post.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1200x600/111827/ffffff?text=Image+Error";
            }}
          />

          {/* Post Content */}
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-6">
            {/* Split content by newlines to create paragraphs */}
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-16 text-center">
            <Link to="/blogs" className="text-indigo-400 hover:underline">
              &larr; Back to all blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
