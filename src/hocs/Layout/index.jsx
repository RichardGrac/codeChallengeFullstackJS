import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const Layout = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='md' style={{padding: '2% 2% 3% 0'}}>
                {props.children}
            </Container>
        </React.Fragment>
    )
}

export default Layout
