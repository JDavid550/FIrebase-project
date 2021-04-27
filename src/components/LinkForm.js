import React, {useState} from 'react'


const LinkForm = (props)=>{

    const initialStateValues = {
        url:'',
        name: '',
        description:''
    }

    const [values, setValues]=useState({initialStateValues})

    const handleSubmit = e =>{
        e.preventDefault();
        props.AddorEditLink(values)
        setValues({...initialStateValues})
    }

    const handleInputChange = e =>{
        const {name, value} = e.target
        console.log(e.target.value)
        setValues({...values, [name]: value})
        
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                type="text" 
                className="form-control" 
                placeholder="https://url.com" 
                name="url"
                onChange={handleInputChange}
                value={values.url}/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" 
                className="form-control" 
                placeholder="Website name" 
                name="name" 
                onChange={handleInputChange}
                value={values.name}/>
            </div>

            <div className="form-group">
                <textarea 
                name="description" 
                id="" cols="30" 
                rows="3" 
                className="form-control" 
                placeholder="description" 
                onChange={handleInputChange}
                value={values.description}
                >

                </textarea>
            </div>

            <button className="btn btn-primary">Save</button>  

        </form>
    )
}

export default LinkForm