import { ButtonsContainer, Container, Option, OptionButton, OptionName } from "./styled";

const Settings = () => (
    <Container>
        <Option>
            <OptionName>Nazwa:</OptionName>
            <ButtonsContainer>
                <OptionButton>Opcja1</OptionButton>
                <OptionButton>Opcja2</OptionButton>
                <OptionButton>Opcja3</OptionButton>
            </ButtonsContainer>
        </Option>
        <Option>
            <OptionName>Nazwa:</OptionName>
            <ButtonsContainer>
                <OptionButton>Opcja1</OptionButton>
                <OptionButton>Opcja2</OptionButton>
            </ButtonsContainer>
        </Option>
        <Option>
            <OptionName>Nazwa:</OptionName>
            <ButtonsContainer>
                <OptionButton>Opcja1</OptionButton>
                <OptionButton>Opcja2</OptionButton>
            </ButtonsContainer>
        </Option>
        <Option>
            <OptionName>Nazwa:</OptionName>
            <ButtonsContainer>
                <OptionButton>Opcja1</OptionButton>
                <OptionButton>Opcja2</OptionButton>
                <OptionButton>Opcja3</OptionButton>
                <OptionButton>Opcja4</OptionButton>
            </ButtonsContainer>
        </Option>
    </Container>
);

export default Settings;