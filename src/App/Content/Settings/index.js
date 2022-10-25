import { ButtonsContainer, Container, Option, OptionButton, OptionName } from "./styled";

const Settings = () => (
    <Container>
        <Option>
            <OptionName>level:</OptionName>
            <ButtonsContainer>
                <OptionButton>4x3</OptionButton>
                <OptionButton>4x4</OptionButton>
                <OptionButton>5x4</OptionButton>
                <OptionButton>5x5</OptionButton>
                <OptionButton>6x5</OptionButton>
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

export default Settings;