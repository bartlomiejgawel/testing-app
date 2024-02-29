const names = [
  {
    name: "Smith",
    history:
      'From an English surname meaning "metal worker, blacksmith", derived from Old English smitan "to smite, to hit". It is the most common surname in most of the English-speaking world.',
    numberOfPeople: 50,
  },
  {
    name: "Watson",
    history:
      'From an English surname meaning "son of Wat". A famous fictional bearer of the surname was Dr. Watson, the assistant to Sherlock Holmes in Arthur Conan Doyle\'s mystery stories beginning in 1887.',
    numberOfPeople: 20,
  },
  {
    name: "Clay",
    history:
      "From an English surname that originally referred to a person who lived near or worked with clay. This name can also be a short form of Clayton.",
    numberOfPeople: 30,
  },
  {
    name: "Anderson",
    history: 'From a surname meaning "son of Andrew".',
    numberOfPeople: 100,
  },
  {
    name: "Mortimer",
    history:
      'From an English surname that was derived from the name of a town in Normandy, itself meaning "dead water, still water" in Old French.',
    numberOfPeople: 5,
  },
  {
    name: "Newton",
    history:
      'From a surname that was originally derived from a place name meaning "new town" in Old English. A famous bearer of the surname was the English physicist Isaac Newton (1643-1727).',
    numberOfPeople: 35,
  },
  {
    name: "Palmer",
    history:
      'From an English surname meaning "pilgrim". It is ultimately from Latin palma "palm tree", since pilgrims to the Holy Land often brought back palm fronds as proof of their journey.',
    numberOfPeople: 1,
  },
  {
    name: "Saxon",
    history:
      'From an English surname that was derived from the name of the Germanic tribe the Saxons, ultimately deriving from the Germanic word *sahsą meaning "knife". This name can also be given in direct reference to the tribe.',
    numberOfPeople: 15,
  },
];

function search() {
  const searchInput = document.getElementById("search-input");
  const searchPhrase = searchInput.value;
  const searchResults = document.getElementById("search-results");

  if (searchPhrase.length > 15) {
    const error = document.createElement("p");
    error.innerText = "Error!";
    searchResults.replaceChildren();
    searchResults.appendChild(error);
    throw new Error("Too long name (must be up to 15 characters)!"); // 1# Too long name
  }

  const results = !!searchPhrase
    ? names.filter((name) => name.name.includes(searchPhrase)).slice(0, 2) // 2# Number of results is limited
    : names;
  searchResults.replaceChildren();

  for (const result of results) {
    const item = document.createElement("div");
    item.classList.add("search-item");
    const header = document.createElement("h3");
    header.innerText = result.name;
    item.appendChild(header);
    const description = document.createElement("p");
    description.innerText = `Decsription: ${result.history}`; // 3# Typo
    item.appendChild(description);
    const numberOfPeople = document.createElement("p");
    numberOfPeople.innerText = `Number of people: ${result.numberOfPeople}`;

    if (result.name !== "Smith") {
      // 4# Smith doesn't return the number of people
      item.appendChild(numberOfPeople);
    }

    searchResults.appendChild(item);
  }
}

search();
