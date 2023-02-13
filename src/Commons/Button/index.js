import React from "react";
import PropStyles from "prop-types"
import { ButtonWrapper } from "./style";
const Button = (props) => {
    const item = props
    const {name, onClick} = item;
    return(
        <React.Fragment>
            <ButtonWrapper onClick={onClick}>
                <a href="#">{name}</a>
            </ButtonWrapper>
        </React.Fragment>
    )
}

Button.prototype={
    name: PropStyles.string.isRequired,
    onClick: PropStyles.func.isRequired
}
export default Button;