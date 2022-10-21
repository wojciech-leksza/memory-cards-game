import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    margin: 0;
    padding: 20px;
    background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const PageTitle = styled.h1`
    margin: 0;
    font-size: 36px;
    color: ${({ theme: { colors } }) => colors.textPrimary};
`;