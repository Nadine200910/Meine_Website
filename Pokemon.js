// Pokemon
async function getData() {
  const name = document.getElementById("pokemonName").value.toLowerCase();
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${name}`;

  try {
    const res = await fetch(endPoint);

    if (!res.ok) {
      throw new Error("Pokémon nicht gefunden");
    }

    const data = await res.json();

    document.getElementById("pokemon-id").textContent = "#" + data.id;
    document.getElementById("pokemon-name").textContent = data.name;
    document.getElementById("weight").textContent =
      "Gewicht: " + data.weight;
    document.getElementById("height").textContent =
      "Größe: " + data.height;

    document.getElementById("pokemon-image").src =
      data.sprites.other["official-artwork"].front_default;

    document.getElementById("types").textContent =
      data.types.map(type => type.type.name).join(", ");

  } catch (error) {
    console.error(error);
  }
}

getData(endPoint);