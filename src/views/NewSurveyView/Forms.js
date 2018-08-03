import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import PaperRefined from '../../components/PaperRefined'


const Forms = (props) => (
    <PaperRefined>
        <TextField
            type={'text'}
            value={props.newTaskText}
            fullWidth={true}
            onChange={props.onNewTaskTextChanged}
        />
        <RaisedButton
            label={'Dodaj'}
            primary={true}
            fullWidth={true}
            onClick={props.onAddNewTaskClickHandler}
        />
    </PaperRefined>
)

export default Forms
