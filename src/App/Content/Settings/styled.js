import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.secondary}; 
    border-radius: 0 0 5px 5px;
    padding: 20px 40px;
`;

export const Option = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const OptionName = styled.p`
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 24px;
    align-self: center;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const OptionButton = styled.button`
    background-color: ${({ active }) => active
        ? ({ theme: { colors } }) => colors.primary
        : ({ theme: { colors } }) => colors.textPrimary
    };
    color: ${({ active }) => active
        ? ({ theme: { colors } }) => colors.textPrimary
        : ({ theme: { colors } }) => colors.primary
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
`;