import React from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';

import { setClosedAction } from '../state/snackBar'

const SnackBar = (props) => (
    <div>
        <Snackbar
            open={props._isSnackBarOpen}
            message={props._snackBarMessage}
            autoHideDuration={4000}
            onRequestClose={props._setClosedAction}
        />
    </div>
)

const mapStateToProps = state => ({
    _isSnackBarOpen: state.snackBar.isSnackBarOpen,
    _snackBarMessage: state.snackBar.message
})

const mapDispatchToProps = dispatch => ({
    _setClosedAction: () => dispatch(setClosedAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SnackBar)

