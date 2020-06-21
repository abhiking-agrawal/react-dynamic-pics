import React from 'react';
import SeachBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios'

class App extends React.Component {

  state = { listImages : []}
  onSearchSubmit = (term) => {
    console.log(term)

    axios.get('https://api.unsplash.com/search/photos',{
      params : {query : term},
      headers : {
        Authorization : 'Client-ID wapRkNX1VSDetew4WoFQFJCADFwYC1Y1G0h1_7YqhdM'
      }
      
    }).then((res)=>{
      this.setState({listImages : res.data.results})
    })
  }
  render() {
    return <div className="ui container" style={{marginTop: '10px'}}>
      <SeachBar onSubmit={this.onSearchSubmit} />
      Found : {this.state.listImages.length}
      <ImageList images={this.state.listImages} />
    </div>
  }
}

    
export default App