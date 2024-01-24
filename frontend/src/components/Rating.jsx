import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <FaStar fill={color} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt fill={color} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar fill={color} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt fill={color} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar fill={color} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt fill={color} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar fill={color} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt fill={color} />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar fill={color} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt fill={color} />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span className='rating-text'>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#F8E825',
};

export default Rating;
