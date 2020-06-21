import React from 'react';

class ImageList extends React.Component {

  render() {
    let images = this.props.images.map( i =>{
      return  <img key={i.id} src={i.urls.regular} alt={i.urls.regular} />
    })
    return <div>{images}</div>
  }
}

    
export default ImageList