import React from 'react'
import { SpecialItem } from './specialItem'


export class SpecialFood extends React.Component {

    render() {   
        return this.props.foods.map( (food) => {
            return <SpecialItem food={food} ReloadData={this.props.ReloadData}></SpecialItem>
        })
    }
}