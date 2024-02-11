import firstBlockImg from "../assets/NFC block4 2.svg";
import secondBlockImg from "../assets/Check POS2 1.svg";
import thirdBlockImg from "../assets/last block 3.svg";
import { secondBlockCardsInfo } from "../utilities/constants";

const FirstBlock = () => {
  return (
    <div>
      <div>
        <h2>Как работает оплата с нами?</h2>
        <p>Ускорьте время обслуживание гостей на 30%</p>
      </div>
      <div>
        <img src={firstBlockImg} alt="" />
        <div>
          <h5>Оплата заказа</h5>
          <p>Гостем через NFC метку с деталями и суммой заказа</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Закрытие заказа</h5>
          <p>Aвтоматически в POS-системе после успешной оплатыа</p>
        </div>
        <img src={secondBlockImg} alt="" />
      </div>
      <div>
        <img src={thirdBlockImg} alt="" />
        <div>
          <h5>Кэшбэк бонусами</h5>
          <p>Автоматически начисляются в профиле гостя</p>
        </div>
      </div>
      <div>
        {secondBlockCardsInfo.map((card) => (
          <div key={card.title}>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBlock;
