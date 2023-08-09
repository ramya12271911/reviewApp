// Write your code here
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const {imgUrl, username, companyName, description} = reviewsList

  return (
    <li className="list-item">
      <img src={imgUrl} alt={username} className="profile" />
      <p className="name">{username}</p>
      <p className="text">{companyName}</p>
      <p className="text">{description}</p>
    </li>
  )
}

export default ReviewsCarousel
