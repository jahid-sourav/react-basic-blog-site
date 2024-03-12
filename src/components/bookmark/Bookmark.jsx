import PropTypes from "prop-types";
import BookmarkCard from "./BookmarkCard";

export default function Bookmark({ bookmarks }) {
  return (
    <div className="p-2 bg-black/[.05]">
      <h4 className="text-black font-semibold text-xl mb-3">
        Bookmarked Blogs - <span>{bookmarks.length}</span>
      </h4>
      <BookmarkCard bookmarks={bookmarks} />
    </div>
  );
}
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};
