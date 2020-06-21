import React from 'react';

class SeachBar extends React.Component {

    state = { term : ''}
    
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state.term)
        
    }
    render() {
        return (<div>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                        value ={this.state.term}
                        autoComplete="off"
                        onChange={(e)=> this.setState({term : e.target.value})} name="searchText" placeholder="First Name" />
                </div>
            </form>
        </div>
        )
    }
}


export default SeachBar