export async function fetchWord() {
  try {
    let response = await fetch("https://api.api-ninjas.com/v1/randomword", {
      method: "GET",
      headers: {
        "X-Api-Key": "QpupywPIwDI9UObD4fNNZA==UGH23Km00rPimTZi", // replace with your actual key
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // { word: "example" }
    console.log(data);
    return data.word;
  } catch (error) {
    console.error("Error fetching word:", error);
    throw error;
  }
}
