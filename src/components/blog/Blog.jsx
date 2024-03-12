import PropTypes from "prop-types";
import "./Blog.css";
export default function Blog(props) {
  const { blog, bookMark, timeSpent } = props;
  return (
    <div className="blog-card">
      <img
        src={blog?.cover_image}
        alt="Blog Image"
        className="blog-card-cover"
      />
      <a href="#" className="blog-card-title">
        {blog?.title}
      </a>
      <div className="flex items-center justify-between blog-card-author flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <img src={blog?.author_img} alt="Author" />
          <div>
            <h5>{blog?.author}</h5>
            <h6>{blog?.posted_date}</h6>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{blog.reading_time} min read</span>
          <button onClick={() => bookMark(blog)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="mb-2">
        {blog.hashtags.map((hashtag, index) => (
          <a
            href="#"
            key={index}
            className="mr-2 inline-block text-blue-700 font-semibold"
          >
            #{hashtag}
          </a>
        ))}
      </p>
      <button
        className="text-blue-700 font-semibold"
        onClick={() => timeSpent(blog.Id, blog.reading_time)}
      >
        <u>Mark As Read</u>
      </button>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookMark: PropTypes.func.isRequired,
  timeSpent: PropTypes.func.isRequired,
};
