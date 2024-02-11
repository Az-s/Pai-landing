import firstBlockImg from "../assets/NFC block4 2.svg";
import secondBlockImg from "../assets/Check POS2 1.svg";
import thirdBlockImg from "../assets/last block 3.svg";
import { secondBlockCardsInfo } from "../utilities/constants";

const FirstBlock = () => {
  return (
    <div className="bg-black text-white py-[160px] w-full  flex flex-col items-center">
      <div className="w-[1280px]">
        <div>
          <h2 className="text-[48px] font-bold">Как работает оплата с нами?</h2>
          <p className="pt-[32px] text-[24px] text-[#8A898E] mb-[80px]">
            Ускорьте время обслуживание гостей на 30%
          </p>
        </div>
        <div className="flex items-center justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[328px] px-[80px]">
          <div className="w-1/2 flex items-center justify-center">
            <img src={firstBlockImg} alt="" className="max-h-full max-w-full" />
          </div>
          <div className="w-1/2 ">
            <h5 className="text-[40px] font-semibold">Оплата заказа</h5>
            <p className="text-[18px] text-[#8A898E]">
              Гостем через NFC метку с деталями и суммой заказа
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[328px] my-[24px] px-[80px]">
          <div className="w-1/2 ">
            <h5 className="text-[40px] font-semibold">Закрытие заказа</h5>
            <p className="text-[18px] text-[#8A898E]">
              Aвтоматически в POS-системе после успешной оплатыа
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src={secondBlockImg}
              alt=""
              className="max-h-full max-w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[328px] px-[80px]">
          <div className="w-1/2 flex items-center justify-center">
            <img src={thirdBlockImg} alt="" className="max-h-full max-w-full" />
          </div>
          <div className="w-1/2 ">
            <h5 className="text-[40px] font-semibold">Кэшбэк бонусами</h5>
            <p className="text-[18px] text-[#8A898E]">
              Автоматически начисляются в профиле гостя
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-[24px] mt-[24px]">
          {secondBlockCardsInfo.map((card) => (
            <div
              key={card.title}
              className="bg-[#ff4432] text-left p-[40px] h-[175px] border-[1px] border-[#ff4432] rounded-3xl text-white"
            >
              <h5 className="text-[32px]">{card.title}</h5>
              <p className="text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
