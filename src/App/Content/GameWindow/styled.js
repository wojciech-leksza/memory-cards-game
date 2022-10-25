import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    position: relative;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 8px;
    padding: 8px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.primary}; 
`;
export const Overlay = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
`;

export const StartButton = styled.button`
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 36px;
    padding: 5% 10%;
    margin: auto;
    
    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        filter: brightness(1);
        box-shadow: inset 4px 4px 11px 0px #333;
    }
`;

export const Result = styled.div`
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 36px;
    padding: 5% 10%;
    margin: auto;
`;

