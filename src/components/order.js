import React from 'react'
import { FoodItem } from './foodItem';


export class Order extends React.Component {

    render() {
        //CSS Styles
        const titleEdit = {
            fontSize: "50px", fontWeight: "bold", backgroundColor: "black", fontFamily: "Times New Roman", color: 'white'
        };
        return (
            <>
                <h1 style={titleEdit}>Orders</h1>
            </>
        );

    }
}