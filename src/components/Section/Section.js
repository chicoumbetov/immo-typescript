import { Component } from 'react'
import { Route } from 'react-router-dom'
import Service from '../Service/Service';


export class Section extends Component {

    render() {

        return (
            <section>
                <Route path="/" component={Service} exact />
                
                <Route path="/service/:id" component={Service} exact />
                
            </section>
        )
    }
}

export default Section;