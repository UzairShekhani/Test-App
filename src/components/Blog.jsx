import React from "react";
import blog1 from "../assets/Blog1.jpeg";
import blog2 from "../assets/Blog2.jpeg";
import blog3 from "../assets/Blog3.jpeg";
// import User1 from "../assets/user1.jpeg";
// import User2 from "../assets/user2.jpeg";
// import User3 from "../assets/user3.jpeg";



const Blog = () => {
  const posts = [
    {
      title: "UX review presentations",
      category: "Design",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      img: blog1,
      // user:User1
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug Letter spacing. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      img: blog2,
      // user: User2
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      img: blog3,
      // user:User3
    },
  ];

  return (
    <div className="p-6 md:p-12 lg:p-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Blog</h2>
        <p className="text-gray-500 text-lg mt-2">
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <br />
        <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          View all posts
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className=" rounded-lg overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <p className="text-purple-500 text-sm font-medium mb-2">
                {post.category}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                {/* <img className="w-8 m-6" src={post.user} alt="" />  */}
                <span>{post.author}</span>
                <span className="mx-2">&bull;</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
