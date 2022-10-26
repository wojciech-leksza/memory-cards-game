import styled from "styled-components";

export const Container = styled.button`
    aspect-ratio: 1;
    border-radius: 5px;
    background-color: ${props => (props.checked ? "#aaa" : "#888")};
    filter: blur(${props => (props.matched ? "5px" : "0")});
`;
export const Picture = styled.img`
    width: 90%;
    margin: auto;
    display: ${({ checked, matched }) => (checked || matched ? "" : "none")};
`;