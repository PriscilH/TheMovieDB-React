import TvShowListItem from "./TvShowListItem";

const TvShowList = ({tvShowList, onClickItem}) => {
  return (
    <div>
      <div className="ListTitle">You'll probably like :</div>
      <div className="list">
        {tvShowList.map((tvShow) => {
          return (
            <span className="tvShowItem" key={tvShow.id}>
              <TvShowListItem onClick={onClickItem} tvShow={tvShow}  />
            </span>
          );
        })}
      </div>
    </div>
  )
}

export default TvShowList