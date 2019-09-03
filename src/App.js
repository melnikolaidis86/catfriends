import React from 'react';

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
                <div className="App">
                    {
                        robots.map(robot => {
                            return <h1 key={robot.id}>{robot.name}</h1>
                        })
                    }
                </div>
            );
    }
}

export default App;
