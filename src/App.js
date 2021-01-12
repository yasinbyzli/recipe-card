import "./App.css";
import Card from "./components/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
	const recipeAuthor = "Kodluyoruz";
	const recipeItem = {
		title: "Avokado Ezmeli Taco",
		date: "12 Ocak 2021, Salı",
		image: food,
		description:
			"Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
	};

	const likeCount = 193;
	const isLiked = false;

	/*
	
	Aşağıdaki Card Componenti bir yemek tarifinin detaylarını, yazarını, beğeni sayısını ve 
	kullanıcın tarifi beğenip beğenmediğine dair bir takım bilgileri gösteriyor.

	Card Componenti yukarıda belirtilen özellikleri listelemek için belli başlı "Prop"lar almakta.
	Bu "Prop"lar sırasıyla, author, recipe, count, liked olarak adlandırılmış durumda.

	Sizin için yazar (author) prop'unu örnek olarak Card componentine aşağıda ekledik.

	Bu ödevde, diğer "Prop"ları da sizin göndermeniz gerekiyor.

	Prop isimlerini author, recipe, count, liked şeklinde doğru yazıldığından emin olun. :)

	*/

	return (
		<div className="App">
			<header className="App-header">
				<Card
					/* prop ismi = { değişken } */
					author={recipeAuthor}

					/*  Buraya diğer Prop'ları eklemeniz gerek.  */
				/>
			</header>
		</div>
	);
}

export default App;
