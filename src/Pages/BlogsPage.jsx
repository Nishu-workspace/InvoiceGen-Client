import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData"; // Import the data

const BlogsPage = () => {
  return (
    <div className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            From the <span className="text-indigo-400">Blog</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            Insights, tips, and articles on invoicing, freelancing, and business
            management.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                className="h-56 w-full object-cover"
                src={post.imageUrl}
                alt={post.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x400/111827/ffffff?text=Image+Error";
                }}
              />
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base text-gray-400">{post.excerpt}</p>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Read full story &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
