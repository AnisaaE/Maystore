import './cards.css';

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Защо ние?</h2>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  👕
                </div>
                <h5 className="card-title mb-3">
                  Правим вашите идеи реалност
                </h5>
                <p className="card-text text-muted">
                  Всяка идея заслужава да бъде реализирана по уникален начин. Предлагаме персонализиране на тениски, работни облекла и стикери според вашите нужди и желания.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  🏆
                </div>
                <h5 className="card-title mb-3">
                  Качество, което може в действително да усетиш
                </h5>
                <p className="card-text text-muted">
                  Всяка поръчка се изпълнява с внимание към детайла. Използваме само висококачествени материали и модерни технологии за печат и производство.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 d-none d-md-block">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  🚚
                </div>
                <h5 className="card-title mb-3">
                  Бързо и надеждно обслужване
                </h5>
                <p className="card-text text-muted">
                  Нашият екип се ангажира да изпълнява поръчките бързо и точно, без компромиси с качеството. Предлагаме различни опции за доставка, за да може да изберете най-удобната за вас.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 d-none d-md-block">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  💼
                </div>
                <h5 className="card-title mb-3">
                  Гъвкави решения за вашия бизнес
                </h5>
                <p className="card-text text-muted">
                  От малки предприятия до големи корпорации. Предлагаме гъвкави решения за брандиране и персонализиране на облекла и аксесоари.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 d-none d-md-block">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  💰
                </div>
                <h5 className="card-title mb-3">
                  Конкурентни цени
                </h5>
                <p className="card-text text-muted">
                  Най-доброто съотношение цена-качество на пазара. Получавате висококачествен продукт на разумна цена.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card custom-card shadow-sm h-100 text-center border-0">
              <div className="card-body">
                <div className="icon mb-4" style={{ fontSize: "50px" }}>
                  📞
                </div>
                <h5 className="card-title mb-3">
                  Отлична поддръжка на клиенти
                </h5>
                <p className="card-text text-muted">
                  Ние ценим всеки клиент и сме винаги на разположение да отговорим на вашите въпроси или да помогнем с поръчката. Нашият екип е готов да ви съдейства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
