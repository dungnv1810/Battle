import React from "react";
import 'animate.css';
import { HomeWrapper } from "./style";
const Home = (props) => {
    console.log('props === ', props)
    const handleRedirectToAbout = () => {
        const { history } = props;
        history.push("/battle");
    }
    return(
        <React.Fragment>
            <HomeWrapper>
                <div className="container text-center">
                    <h2 className="text animate__animated animate__fadeInDown">
                        Github Home: Home your friends... and stuff.
                    </h2>
                    <form>
                        <button type="Submit" className="btn btn-dark" onClick={handleRedirectToAbout}>
                            Battle
                        </button>
                    </form>
                </div>
            </HomeWrapper>
        </React.Fragment>
    )
}
export default Home;