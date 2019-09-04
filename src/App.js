import React from 'react';

import CardList from "./components/card-list/CardList.component";
import Scroll from "./components/scroll/scroll.component";
import SearchBox from "./components/search-box/SearchBox.component";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    handleChange = event => {
        this.setState({ searchField: event.target.value })
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredCats = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !filteredCats.length ?
            <h1 className='f1 white-90 tc'>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1 white-90">CatFriends</h1>
                    <SearchBox handleChange={this.handleChange} />
                    <Scroll>
                        <CardList robots={ filteredCats } />
                    </Scroll>
                </div>
            );
    }
}

export default App;
