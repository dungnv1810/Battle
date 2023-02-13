import React from "react";
import { ContryItemWrapper } from "./style";
const ContryItem = ({item, index}) => {
    const {owner, name, stargazers_count} = item;
    const { avatar_url: avatarUrl, login } = owner;
    return(
        <React.Fragment>
            <ContryItemWrapper>
                <h5>#{index + 1}</h5>
                <ul>
                    <li>
                        <img src={avatarUrl}></img>
                    </li>
                    <li>
                        <a href="#">{name}</a>
                    </li>
                    <li>
                        @{login}
                    </li>
                    <li>
                        {stargazers_count} stars
                    </li>
                </ul>
            </ContryItemWrapper>
        </React.Fragment>
    )
}
export default ContryItem;