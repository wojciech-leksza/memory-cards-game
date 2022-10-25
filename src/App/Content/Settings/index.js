import { useDispatch } from "react-redux";
import { setLevel } from "../../slice";
import { ButtonsContainer, Container, Option, OptionButton, OptionName } from "./styled";

const Settings = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Option>
                <OptionName>level:</OptionName>
                <ButtonsContainer>
                    <OptionButton onClick={() => dispatch(setLevel([4, 3]))}>4x3</OptionButton>
                    <OptionButton onClick={() => dispatch(setLevel([4, 4]))}>4x4</OptionButton>
                    <OptionButton onClick={() => dispatch(setLevel([5, 4]))}>5x4</OptionButton>
                    <OptionButton onClick={() => dispatch(setLevel([6, 5]))}>6x5</OptionButton>
                </ButtonsContainer>
            </Option>
            <Option>
                <OptionName>design:</OptionName>
                <ButtonsContainer>
                    <OptionButton>standard</OptionButton>
                </ButtonsContainer>
            </Option>
            <Option>
                <OptionName>speed:</OptionName>
                <ButtonsContainer>
                    <OptionButton>slow</OptionButton>
                    <OptionButton>medium</OptionButton>
                    <OptionButton>fast</OptionButton>
                </ButtonsContainer>
            </Option>
            <Option>
                <OptionName>pictures:</OptionName>
                <ButtonsContainer>
                    <OptionButton>brains</OptionButton>
                </ButtonsContainer>
            </Option>
        </Container>
    );
};

export default Settings;