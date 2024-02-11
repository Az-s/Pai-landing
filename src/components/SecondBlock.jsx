import { thirdBlockCardsInfo } from "../utilities/constants";

const SecondBlock = () => {
  return (
    <div>
      <div>
        <h3>Насколько наш метод оплаты лучше?</h3>
        <p>Дайте гостям оплатить их заказ самостоятельно</p>
      </div>
      <div>
        {thirdBlockCardsInfo.map((card) => (
          <div key={card.description}>
            <img src={card.icon} alt="" />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondBlock;
