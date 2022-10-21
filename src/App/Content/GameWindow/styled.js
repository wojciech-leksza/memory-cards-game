import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 8px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.primary}; 
`;