import React from "react";

import { InputWrapper } from "./style";
const Input = ({name, type, placeholder, onChange, value, title}) =>{
    return(
        <React.Fragment>
            <InputWrapper>
                <form className="column" action="#" method="get">
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                    /><br/>
                    <button type="Submit" className="btn btn-dark">Submit</button>
                </form>
            </InputWrapper>
        </React.Fragment>
    )
}
export default Input;