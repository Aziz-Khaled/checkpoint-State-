import React, { Component } from 'react'
import Profile from './Profile'
import '../component/Profile.css' ;
import {Button} from 'react-bootstrap'


export default class ProfileParent extends Component {
constructor(props) {
    super(props)
        
    this.state = {

        name :'Aziz' ,
        description :'freelancer , ...' ,
        image : 'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/120515645_3756227921096086_7039347728850345536_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QOI3tvR7hagAX9YjnG0&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-CFYCwq05TQIpUQl6b3fwWM6f9JJAblJ6nXGH3KZfhAw&oe=61E7363A' ,
        Show : false
    }
}

toggle =() => {
    this.setState({show: !this.state.show}) 
}





    render() {
        return (
            <div>
                <h1 className="title">Workshop session</h1>
                <Button variant="success" onClick={ () => this.toggle ()}> {this.state.show ? 'click to hide' : 'click to show'}</Button>
                {this.state.show ?<Profile name ={this.state.name} description ={this.state.description} image ={this.state.image}/> : null }
                
            </div>
        )
    }
}
