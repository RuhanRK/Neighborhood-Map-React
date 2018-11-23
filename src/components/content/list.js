import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class List extends Component{
    state = {
        openSidebar: false
    }

    toggleClick = () => {
        this.setState((prevState) => {
            return{
                openSidebar: !prevState.openSidebar
            }
        })
    }

    backdropClick = () => {
        this.setState({openSidebar: false})
    }


    render(){
        let {locations, showInfo, query, inputChange} = this.props;
        let classNam = 'side-drawer';
        if(this.state.openSidebar){
            classNam = 'side-drawer open'
        }

        return(
            <div className="List">
            <button tabIndex={0} onClick={this.toggleClick} className="icon"><i className="fas fa-search-location"></i></button>
            <div className={classNam}>
                <h4 tabIndex={0}>Nearest Food Cart</h4>
                <div className="filter">
                    <label htmlFor="filter-input" className="search-accs">Search Location</label>
                    <input tabIndex={0} type="text" id="filter-input" className="query" placeholder="Search Your Favorite Location" value={query} onChange={e => inputChange(e.target.value)}/>
                    <span tabIndex={0} className="close" onClick={this.backdropClick}><i className="fas fa-times"></i><span className="close-acs">Close</span></span>
                </div>
                <ol aria-label = 'List of Restaurant'>
                    {locations.map(loc =>(
                        <li 
                            className="listItem title" 
                            tabIndex={0}
                            role="button"
                            key={loc.venue.id}
                            onClick={() => {showInfo(loc)}}>
                            {loc.venue.name}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        )
    }
};

List.propTypes = {
    locations: PropTypes.array.isRequired,
    inputChange: PropTypes.func.isRequired,
    showInfo: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}