import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm.js'

import {db} from '../Firebase.js'


const Links = ()=>{

    const [links, setLinks] = useState([])

    const AddorEditLink = async (linkObject) =>{ 
        await db.collection('links').doc()/* .collection('Papeles').doc() */.set(linkObject)
        console.log('new task added')

    }

    const getLinks = async () =>{
        db.collection('links').onSnapshot((querySnapshot)=>{
            const docs =[]
            querySnapshot.forEach( doc =>{
                console.log(doc.data())
                console.log(doc.id)
                docs.push({...doc.data(), id:doc.id})
            })
            setLinks(docs)
            console.log(docs)
        });
        
    }

    useEffect(()=>{
        console.log('obteniendo datos')
        getLinks();
    },[])


    const onDeleteLink = async (id)=>{
        if (window.confirm('Are you sure you want to delete this?')) {
            console.log(id)
            await db.collection('links').doc(id).delete();
            console.log('task deleted')
        }
        
    }

    return (
    <div>
        <div className="mb-2">
            <LinkForm AddorEditLink = {AddorEditLink}/>
        </div>
        
        <div className="col-md-8">
            {links.map(link =>(
                <div className="card mb-1" key={link.id}>
                    <div  className="card-body" >
                        <div className="d-flex justify-content-between">
                            <h4>{link.name}</h4>
                            <i className="material-icons text-danger" onClick={()=> onDeleteLink(link.id)}>close</i>
                        </div>
                        
                        <p>{link.description}</p>
                        <a href={link.url} target="_blank" rel="noreferrer">Go to website</a>
                    </div>
                </div>
            ))}
        </div>
    </div>)
    
}

export default Links