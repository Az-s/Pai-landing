import { fourthBlockCardsInfo } from "../utilities/constants";

const ThirdBlock = () => {
  return (
    <div className="w-full  flex flex-col items-center my-[160px]">
      <div className="w-[1280px]">
        <div>
          <h4 className="text-[48px] font-bold">
            В чем польза программ лояльности?
          </h4>
          <p className="text-[24px] text-[#8A898E] mt-[32px] mb-[80px]">
            Мы все посчитали для вас
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-[24px]">
          {fourthBlockCardsInfo.map((card, index) => (
            <div
              key={card.title}
              className={` ${
                index === 3
                  ? "bg-[#ff4432] w-[680px] h-[328px] rounded-3xl border-[2px] text-left p-[40px]"
                  : "border-[2px] border-[#E9E9E9] rounded-3xl w-[328px] h-[328px] text-left p-[40px]"
              }`}
            >
              <h5
                className={`${
                  index === 3
                    ? "bg-[#ff4432] text-white text-[40px] font-semibold"
                    : `text-[40px] text-[#ff4432] font-semibold`
                }`}
              >
                {card.title}
              </h5>
              <p
                className={`${
                  index === 3
                    ? "bg-[#ff4432] text-white text-[18px]"
                    : `text-[18px] text-[#8A898E]`
                }`}
              >
                {card.description}
              </p>
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-[229px] w-[180px] mt-[-40px]"
                  style={{ marginLeft: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
