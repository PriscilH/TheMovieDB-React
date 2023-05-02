import { TVShowAPI } from './Api/tv-show';
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import './App.css';


function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  // console.log(currentTVShow)
  

  return (
    <div className="App" style={{background: currentTVShow
      ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
         url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
      : "black",}}>
      <div className='Header'>
        <div className='row'>
          <div className='col-4'>
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className='col-sm-12 col-md-4'>
            <input style={{width: "100%"}} type="text"/>
          </div>
        </div>
      </div>
      <div className='Show-details'>Details</div>
      <div className='Recommand'>Recommandations</div>
      <div className='Footer'>Footer</div>
    </div>
  );
}

export default App;
