import { TVShowAPI } from './Api/tv-show';
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetails from "./components/TVShowDetails";
import './App.css';
import Logo from './components/Logo';
import logo from "./assets/images/logo.png";
import TvShowList from './components/TvShowList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';



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
  try {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  } catch (error) {
    alert("Erreur durant la recherche des séries populaires")
  }
  }
  
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0) {
      setRecommendationList(recommendationListResp.slice(0, 10));
    } 
    } catch (error) {
      alert("Erreur durant la recherche des séries recommandées")
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
    } catch (error) {
      alert("Erreur durant la recherche de la série")
    }
  }

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
            <SearchBar onSubmit={fetchByTitle}/>
          </div>
        </div>
      </div>
      <div className='Show-details'>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow}/>}
      </div>
      <div className='Recommand'>
      {recommendationList && recommendationList.length > 0 && <TvShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList}/>}
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
