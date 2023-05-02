import { SMALL_IMG_COVER_BASE_URL } from "../config"

const MAX_TITLE_CHAR = 20;

const TvShowListItem = ({tvShow, onClick}) => {
    const onClick_ = () => {
        onClick(tvShow);
      };

  return (
    <div onClick={onClick_} className="ItemContain">
        <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className="SmallImg"
      />
      <div className="titleItem">
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  )
}

export default TvShowListItem