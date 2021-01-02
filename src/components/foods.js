import React from 'react'
import { FoodItem } from './foodItem'


export class Foods extends React.Component {

    render() {   
        return this.props.foods.map( (food) => {
            return <FoodItem food={food} ReloadData={this.props.ReloadData}></FoodItem>
        })
    }
}