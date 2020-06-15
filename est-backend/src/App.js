import React from 'react';
import './App.css';
// import DisplayEstablishments from './components/DisplayEstablishments'
import DisplayRatings from './components/DisplayRatings';
import CreateRating from './components/CreateRating';
import { withAuthenticator } from 'aws-amplify-react';

function App() {
  return (
    <div className="App">
        {/* <DisplayEstablishments /> */}
        <CreateRating />
        
        <DisplayRatings />
    </div>
  );
}

export default withAuthenticator(App,
  {includeGreetings: true}
  );
