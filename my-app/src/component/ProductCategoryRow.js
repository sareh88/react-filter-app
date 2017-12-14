import React, { Component } from 'react';
import  {  TableCell, TableRow } from 'material-ui/Table';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	bg:{
		backgroundColor:'#0d847e',
		
	},
	font:{
		fontFamily: 'Pathway Gothic One',
		fontSize:'30px',
		letterSpacing:'4px',
		textAlign : 'center',
	}
})

export class ProductCategoryRow extends Component {
	constructor(props){
		super(props);
		this.state={
			category: props.category
		}

	}
	render() {
	  const {classes}  = this.props;
	
		return (
			<TableRow  className={classes.bg}>
   		  <TableCell colSpan={2} className={classes.font}>{this.state.category}</TableCell>
   		</TableRow> 	
		);
	}
}



ProductCategoryRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

  
    
export default withStyles(styles)(ProductCategoryRow);
  