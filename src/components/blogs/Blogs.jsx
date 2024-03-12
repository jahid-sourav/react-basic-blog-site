import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import Bookmark from "../bookmark/Bookmark";
import "../commonStyles/CommonStyles.css";
import Time from "../time/Time";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  const [bookmarks, setBookmarks] = useState([]);
  const bookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const timeSpent = (id, time) => {
    setTotalTimeSpent(totalTimeSpent + time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.Id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <section className="section-gap">
        <div className="temp-container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-start-1 col-end-13 xl:col-end-10">
              <div className="grid grid-cols-1 gap-6">
                {blogs.map((blog) => (
                  <Blog
                    blog={blog}
                    key={blog.Id}
                    bookMark={bookMark}
                    timeSpent={timeSpent}
                  />
                ))}
              </div>
            </div>
            <div className="col-start-1 xl:col-start-10 col-end-13">
              <Time totalTimeSpent={totalTimeSpent} />
              <Bookmark bookmarks={bookmarks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
