
const opneNave = () => {
  document.getElementById('mobileNave').style.width = '100%';
};
const closeNave = () => {
  document.getElementById('mobileNave').style.width = '0';
};

opneNave();
closeNave();


// _______________Dinamic Content___________________

const artistsData = [
  {
    name: "Shepard Fairey",
    description: "Street artist, graphic designer, and activist.",
    imageSrc: "/images/artis01 shepard farei.jpg",
    bio: "Fairey gained widespread recognition for his 'Hope' poster featuring Barack Obama during the 2008.",
  },
  {
    name: "JR",
    description: "Photographer known for large-scale public art projects.",
    imageSrc: "/images/JR artist 02JPG.JPG",
    bio: "His works often involve portraits of ordinary people in marginalized communities.",
  },
  {
    name: "Ai Weiwei",
    description: "Chinese artist, and dissident whose work tackles issues of human rights.",
    imageSrc: "/images/Ai Weiwei Artis 03.JPG",
    bio: "He works across various media, including installations, sculptures, and photography.",
  },
  {
    name: "Yayoi Kusama",
    description: "Japanese contemporary artist known for her immersive art installations.",
    imageSrc: "/images/yayoi kusama artis 04.JPG",
    bio: "Her works often feature repetitive patterns and explore themes of infinity and self-obliteration.",
  },
  {
    name: "Barbara Kruger",
    description: "Artist and designer famous for her use of text in her artworks.",
    imageSrc: "/images/Barbara Kruger artis 05.JPG",
    bio: "Her pieces often address issues of gender, consumerism, and power, frequently featuring bold, large-lettered phrases.",
  },
  {
    name: "Kehinde Wiley",
    description: "American painter known for his contemporary portraits.",
    imageSrc: "/images/kehinde Wiley.JPG",
    bio: "Incorporating Black subjects in heroic and ornate poses, exploring representation and identity.",
  }
];

function generateArtistHTML(artist) {
  return `
    <div class="item">
      <div class="img-Character">
        <img src="${artist.imageSrc}" alt="${artist.name}">
      </div>
      <div class="textContent">
        <h3>${artist.name}</h3>
        <h5>${artist.description}</h5>
        <hr>
        <p>${artist.bio}</p>
      </div>
    </div>
  `;
}

function populateArtistsContainer() {
  const artistsContainer = document.getElementById("artistsContainer");
  
  let artistsHTML = "";
  artistsData.forEach(artist => {
    artistsHTML += generateArtistHTML(artist);
  });

  artistsContainer.innerHTML = artistsHTML;
}

populateArtistsContainer();
