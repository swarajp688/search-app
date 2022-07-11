import LatestTrends from "./LatestTrends"
import PopularSuggestions from "./PopularSuggestions"


const SuggestionBox = () => {
  return (
    <div className="suggestion-box">
        <LatestTrends />
        <PopularSuggestions />
    </div>
  )
}

export default SuggestionBox