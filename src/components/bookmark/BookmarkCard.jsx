import PropTypes from "prop-types";
import "./Bookmark.css";
export default function BookmarkCard({ bookmarks }) {
  return (
    <>
      {bookmarks.map((bookMark, index) => (
        <div className="bookmark-card" key={index}>
          <p>{bookMark.title}</p>
        </div>
      ))}
    </>
  );
}
BookmarkCard.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
