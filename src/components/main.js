import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'


export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };      
    }

    //when method called closes the modal
    close = () => this.setState({
        show: false
    })
    render() {
         //CSS Styles
        const modalText = {
            textAlign: "center",
            color: "white",
            border: "3px solid black",
            fontFamily: "Times New Roman"
        };
        const carouselText = {
            color: "black",
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: "Times New Roman"
        }

        const modalBodyText = {
            height: "400px", 
            backgroundColor: "black", 
            textAlign: "center", 
            color: "black", 
            fontFamily: "Georgia", 
            fontSize: "30px", 
            fontWeight: "bold",
            backgroundImage: "url(https://images.unsplash.com/photo-1533035350251-aa8b8e208d95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)"
        }

        /* if show is true show the modal, if its false close the modal and only show carousel*/
        if (this.state.show == true) {
            return (
                <div>
                    <Modal  show={this.state.show} onHide={() => this.setState(this.close)}>
                        <Modal.Header style={{backgroundColor: "black"}} closeButton>
                            <Modal.Title style={modalText}>Welcome To Kacpers Restaurant</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={modalBodyText} closeButton>Welcome to our 5 Star Restaurant! <br></br> Please Use The Buttons Below to Navigate Through the restaurant Menu and Your Orders. <br></br> Enjoy Your Time at Kacpers Restaurant.</Modal.Body>
                        
                        <Button variant="secondary" href="/specials">
                                Specials
                        </Button>
                        <Button variant="secondary" href="/menu">
                                Menu
                        </Button>
                        <Button variant="secondary" href="/orders">
                                Order
                        </Button>
                        <Button variant="secondary" onClick={() => this.setState(this.close)}>
                                Close
                        </Button>
                        <Modal.Footer style={{backgroundColor: "black"}}>
                        </Modal.Footer>
                    </Modal>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption style={carouselText}>
                                <h1>Le Steak Dinner</h1>
                                <p>Delightful Steak Dinner.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption style={carouselText}>
                                <h1>Le Cheese Pizza</h1>
                                <p>OutDoor Stone Baked Pizza.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption style={carouselText}>
                                <h1>Le Fillet</h1>
                                <p>The Finest Wagyu Fillet Steak.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            );
        }
        else {
            return (
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption style={carouselText}>
                                <h1>Le Steak Dinner</h1>
                                <p>Delightful Steak Dinner.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_960_720.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption style={carouselText}>
                                <h1>Le Cheese Pizza</h1>
                                <p>OutDoor Stone Baked Pizza.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                height="890px"
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption style={carouselText}>
                                <h1>Le Fillet</h1>
                                <p>The Finest Wagyu Fillet Steak.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            );
        }
    }
}