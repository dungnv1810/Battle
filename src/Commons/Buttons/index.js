import React from "react";
import { ButtonsWrapper } from "./style";
const Buttons = ({name, onClick}) =>{
    return(
        <React.Fragment>
            <ButtonsWrapper onClick={onClick}>
                <a href="http://localhost:3000/popular">{name}</a>
            </ButtonsWrapper>
        </React.Fragment>
    )
}
export default Buttons