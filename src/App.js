import React from 'react'
import Table from './Table'

class App extends React.Component {
    state = {
        people: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    };

    render() {

        const { people } = this.state;

        return (
            /* pass the data through tyhe child component(Table) with properties */
            <div className="container">

                <Table peopleData={people} />
            </div>
        )
    }
}

export default App