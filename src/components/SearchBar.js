import React from 'react';

class SeachBar extends React.Component {

    state = { term : ''}
    
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                        value ={this.state.term}
                        onChange={(e)=> this.setState({term : e.target.value})} name="searchText" placeholder="First Name" />
                </div>

                {this.state.term}

                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}


export default SeachBar