import React from 'react'
import TextField from 'material-ui/TextField'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

const Search = (props) => (
<div>
    <TextField
        className={'ours-surveys__searcher-form'}
        fullWidth={true}
        hintText="Find the survey"
        value={props.searchValue}
        onChange={props.onChangeSearchValue}
    />
    <Range 
        min={props.oldestSurveyTimestamp}
        max={Date.now()}
        defaultValue={[props.oldestSurveyTimestamp,Date.now()]}
        onChange={console.log}
        allowCross={false}
    />
</div>
)


export default Search