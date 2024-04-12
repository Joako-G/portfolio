export const projects = [
  {
    id: 1,
    name: 'Juego de pokemon',
    text1: 'En este juego utilice Custom Hooks para separar la logica de la UI, useState para manejar los estados, useEffect para realizar llamadas a APIs y componetizacion para que cada componente realice una funcion en especifico. ',
    text2: 'El juego esta basado en el famoso juego de Preguntados, PokemonGame consiste en adivinar el nombre del pokemon a partir de una foto, cada nivel cuenta con 20 pokemons a adivinar',
    url: 'https://github.com/Joako-G/pokemonGame',
    page: 'https://joako-g.github.io/pokemonGame/',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 2,
    name: 'Buscador de peliculas',
    text1: 'En este proyecto aprendi a usar useCallback para que la llamada a la API se haga en un tiempo determinado y useMemo para memoizar la lista de peliculas, esto para que el usuario no pueda buscar 2 veces la misma pelicula. ',
    text2: 'La aplicacion permite buscar peliculas a partir de un titulo ingresado por el usuario, la aplicacion mostrar sus respectivos mensajes al encontrar un error',
    url: 'https://github.com/Joako-G/movieSearch',
    page: '',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 3,
    name: 'Juego de Rick and Morty',
    text1: 'Para realizar este juego utilice useState para gestionar el estado del juego, useEffect para hacer la llamada a la API.',
    text2: 'El juego consiste en adivinar el nombre del personaje a partir de una imagen, el usuario cuenta con 3 vidas',
    url: 'https://github.com/Joako-G/app-Rick-and-Morty',
    page: 'https://joako-g.github.io/app-Rick-and-Morty/',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 4,
    name: 'Color Hunter Clone',
    text1: 'Para realizar esta clon de Color Hunt utilice useState para gestionar los estados, useEffect para gestionar la llamada a la API, useContext para evitar hacer Prop Drilling y componetizacion de componentes para que cada uno realice una funcion en especifico',
    text2: 'Esta app es un clon de Color Hunt, la app premite  agregar paletas favorias, copiar el color deseado.',
    url: 'https://github.com/Joako-G/Color-Paletts',
    page: '',
    technologies: ['React', 'JavaScript', 'HTML', 'Tailwind CSS', 'NextUI']
  }
]
