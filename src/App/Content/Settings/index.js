import { useDispatch, useSelector } from "react-redux";
import { selectDelay, selectLevel, setDelay, setLevel } from "../../slice";
import { ButtonsContainer, Container, Option, OptionButton, OptionName } from "./styled";

const Settings = () => {
    const dispatch = useDispatch();
    const level = useSelector(selectLevel);
    const delayTime = useSelector(selectDelay);
    console.log(level)
    return (
        <Container>
            <Option>
                <OptionName>level:</OptionName>
                <ButtonsContainer>
                    <OptionButton
                        onClick={() => dispatch(setLevel([4, 3]))}
                        active={level[0] === 4 && level[1] === 3}
                    >
                        4x3
                    </OptionButton>
                    <OptionButton
                        onClick={() => dispatch(setLevel([4, 4]))}
                        active={level[0] === 4 && level[1] === 4}
                    >
                        4x4
                    </OptionButton>
                    <OptionButton
                        onClick={() => dispatch(setLevel([5, 4]))}
                        active={level[0] === 5 && level[1] === 4}
                    >
                        5x4
                    </OptionButton>
                    <OptionButton
                        onClick={() => dispatch(setLevel([6, 5]))}
                        active={level[0] === 6 && level[1] === 5}
                    >
                        6x5
                    </OptionButton>
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
                    <OptionButton
                        onClick={() => dispatch(setDelay(1500))}
                        active={delayTime === 1500}
                    >
                        slow
                    </OptionButton>
                    <OptionButton
                        onClick={() => dispatch(setDelay(1000))}
                        active={delayTime === 1000}
                    >
                        medium
                    </OptionButton>
                    <OptionButton
                        onClick={() => dispatch(setDelay(500))}
                        active={delayTime === 500}
                    >
                        fast
                    </OptionButton>
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