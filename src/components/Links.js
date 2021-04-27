import React from 'react'
import LinkForm from './LinkForm.js'

import {db} from '../Firebase.js'


const Links = ()=>{
    const AddorEditLink = async (linkObject) =>{ 
        await db.collection('links').doc().set(linkObject)
        console.log('new task added')
    }

    return (
    <div>
        <LinkForm AddorEditLink = {AddorEditLink}/>
    </div>)
    
}

export default Links