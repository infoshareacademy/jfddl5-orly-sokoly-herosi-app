import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
    padding:'20px',
    margin: '20px'
}

const OSHPaper = (props) => (
    <Paper style={styles}>
        {props.children}
    </Paper>
)

export default OSHPaper  