import './cards.css';
const services = [
    {
      icon: "👕", // Може да замените с FontAwesome или друга иконка
      title: "Правим вашите идеи реалност",
      description:
        "Всяка идея заслужава да бъде реализирана по уникален начин. Предлагаме персонализиране на тениски, работни облекла и стикери според вашите нужди и желания."
    },
    {
      icon: "🏆", // Може да замените с FontAwesome или друга иконка
      title: "Качество, което може в действително да усетиш",
      description:
        "Всяка поръчка се изпълнява с внимание към детайла. Използваме само висококачествени материали и модерни технологии за печат и производство."
    },
    {
      icon: "🚚", // Може да замените с FontAwesome или друга иконка
      title: "Бързо и надеждно обслужване",
      description:
        "Нашият екип се ангажира да изпълнява поръчките бързо и точно, без компромиси с качеството. Предлагаме различни опции за доставка, за да може да изберете най-удобната за вас."
    },
    {
      icon: "💼", // Може да замените с FontAwesome или друга иконка
      title: "Гъвкави решения за вашия бизнеси",
      description:
        "От малки предприятия до големи корпорации. Предлагаме гъвкави решения за брандиране и персонализиране на облекла и аксесоари."
    },
    {
      icon: "💰", // Може да замените с FontAwesome или друга иконка
      title: "Конкурентни цени",
      description:
        "Най-доброто съотношение цена-качество на пазара. Получавате висококачествен продукт на разумна цена."
    },
    {
      icon: "📞", // Може да замените с FontAwesome или друга иконка
      title: "Отлична поддръжка на клиенти",
      description:
        "Ние ценим всеки клиент и сме винаги на разположение да отговорим на вашите въпроси или да помогнем с поръчката. Нашият екип е готов да ви съдейства."
    }
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-5 bg-light">
        <div className="container">
        <h2 className="text-center mb-5">Защо ние?</h2>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card custom-card shadow-sm h-100 text-center border-0">
                  <div className="card-body">
                    <div className="icon mb-4" style={{ fontSize: "50px" }}>
                      {service.icon}
                    </div>
                    <h5 className="card-title mb-3">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;