import React from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Category from './Category'

import 'rc-slider/assets/index.css'
import moment from 'moment'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const Search = (props) => (
    <div>
        <TextField
            className={'ours-surveys__searcher-form'}
            fullWidth={true}
            hintText="Find the survey"
            value={props.searchValue}
            onChange={props.onChangeSearchValue}
        />
        <Category
            onCategoryChangeHandler={props.onCategoryChangeHandler}
            currentCategory={props.currentCategory}
        />
        <Range
            min={props.oldestSurveyTimestamp}
            max={Date.now()}
            defaultValue={[props.oldestSurveyTimestamp, Date.now()]}
            onChange={props.onChangeRangeArrayHandler}
            allowCross={false}
            tipFormatter={value => `${moment(value).format('LL')}`}
        />
    </div>
)


export default Search