import styled from "styled-components";
export const ContryItemWrapper = styled.div`
    width: 200px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h5{
        margin: 10px;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    img{
        width: 80%;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 3px;
    }
    a{
        text-decoration: none;
        color: #D0021B;
    }
`;