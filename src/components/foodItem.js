import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import { Link } from 'react-router-dom';


export class FoodItem extends React.Component {
    
    constructor() {
        super();
        this.DeleteFood = this.DeleteFood.bind(this);


    }

    //finds the object by its id and delets it
    DeleteFood(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/foods/' + this.props.food._id)
            .then(() => {
                this.props.ReloadData();//refresh page
            })
            .catch((err) => {
                console.log(err);
            });
    }



    render() { 
        return (
            
            <>
                <Card style={{ width: '33%', verticalAlign: "middle", margin: 'auto', border: '2px' }}>
                    <Card.Header style={{ color: 'white', backgroundColor: '#A47551' }}><h4>{this.props.food.foodType}</h4></Card.Header>
                    <Card.Body style={{ backgroundImage: 'url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}>
                        <img src={this.props.food.image} width="200" height="200"></img>
                        <Card.Text>
                            <h4>€{this.props.food.price}</h4>
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Click For Options
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item ><Button style={{ backgroundColor: "black" }} /* onClick={} */  value={this.props.food.price} orderPrice={this.orderPrice}>Add To Order</Button></Dropdown.Item>
                                <Dropdown.Item ><Link to={'/edit/' + this.props.food._id} className="btn btn-primary">Edit</Link> </Dropdown.Item>
                                <Dropdown.Item ><Button variant="danger" onClick={this.DeleteFood}>Delete</Button></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Card.Body>
                </Card>
            </>
            
        );
        
    }

}