import React from 'react'
import { Foods } from './foods';
import axios from 'axios';
import { ModalFooter, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export class Menu extends React.Component {
    constructor() {
        super();

        //binds variables
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        foods: [],
        show: false,
        foodType: '',
        price: '',
        image: '',
        admin: false,
        orderPrice: 0
    };

    //sets input value into the value of the State variable 
    onChangeFood(e) {
        this.setState({
            foodType: e.target.value
        })
    }

    //sets input value into the value of the State variable 
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    //sets input value into the value of the State variable 
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.ReloadData();//refresh page
        const newFood = {
            foodType: this.state.foodType,
            price: this.state.price,
            image: this.state.image
        }
        axios.post('http://localhost:4000/api/foods', newFood)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    //this gets called when menu gets active
    componentDidMount() {
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

    //when method called closes tab
    close = () => this.setState({
        show: false
    })

    //when method called opens tab 
    open = () => this.setState({
        show: true
    })

    render() {
        //CSS Styles
        const titleEdit = {
            fontSize: "50px", fontWeight: "bold", backgroundColor: "black", fontFamily: "Times New Roman", color: 'white'
        };
        const modalText = {
            textAlign: "center",
            color: "white",
            border: "3px solid black",
            fontFamily: "Times New Roman"
        };
        const modalBodyText = {
            height: "400px",
            backgroundColor: "black",
            textAlign: "center",
            color: "black",
            fontFamily: "Georgia",
            fontSize: "30px",
            fontWeight: "bold",
            backgroundImage: "url(https://images.unsplash.com/photo-1533035350251-aa8b8e208d95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)"
        };
        
        return (
            <>
                <h1 style={titleEdit}> The Food Menu  <Button style={{ backgroundColor: "black" }} onClick={() => this.setState(this.open)}>Add New Food To Menu</Button></h1>
                <Modal show={this.state.show} onHide={() => this.setState(this.close)}>
                    <Modal.Header style={{ backgroundColor: "black" }} closeButton>
                        <Modal.Title style={modalText}>Welcome To Kacpers Restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={modalBodyText} closeButton>
                        <div className='App'>
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <label>Add New Food</label>
                                    <input type='text' className='form-control' value={this.state.foodType} onChange={this.onChangeFood}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Add Food Price</label>
                                    <input type='text' className='form-control' value={this.state.price} onChange={this.onChangePrice}></input>
                                </div>
                                <div className='form-group'>
                                    <label>Add Food Image</label>
                                    <input type='text' className='form-control' value={this.state.image} onChange={this.onChangeImage}></input>
                                </div>
                                <div className='form-group'>
                                    <input type='submit'
                                        value='Add Food'
                                        className='btn btn-primary'
                                        onClick={this.ReloadData}></input>
                                </div>
                            </form>
                        </div>

                    </Modal.Body>
                    

                </Modal>
                <Row><Foods foods={this.state.foods} ReloadData={this.ReloadData}></Foods> </Row>

            </>
        );
    }
}
