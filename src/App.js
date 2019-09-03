import React from 'react';

import CardList from "./components/card-list/CardList.component";

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
        return !robots.length ?
            <h1 className='f1 white-90 tc'>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1 white-90">CatFriends</h1>
                    <CardList robots={ robots } />
                </div>
            );
    }
}

export default App;
