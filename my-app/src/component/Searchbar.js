import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';


const styles = theme => ({
  searchBox: {
    maxWidth: 200,
    width: 400,
    margin:'15px 0 15px auto'

  },
  block:{
    display:'block'
  },
  heading:{
    color:'black',
    fontSize:'40px',
    letterSpacing:'4px',
    fontFamily: 'EB Garamond',
  },
  checkbox: {
    margin:'20px 5px 10px 43px',

  },
  container: {
     display: 'inline',
     flexWrap: 'wrap',
   }
   
});


export  class Searchbar extends Component {
  
  
 handleTextChange(e){
  this.props.onFilterTextChange(e.target.value)
 }

  handleStockChange(e){
    this.props.onStockChange(e.target.checked)
  }

	render() {
		const  {classes}  = this.props;
		return (
			<FormControl >
        <FormLabel className={classes.heading}>Products Cataloge</FormLabel>
        <FormGroup>
        <FormControlLabel
          control={
             <TextField
			         id="search"
			         
			         type="search"
			         
			         margin="normal"
               onChange={this.handleTextChange.bind(this)}
               className={classes.searchBox}
			       />
			       
          }
          label='Search your Product'
          className={classes.block}
        />
          <FormControlLabel
            control={
              <Checkbox
                className={classes.checkbox}
                onChange={this.handleStockChange.bind(this)}
              
              />
            }
            label="only show products in stock"
          />
        </FormGroup>
        </FormControl>
		);
	}
}

Searchbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searchbar);
         