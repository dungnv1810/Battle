import React, {useState, useEffect} from "react";
import 'animate.css';
import Input from "../../Commons/Input";
import { PopularWrapper } from "./style";
const Popular = () => {
    const [listRepo, setListRepo] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [player, setPlayer] = useState({
        playerOne:"",
        playerTwo:""
    });

    
    useEffect(()=>{
        const url = `https://api.github.com/search/repositories?q=stars%3A%3E1%20language&fbclid=IwAR3BDrRwTVb2KFWD80PX88DsRU8eMJBIGP3cch5pelGcYP2txCFa7G3f13U`
        console.log('url-----', url);
        setIsLoading(true)
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            console.log('res-----', res)
            setListRepo(res.items);
            setTimeout(()=>{
                setIsLoading(false)
            },2000)
        })
        .catch((err)=>{
            setIsLoading(false)
        })
    },[setListRepo])

    const handleInputOnchange = (event) =>{
        const {name, value} = event.target;
        const newPlayer = {
            ...player,
            [name]: value
        };
        setPlayer(newPlayer);
        console.log('name-----', name)
    }

    return(
        <React.Fragment>
            <PopularWrapper>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="header animate__animated animate__fadeInLeftBig">Player One</h4>
                            <Input
                                type="text"
                                name="playerOne"
                                placeholder="github uername"
                                onChange={(event)=>handleInputOnchange(event)}
                                value={player.playerOne} 
                            />
                        </div>
                        <div className="col-6">
                            <h4 className="header animate__animated animate__fadeInRightBig">Player Two</h4>
                            <Input
                                type="text"
                                name="playerOne"
                                placeholder="github uername"
                                onChange={(event)=>handleInputOnchange(event)}
                                value={player.playerTwo} 
                            />
                        </div>
                        {isLoading ? (<h1>Loading...</h1>) : (
                            <div className="listrepo">
                                {listRepo.map((item, array, index)=>{
                                    return(
                                        <img/>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </PopularWrapper>
        </React.Fragment>
    )
}
export default Popular;