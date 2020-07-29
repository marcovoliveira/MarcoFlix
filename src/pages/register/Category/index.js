import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function RegisterCategory() {
    
    const defaultValues = {
        name: '',
        description: '',
        color: ''
    }
    
    const [category, setCategory] = useState([]);
    const [values, setValues] = useState(defaultValues)
    
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        })
    }

    function handleChange(event) {
        const eventTarget = event.target;
        setValue(
            eventTarget.getAttribute('name'),
            eventTarget.value
        )
    }
    

    return(
        <PageDefault>
            <h1> Register Category: {values.name}</h1>

                <form onSubmit={function handleSubmit(event) {
                    event.preventDefault();
                    setCategory([
                        ...category,
                        values
                    ])

                    setValues(defaultValues)
                }}>

                <FormField
                    label="Category name"
                    type="text"
                    name="name"
                    tag="input"
                    value={values.name}
                    onChange={handleChange}
                />


                <FormField
                    label="Description"
                    type="text"
                    name="description"
                    tag="textarea"
                    value={values.description}
                    onChange={handleChange}
                />
      
                <FormField
                    label="Color"
                    type="color"
                    name="color"
                    tag="input"
                    value={values.color}
                    onChange={handleChange}
                />

                    <button>
                        Register
                    </button>
                    
                </form>

                <ul>
                    {category.map((category, index) => {
                        return (
                            <li key={`${category}${index}`}>
                                {category.name}
                            </li>
                        )
                    })}
                </ul>


            <Link to="/">
                Back
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory;