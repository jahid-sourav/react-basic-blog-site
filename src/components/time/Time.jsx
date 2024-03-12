import PropTypes from "prop-types";
import "./Time.css";
export default function Time({ totalTimeSpent }) {
  return (
    <div className="mb-3">
      <div className="time-spent">
        <p>
          Spent time on read : <span>{totalTimeSpent}</span> min
        </p>
      </div>
    </div>
  );
}
Time.propTypes = {
  totalTimeSpent: PropTypes.number.isRequired,
};
