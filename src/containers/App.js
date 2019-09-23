import React from 'react';
import { connect } from 'react-redux';

import CardList from "../components/card-list/CardList.component";
import Scroll from "../components/scroll/scroll.component";
import SearchBox from "../components/search-box/SearchBox.component";

import {setSearchField} from "../redux/actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    }
};

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }


    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredCats = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !filteredCats.length ?
            <h1 className='f1 white-90 tc'>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1 white-90">CatFriends</h1>
                    <SearchBox handleChange={ onSearchChange } />
                    <Scroll>
                        <CardList robots={ filteredCats } />
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
