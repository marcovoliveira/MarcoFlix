import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function RegisterCategory() {
    return(
        <PageDefault>
            <h1> Register Category </h1>

                <form>
                    <label>
                        Category name: 
                        <input type="text"/>
                    </label>

                    <button>
                        Register
                    </button>
                </form>


            <Link to="/">
                Back
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory;