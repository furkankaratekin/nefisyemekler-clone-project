import Recipe from "../models/recipe.model.js";

// Tüm reçeteleri getiren fonksiyon
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ID'ye göre Recipe arama fonksiyonu
const getRecipeById = async (req, res) => {
  try {
    // URL'den _id parametresini alın
    const { id } = req.params; // _id yerine id kullanıldığına dikkat edin, eğer route '/recipes/:id' şeklinde tanımlanmışsa

    // Doğrudan _id değerini kullanarak tarifi bul
    const recipe = await Recipe.findOne({ _id: id });
    console.log(id); // id değerini konsola yazdır

    // Tarif bulunamazsa, 404 hatası döndür
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // Tarif bulunursa, tarifi JSON formatında döndür
    res.json(recipe);
  } catch (error) {
    // Hata oluşursa, 500 hatası ile hata mesajını döndür
    res.status(500).json({ message: error.message });
  }
};
//yukarıdaki fonksiyonda eğer url'de id yazıysak ona göre tanımla

//Kullanıcı ID'ye göre tarif ekleme

//Kullanıcı ID'ye göre tarif güncelle
//kullanıcı ID'ye göre tarifi sil
//Kullanıcı ID'ye göre tarifi favorilere(deftere) ekle
//Kullanıcı ID'ye göre tarifi favorilerden(defterden) kaldır

// Fonksiyonu dışa aktarma (İsteğe bağlı)
export { getAllRecipes,getRecipeById};
