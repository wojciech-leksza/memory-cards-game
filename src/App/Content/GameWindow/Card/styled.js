import styled from "styled-components";

export const Container = styled.button`
    aspect-ratio: 1;
    border: none;
    border-radius: 5px;
    background-color: ${({ checked, matched }) => (checked || matched
        ? ({ theme: { colors } }) => colors.primary
        : ({ theme: { colors } }) => colors.secondary
    )};
    filter: blur(${props => (props.matched ? "5px" : "0")});
`;
export const Picture = styled.img`
    width: 90%;
    margin: auto;
    display: ${({ checked, matched }) => (checked || matched ? "" : "none")};
`;