import { TVShowAPI } from './Api/tv-show';
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetails from "./components/TVShowDetails";
import TvShowListItem from './components/TvShowListItem';
import './App.css';
import Logo from './components/Logo';
import logo from "./assets/images/logo.png";
import TvShowList from './components/TvShowList';



function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }
  
  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  // async function fetchByTitle(title) {
  //   const searchResponse = await TVShowAPI.fetchByTitle(title);
  //   if (searchResponse.length > 0) {
  //     setCurrentTVShow(searchResponse[0]);
  //   }
  // }

  return (
    <div className="App" style={{background: currentTVShow
      ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
         url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
      : "black",
      }}>
      <div className='Header'>
        <div className='row'>
          <div className='col-4'>
              <Logo image={logo} title="Watowatch" subtitle="Find a show you may like"/>
          </div>
          <div className='col-sm-12 col-md-4'>
            <input style={{width: "100%"}} type="text"/>
          </div>
        </div>
      </div>
      <div className='Show-details'>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow}/>}
      </div>
      <div className='Recommand'>
      {recommendationList && recommendationList.length > 0 && <TvShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList}/>}
      </div>
      <div className='Footer'>Footer</div>
    </div>
  );
}

export default App;
