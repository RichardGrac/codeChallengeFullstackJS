import React, {Fragment} from 'react'

import AddListForm from '../../components/molecules/AddListForm'
import Lists from '../../components/organisms/Lists'

const ListsScene = () => {
    return (
        <Fragment>
            <AddListForm/>
            <Lists />
        </Fragment>
    )
}

export default ListsScene
