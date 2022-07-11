

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating.rate; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
    
  }
  return (
    <div className="rating">
      {stars}
    </div>
  );
}
export default Rating;
//