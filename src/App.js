import './App.css';

function App() {
  return (
    <div className="App">
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
