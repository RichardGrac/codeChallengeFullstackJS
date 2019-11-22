import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getLists} from '../../../services/redux/lists/actions/lists'

import CList from '../../molecules/CList'
import Grid from '@material-ui/core/Grid'

const Lists = (props) => {
    useEffect(() => {
        getLists()
    }, [])

    const { getLists } = props

    let listsContent
    if (props.lists && props.lists.length > 0) {
        listsContent = props.lists.map((list, i) => (
            <CList list={list}
                   key={`CList-0${i}-${list.name}-${new Date().getMilliseconds()}`}
            />
        ))
    } else listsContent = (<h2 style={{color: 'white'}}>Loading...</h2>)

    return (
        <Grid container spacing={0}>
            {listsContent}
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getLists
    }, dispatch)
}

const mapStateToProps = state => {
    return {
        lists: state.listsReducer.lists
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
