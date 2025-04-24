import React, { useState } from "react";

const NutritionSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [allergenData, setAllergenData] = useState(null);
  const [loading, setLoading] = useState(false);

  const USDA_KEY = "qEs4Y0JzqVgj6T0oIaMEQLBjFzfnefKjKVlapa4h";
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // This should be the function that triggers the API call or search
    }
  };
  
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setNutritionData(null);
    setAllergenData(null);

    try {
      // USDA Data
      console.log("Fetching USDA data...");
      const usdaRes = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&pageSize=1&api_key=${USDA_KEY}`
      );
      const usdaData = await usdaRes.json();
      console.log("USDA Data:", usdaData);
      
      const food = usdaData.foods?.[0];
      setNutritionData(food);

      // OpenFoodFacts Data
      console.log("Fetching open food data...");
      const offRes = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1&page_size=1`
      );
      const offData = await offRes.json();
      console.log("OpenFoodFacts Data:", offData);
      const product = offData.products?.[0];
      setAllergenData(product);

    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 pt-20 p-6 border rounded-lg shadow bg-white">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Search Nutrition Info</h1>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="e.g., Packaged or Unpackaged food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="text-center mt-4 text-blue-600 font-medium animate-pulse">
          Fetching info...
        </div>
      )}

      {nutritionData && (
        <div className="mt-6 text-left border p-4 rounded-lg shadow bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">
            {nutritionData.description || "No Name Found"}
          </h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {/* <li><strong>Brand:</strong> {nutritionData.brandOwner || "N/A"}</li> */}
            {/* <li><strong>Ingredients:</strong> {nutritionData.ingredients || "N/A"}</li> */}
            {nutritionData.foodNutrients?.map((nutrient, index) => (
              <li key={index}>
                <strong>{nutrient.nutrientName}:</strong> {nutrient.value} {nutrient.unitName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {allergenData && (
        <div className="mt-4 border p-4 rounded-lg bg-red-50">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Allergy & Labels Info</h3>
          <ul className="text-sm text-red-800 space-y-1">
            <li><strong>Allergens:</strong> {allergenData.allergens_tags?.join(", ") || "Not Found"}</li>
            <li><strong>Labels:</strong> {allergenData.labels_tags?.join(", ") || "Not Available"}</li>
            <li><strong>Additives:</strong> {allergenData.additives_tags?.join(", ") || "Not Mentioned"}</li>
            <li><strong>Categories:</strong> {allergenData.categories_tags?.join(", ") || "N/A"}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutritionSearch;
