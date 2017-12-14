import React, { Component } from 'react';
import{TableCell, TableRow } from 'material-ui/Table';

export default class ProductRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			product: props.product
		}

	}


	render() {
		const name = this.state.product.stocked ? this.state.product.name : <span style={{color:'red'}}>{this.state.product.name}</span>
		return (
			<TableRow>
       <TableCell>{name}</TableCell>
       <TableCell numeric>{this.state.product.price}</TableCell>
     </TableRow>
		);
	}
}
