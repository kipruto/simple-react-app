import React from 'react'
import Table from './Table'

class App extends React.Component {

    render() {

        /* Bring the data here as an array of objects */
        const people = [
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
        ]

        return (
            /* pass the data through tyhe child component(Table) with properties */
            <div className="container">

                <Table peopleData={people} />
            </div>
        )
    }
}

export default App