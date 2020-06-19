import React from 'react';

class SeachBar extends React.Component {

    onInputeChange(event){
        console.log(event.target.value)
    }

    render() {
        return (<div>
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" onChange={this.onInputeChange} name="searchText" placeholder="First Name" />
                </div>

                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}


export default SeachBar