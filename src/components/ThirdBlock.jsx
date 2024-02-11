import { fourthBlockCardsInfo } from "../utilities/constants";

const ThirdBlock = () => {
  return (
    <div>
      <div>
        <h4>В чем польза программ лояльности?</h4>
        <p>Мы все посчитали для вас</p>
      </div>
      <div>
        {fourthBlockCardsInfo.map((card) => (
          <div key={card.title}>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdBlock;