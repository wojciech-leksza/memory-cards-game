import styled from "styled-components";

export const Container = styled.button`
    aspect-ratio: 1;
    border: ${props => (props.checked ? "solid 10px #000" : "none")};
    border-radius: 5px;
    background-color: ${props => (props.matched ? "#888" : "#fff")};
`;
export const Picture = styled.img`
    width: 60%;
    margin: auto;
    display: ${({ checked, matched }) => (checked || matched ? "" : "none")};
`;