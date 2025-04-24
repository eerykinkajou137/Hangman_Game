export async function fetcWord() {
  try {
    const response = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    const data = await response.json();
    console.log(data);
    return data[0]; // just the word
  } catch (error) {
    console.error("Error fetching word:", error);
    throw error;
  }
}
