document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const anio = document.getElementById('anio');
  anio.textContent = new Date().getFullYear();

  const products = [
  {
    id: 'netflix',
    name: 'Netflix - 1 mes',
    desc: 'Disfruta de tus series y películas favoritas.',
    price: 6.99,
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    available: true
  },
  {
    id: 'spotify',
    name: 'Spotify Premium - 1 mes',
    desc: 'Escucha música sin anuncios y sin conexión.',
    price: 4.99,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
    available: true
  },
  {
    id: 'disney',
    name: 'Disney+ - 1 mes',
    desc: 'Películas, series y clásicos de Disney, Pixar y Marvel.',
    price: 5.99,
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    available: true
  },
  {
    id: 'prime',
    name: 'Amazon Prime Video - 1 mes',
    desc: 'Miles de películas y series incluidas en Prime Video.',
    price: 6.49,
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
    available: false
  },
  {
    id: 'crunchyroll',
    name: 'Crunchyroll - 1 mes Premium',
    desc: 'Accede a miles de animes subtitulados y doblados sin anuncios.',
    price: 5.99,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Crunchyroll_Logo.svg',
    available: true
  }
];