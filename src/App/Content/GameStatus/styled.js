import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    border-radius: 5px 5px 0 0;
`;

export const Parameter = styled.p`
    margin: 20px 40px;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 24px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        font-size: 16px;
        margin: 10px;
    };
`;