import Logo from "../assets/Logo business Pai.svg";
import FirstBlockImg from "../assets/Block 1 3.svg";
import { firstBlockCardsInfo } from "../utilities/constants";

const Main = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between h-[64px]">
        <img src={Logo} alt="Logo Pai" />
        <button className="text-[20px] bg-[#E9E9E9]">Участвовать</button>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <div>
            <h1>Сервис оплаты счета и начисления бонусов без потери времени</h1>
            <p>
              Освободите время персонала и дайте гостям самостоятельно оплатить
              счет и получить бонусы
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="border-[2px] border-[#E9E9E9] rounded-3xl w-[260px] h-[156px] flex flex-col p-4 text-left">
              <p className="text-[40px] text-[#FF4432] font-semibold">0 сом</p>
              <p className="text-[18px] text-[#8A898E]">Стоимость интеграции и пользования</p>
            </div>
            {firstBlockCardsInfo.map((card) => (
              <div key={card.description} className="border-[2px] border-[#E9E9E9] rounded-3xl w-[260px] h-[156px] flex flex-col p-4 text-left">
                <img src={card.icon} alt="#" className="flex self-start"/>
                <p className="text-[18px] text-[#8A898E]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[684px] w-1/2">
          <img src={FirstBlockImg} alt="Phone image" />
        </div>
      </div>
    </div>
  );
};  

export default Main;
