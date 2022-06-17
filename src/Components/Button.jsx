import styled from 'styled-components';


const Button = styled.button`
   padding: 10px;
   color : ${props => props.color};;
   border:  ${({ border }) => (border === "dashed" ? "1px dashed #cecece" : border === "solid" ? "1px solid #cecece":"none")};
   margin-left: 20px;
   background-color: ${({ bg }) => (bg === "blue" ? "blue" : "white")};
   border-radius : 4px;
   cursor: pointer;
`;

export default Button;