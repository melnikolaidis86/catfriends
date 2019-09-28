import React from 'react';
import { connect } from 'react-redux';

import CardList from "../components/card-list/CardList.component";
import Scroll from "../components/scroll/scroll.component";
import SearchBox from "../components/search-box/SearchBox.component";
import ErrorBoundary from "../components/error-boundaries/ErrorBoundary";

import {setSearchField, requestRobots} from "../redux/actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const { onSearchChange, searchField, robots, isPending } = this.props;
        const filteredCats = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
                <div className="tc">
                    <h1 className="f1 white-90">CatFriends</h1>
                    <SearchBox handleChange={ onSearchChange } />
                    <Scroll>
                        {
                            isPending ?
                                <h1 className='f1 white-90 tc'>Loading</h1> :
                                <ErrorBoundary>
                                    <CardList robots={ filteredCats } />
                                </ErrorBoundary>
                        }
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
