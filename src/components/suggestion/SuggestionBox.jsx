import LatestTrends from "./LatestTrends"
import PopularSuggestions from "./PopularSuggestions"


const SuggestionBox = () => {
  return (
    <div className="suggestion-box">
        <LatestTrends />
        <PopularSuggestions />
        <p>* Click on search to view all products </p>
    </div>
  )
}
export default SuggestionBox