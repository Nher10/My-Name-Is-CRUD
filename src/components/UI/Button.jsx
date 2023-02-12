import styled from "styled-components";

const Button = styled.button `


height: 40px;
width: 100px;
background-color: rgb(36, 36, 238);
border: none;
border-radius: 10px;
color: white;
cursor: pointer;

    
&:hover {
    background-color: rgb(54, 54, 233);
}
    
&:focus {
    box-shadow: 2px 2px 3px rgb(39, 39, 39) inset;
}
`
export default Button