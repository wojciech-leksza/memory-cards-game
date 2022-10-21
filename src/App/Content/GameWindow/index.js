import Card from "./Card";
import { Container } from "./styled";
import { v4 as uuid } from 'uuid';

const GameWindow = () => {

    const numbers = Array(2).fill([1, 2, 3, 4, 5, 6]).flat();
    const shuffledNumbers = numbers.sort(function () {
        return Math.random() - 0.5;
      });

    return (
        <Container>
            {shuffledNumbers.map(number => (
                <Card key={uuid()} number={number}/>
            ))}
        </Container>
    );
};

export default GameWindow;