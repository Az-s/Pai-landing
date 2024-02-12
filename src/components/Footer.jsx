const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="font-bold text-[32px] sm:text-[48px] mt-16 md:mt-32">
        С любовью к заведениям
      </h5>
      <div className="text-gray-500 sm:text-[32px] text-[18px] md:w-4/5 lg:w-3/4 xl:w-2/3 mb-16 mt-4 md:mt-8">
        <p>
          Мы в <span className="text-red-500">Pai</span> - команда энтузиастов,
          которых объединяет страсть к еде и технологиям.
        </p>
        <p className="my-5">
          Наша миссия - построить эффективный продукт, который позволит
          заведениям быть ближе к своим гостям.
        </p>
        <p>
          Пока мы не убедимся в эффективности нашего продукта, его стоимость
          будет равна <span className="text-red-500">0 сом</span>. Комиссия
          взимается только за услуги эквайринг партнера в установленном размере.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center justify-around text-gray-500 text-sm pb-8 md:pb-20">
        <p>2024</p>
        <p className="mt-4 md:mt-0">Пользовательское соглашение</p>
        <p className="mt-4 md:mt-0">Политика конфиденциальности</p>
      </div>
    </div>
  );
};

export default Footer;
