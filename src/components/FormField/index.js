import React from 'react'


function FormField({label, type, name, tag, value, onChange}) {
    const TagName = tag;
    return (
        <div>
            <label>
                {label}: 
                <TagName 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}    
                />
            </label>
        </div>
    )
}


export default FormField;