import React from 'react';
import SeachBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  render() {
    return <div className="ui container" style={{marginTop: '10px'}}>
      <SeachBar />
      <ImageList />
    </div>
  }
}

    
export default App