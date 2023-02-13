import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons"

import React, {useState, useEffect} from "react";

import Button from "../../Commons/Button";
import ContryItem from "./ContryItem";
import { BattleWrapper } from "./style";
const listButton = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'Java'
    },
    {
        id: 4,
        name: 'Ruby'
    },
    {
        id: 5,
        name: 'Css'
    },
    {
        id: 6,
        name: 'Python'
    }
];
const Battle = (props) => {
    const [btnSelect, setBtnSelect] = useState(listButton[0]);
    const [isLoading, setIsLoading] =useState(false)
    const [listRepo, setListRepo] = useState([]);
    const url ="https://api.github.com/search/repositories?q=stars:%3E1+language:Javascript&sort=stars&order=desc&type=Repositories";
    
    const getUrl = (language) => {
        return `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
    }
    useEffect(() => {
        const currentLanguage = btnSelect.name
        const URL = getUrl(currentLanguage)
        setIsLoading(true)
        fetch(URL)
        .then(res => res.json())
        .then(res => {
            setListRepo(res.items)
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
        })
    },[btnSelect]);

    const handleOnclickButton = (item) => {
        setBtnSelect(item)
    }
    
    return(
        <React.Fragment>
            <BattleWrapper>
                <div className="container">
                    {listButton.map((item, index)=>{
                        return(
                            <Button 
                                key={item.id}
                                name={item.name}
                                onClick={() => handleOnclickButton(item)} 
                            />
                        )
                    })}
                    <div className="listrepo">
                        {isLoading ? (
                            <h1>Loading...<Spin indicator={<LoadingOutlined style={{ fontSize: 50}}/>}/></h1>
                        ) : (
                            <div className="list">
                                {
                                    listRepo.map((item, index) => {
                                        return(
                                            <ContryItem item={item} index={index} key={item.id}/>
                                        )
                                    })
                                }
                            </div>
                        )}  
                    </div>
                </div>
            </BattleWrapper>
        </React.Fragment>
    )
}
export default Battle;