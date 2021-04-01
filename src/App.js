import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeItems = [
    {
      author: "Kodluyoruz",
      title: "Avokado Ezmeli Taco",
      date: "12 Ocak 2021, Salı",
      description:
        "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
      likeCount: 193,
      isLiked: false,
      image: "http://localhost:3000/static/media/food.58c698ab.jpg",
    },
    {
      author: "Kodluyoruz",
      title: "İskender",
      date: "1 Nisan 2021, Perşembe",
      image:
        "https://i.sozcu.com.tr/wp-content/uploads/2019/11/20/iecrop/iskender-shutterstock_16_9_1574267190-880x495.jpg",
      description:
        "Uludağ yaylalarında yetişen otlar ve taze kekiklerle beslenen koyun ve kuzular, iskenderin tarihi lezzetini var eden en önemli ayrıntıların başında gelir. Bu etlerin, farklı bölümlerinden bir araya gelen lezzet harmanı, pide, tereyağı, sos, yoğurt, domates, yeşil biberle zenginleşerek servis edilir.",
      likeCount: 323,
      isLiked: false,
    },
    {
      author: "Kodluyoruz",
      title: "Hünkar Beğendi",
      date: "1 Nisan 2021, Perşembe",
      image:
        "https://finanstaksi.com/wp-content/uploads/2019/12/hunkar-begendi-tarihi-hikayesi-ve-puf-noktalari.jpg",
      description:
        "Hünkar beğendi, kremalı kavrulmuş patlıcan püresinin üstüne servis edilen lezzetli bir kuzu yahnisinden oluşan geleneksel bir Türk yemeğidir. Püre genellikle süt ve peynir ile kalınlaştırılırken, tüm yemek bazen domates bazlı bir sosla doldurulur veya taze doğranmış maydanozla süslenir.",
      likeCount: 362,
      isLiked: false,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {recipeItems.map((item, index) => (
          <Card key={index} recipe={item} />
        ))}
      </header>
    </div>
  );
}

export default App;
