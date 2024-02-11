import Logo from "../assets/Logo business Pai.svg";
import FirstBlockImg from "../assets/Block 1 3.svg";
import { firstBlockCardsInfo } from "../utilities/constants";

const Main = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo Pai" />
        <button>Участвовать</button>
      </div>
      <div>
        <div>
          <div>
            <h1>Сервис оплаты счета и начисления бонусов без потери времени</h1>
            <p>
              Освободите время персонала и дайте гостям самостоятельно оплатить
              счет и получить бонусы
            </p>
          </div>
          <div>
            <div>
              <p>0 сом</p>
              <p>Стоимость интеграции и пользования</p>
            </div>
            {firstBlockCardsInfo.map((card) => (
              <div key={card.description}>
                <img src={card.icon} alt="#" />
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={FirstBlockImg} alt="Phone image" />
        </div>
      </div>
    </div>
  );
};

export default Main;
