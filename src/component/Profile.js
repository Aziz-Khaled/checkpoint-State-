import React, { Component } from 'react' ;
import {Card,Button} from 'react-bootstrap' ;
import '../component/Profile.css'



export default class Profile extends Component {

    constructor (props) {
        super (props)
    }

    render() {
        return (
            <div className="profile">
                <Card style={{ width: '500px', border : '1px solid blue'}}>
<Card.Img variant="top" src={this.props.image} />
<Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
        {this.props.description}
    </Card.Text>
    
</Card.Body>
</Card>
            </div>
        )
    }
}
