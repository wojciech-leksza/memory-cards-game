import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary}; 
    border-radius: 0 0 5px 5px;
    padding: 20px 40px;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        padding: 10px;
    };
`;

export const Option = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        flex-direction: column;
        gap: 16px;
    };
`;

export const OptionName = styled.p`
    color: ${({ theme: { colors } }) => colors.textSecondary};
    font-size: 24px;
    align-self: center;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        align-self: flex-start;
        font-size: 16px;
    };
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        gap: 8px;
    };
`;

export const OptionButton = styled.button`
    background-color: ${({ active }) => active
        ? ({ theme: { colors } }) => colors.special
        : ({ theme: { colors } }) => colors.primary
    };
    color: ${({ active }) => active
        ? ({ theme: { colors } }) => colors.textSecondary
        : ({ theme: { colors } }) => colors.textPrimary
    };
    font-size: 20px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        filter: brightness(1);
        box-shadow: inset 2px 2px 4px 0px #333;
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.mobileMax}) {
        font-size: 14px;
        padding: 10px 15px 5px;
    };
`;