import axios from 'axios';
import React from 'react'
import { SpecialFood } from './specialFood';
import { Row } from 'react-bootstrap';
export class Special extends React.Component {


    state = {
        foods: []
    }


    //this gets called when special gets active
    componentDidMount() {
        //gets data from server and sotres into into foods array
        axios.get('http://localhost:4000/api/foods')
            .then((response) => {
                this.setState({ foods: response.data })
            })
            .catch((error) => {
                console.log(error)
            });




    }

    //methods allows the page to refresh
    ReloadData() {
        axios.get('http://localhost:4000/api/foods')
            .then((response) => {
                this.setState({ foods: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        //CSS Styles
        const titleEdit = {
            fontSize: "50px", fontWeight: "bold", backgroundColor: "black", fontFamily: "Times New Roman", color: 'white'
        };
        return (
            <div style={{backgroundColor: 'black'}}>
                <h1 style={titleEdit}>Specials</h1>
                <Row><SpecialFood foods={this.state.foods} ReloadData={this.ReloadData}></SpecialFood> </Row>
            </div>
        );

    }
}