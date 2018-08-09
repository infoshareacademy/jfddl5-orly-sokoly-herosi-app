import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Category extends Component {
    render() {
        return (
            <div>
                <SelectField
                    fullWidth={true}
                    floatingLabelText="Survey category"
                    value={this.props.currentCategory}
                    onChange={this.props.onCategoryChangeHandler}
                >
                    <MenuItem value={"People"} primaryText="People" />
                    <MenuItem value={"Research"} primaryText="Research" />
                    <MenuItem value={"Alkohols"} primaryText="Alkohols" />
                    <MenuItem value={"Hobby"} primaryText="Hobby" />
                    <MenuItem value={"Work"} primaryText="Work" />
                </SelectField>
            </div>
        )
    }
}
export default Category