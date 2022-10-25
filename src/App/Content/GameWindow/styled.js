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
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
    padding: 3% 10%;
    margin: auto;
`;

export const ResultTitle = styled.h2`
    font-size: 36px;
    margin: 0 0 20px;
`;

export const ResultRow = styled.h2`
    font-size: 22px;
    margin: 0;
`;

export const ResultButton = styled.button`
    background-color: inherit;
    border: 2px solid ${({ theme: { colors } }) => colors.textPrimary};
    border-radius: 5px;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    font-size: 26px;
    padding: 15px 30px 12px;
    margin-top: 20px;
    
    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        filter: brightness(1);
        box-shadow: inset 3px 3px 7px 0px #333;
    }
`;