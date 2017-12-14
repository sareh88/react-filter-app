import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';



const styles = theme => ({
root:{
	width:'100%',
  margin:' 10px auto',
  
  
},
table: {
    border:'1px black solid',
    borderCollapse : 'separate',
  },
color:{
	color:'#23220d',
	fontSize:'19px',
	fontFamily:'Rajdhani',
}
})



export  class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			products:props.products
		}
 
	}
	render() {
		const onSearch = this.props.filterSearch;
		const onCheck = this.props.inStock;
		const rows=[];
		let lastCategory = null;
		this.state.products.forEach((product) => {
			if(product.name.indexOf(onSearch) === -1){
				return;
			};
			if(onCheck && !product.stocked){
				return;
			}


		  if (product.category !== lastCategory) {
		    rows.push(
		      <ProductCategoryRow
		        category={product.category}
		        key={product.category} />
		    );
		  }

		  rows.push(
		    <ProductRow
		      product={product}
		      key={product.name} />
		  );
		  lastCategory = product.category;
		});

		const {classes} = this.props;
		return (
				<Paper className={classes.root}>
				     <Table className={classes.table}>
				       <TableHead>
				         <TableRow>
				           <TableCell className={classes.color}>Name</TableCell>
				           <TableCell className={classes.color} numeric>Price</TableCell>
				         </TableRow>
				       </TableHead>
				       <TableBody>
				       		{rows}
				       </TableBody>
				     </Table>
				</Paper>
		);
	}
} 


 Products.propTypes = {
 	 classes: PropTypes.object.isRequired,
 } 

export default withStyles(styles)(Products)    