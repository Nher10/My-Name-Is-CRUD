import styled from "styled-components";

const FormControl = styled.form`

margin: 10px auto;
width: 100%;
height: 270px;

& div {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
}

& label {
    font-size: 20px;
    color: ${(props) => (props.invalid ? "red" : "black")};
}

& input {
    height: 45px;
    width: 300px;
    font-size: 18px;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ffffff")};
    background: white;
}

& button {
    height: 40px;
    width: 100px;
    /* margin-top: 10px; */
    background-color: rgb(36, 36, 238);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}
    
& button:hover {
    background-color: rgb(54, 54, 233);
}
    
& button:focus {
    box-shadow: 2px 2px 3px rgb(39, 39, 39) inset;
}
` 
export default FormControl