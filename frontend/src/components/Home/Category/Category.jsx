import workwear from "../../../assets/images/man-and-women-workwear.jpg";
import carSticker from "../../../assets/images/car-sticker.jpg";
import kidFather from "../../../assets/images/kidFather.jpeg";
import gifts from "../../../assets/images/gifts.jpeg";

import "./Category.css";

const categories = [
  {
    title: "Работно облекло - обедини екипа си",
    text: "Развийте бизнеса си с персонализирано работно облекло, което не само подчертава идентичността на вашия екип, но и усилва корпоративната култура. Персонализирането на работното облекло е отличен начин да мотивирате служителите си, да изградите по-силна връзка между тях и да създадете еднакво усещане за принадлежност.",
    image: workwear,
  },
  {
    title: "Стикери за превозни средства - отличи се нa пътя",
    text: "Персонализираните стикери са идеалното решение за вашата кола, камион, кросоувър или всяко друго превозно средство. Създайте уникален външен вид, който най-добре представя вашия бизнес или индивидуални предпочитания. Нашите стикери са изработени от висококачествени, устойчиви на атмосферни влияния материали, което гарантира дълготрайност и запазване на отличния им вид дори при екстремни метеорологични условия.",
    image: carSticker,
  },
  {
    title: "Подарък за всеки и по всеки повод",
    text: "Нашите персонализирани подаръци са идеални за всеки специален повод – от рожденни дни до сватби и корпоративни събития. Изберете от разнообразие от стилове и продукти, за да създадете уникален подарък, който ще остави трайно впечатление.",
    image: gifts,
  },
  {
    title: "Индивидуални Персонализирани Дрехи - изрази Стил и Личност",
    text: "Получете облекло, което е точно толкова уникално, колкото сте и вие. Нашите персонализирани дрехи са идеалното решение за индивидуални клиенти, които търсят специален стил и дизайн. Създайте уникални облекла за специални случаи.",
    image: kidFather,
  },
];

const Category = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className={`col-lg-12 col-md-6 d-flex`}>
              <div
                className={`item row w-100 d-flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="col-lg-3">
                  <div className="image">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <h4 >
                    <a
                      href="#"
                      className="no-link-style d-flex align-items-center ms-2"
                    >
                      {category.title}
                      <i className="bi bi-arrow-right ms-2"></i>{" "}
                    </a>
                  </h4>
                  <p className="text-start d-none d-lg-flex ms-2">{category.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
