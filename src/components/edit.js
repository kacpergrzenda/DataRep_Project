import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        //binds variables
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            special: '',
            foodType: '',
            price: '',
            image: ''
        }
    }

    //this gets called when edit gets active
    componentDidMount() {

        //pulls out id of the document and sets the data 
        axios.get('http://localhost:4000/api/foods/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    special: response.data.special,
                    foodType: response.data.foodType,
                    price: response.data.price,
                    image: response.data.image,
                    _id: response.data._id
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

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

    //sets input value into the value of the State variable 
    onChangeSpecial(e) {
        this.setState({
            special: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Food: " + this.state.foodType + " " + this.state.price + " " + this.state.image)

        const newFood = {
            foodType: this.state.foodType,
            price: this.state.price,
            image: this.state.image
        }

        axios.put('http://localhost:4000/api/foods/' + this.state._id, newFood)
            .then((xyz) => {
                console.log(xyz);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Food Type: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.foodType}
                            onChange={this.onChangeFood}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Special: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.special}
                            onChange={this.onChangeSpecial}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.price}
                            onChange={this.onChangePrice}></input>
                    </div>
                    <div className='form-group'>
                        <label>Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Edit Food'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}