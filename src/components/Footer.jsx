const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="font-bold text-[48px] mt-[160px]">С любовью к заведениям</h5>
      <div className="text-[#8A898E] text-[24px] w-[800px] mb-[200px] mt-[32px]">
        <p>
          Мы в <span className="text-[#FF4432]">Pai</span> - команда энтузиастов, которых объединяет страсть к еде и
          технологиям.
        </p>
        <p className="my-5">
          Наша миссия - построить эффективный продукт, который позволит
          заведениям быть ближе к своим гостям.
        </p>
        <p>
          Пока мы не убедимся в эффективности нашего продукта, его стоимость
          будет равна <span className="text-[#FF4432]">0 сом</span>. Комиссия взимается только за услуги эквайринг
          партнера в установленном размере.
        </p>
      </div>
      <div className="flex w-full items-center justify-around text-[#8A898E] text-[16px] pb-[120px]">
        <p>2024</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Footer;
