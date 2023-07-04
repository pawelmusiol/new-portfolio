import React from 'react';
import { Container, Grid } from '@mui/material'
import SingleProject from './singleProject';
import { Cinema, PioTrans, Erc, Rmp, Archon } from '../../images'

const projectsData = [
    {
        name: 'Archon Group',
        img: Archon,
        live: 'https://archongroup.pl/',
        github: '',
        desc: {
            pl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            en: ''
        },
        tech: ['Java script', 'React', 'gatsby'],
    },
    {
        name: 'Pio-Trans',
        img: PioTrans,
        live: 'http://www.pio-trans.pl/',
        github: '',
        desc: {
            pl: 'Ta strona została stworzona na potrzeby firmy transportowej. Pozwala użytkownikom na zapoznanie się z informacjami na temat strony i wysyłanie zapytań. Strona posiada nowoczesny, przyjazny użytkownikowy design i jest responsywna.',
            en: 'This website project is for a transport company who needs an online presence. The website will allow customers to get quotes, and access information about the company. The website have a modern, user-friendly design with a responsive layout that works on all devices. '
        },
        tech: ['Java script', 'React', 'nextJS'],
    },
    {
        name: 'Random Movie Picker',
        img: Rmp,
        live: 'https://random-movie-picker-mu.vercel.app/',
        github: 'https://github.com/pawelmusiol/random-movie-picker',
        desc: {
            pl: 'Projekt pozwala użytkownikom na wybranie losowego filmu z listy którą podali. Użytkownik może wybrać filmy które chciałby zobaczyć i serwis wybierze je losowo za niego. Strona jest świetną opcją by wybrać film bez konieczności marnowania czasu scrollując listę opcji. Projekt pozwala modyfikowanie listy filmów przez dodawanie filmów i usuwanie ich z listy, pozwalając na dobranie filmu który odpowiada preferencjom użytkownika.',
            en: 'This project allows users to pick a movie to watch from a list they provide. The user can select a movie that they would like to watch and the project will pick a movie from the list at random. This is a great way to find a movie to watch without having to spend time scrolling through a list of options. The project also allows users to customize their list by adding or removing movies from the list. This makes it easy to find a movie to watch that fits the user\'s preferences and tastes.'
        },
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Elite Tourism Route',
        img: Erc,
        live: 'https://elite-tourism-route.vercel.app/',
        github: 'https://random-movie-picker-mu.vercel.app/',
        desc: {
            pl: 'Ten projekt jest narzędziem do gry Elite Dangerous który oblicza najkrótszą możliwą drogę pomiędzy dwoma lub więcej systemami. Oblicza długość skoku pomiędzy systemami i wybiera najszybszą droge, aby dostac się z punktu A do punktu B. Projekt korzysta z algorytmu aby ustalić najkorzystniejszą drogę i rezultat jest pokazywany w prosty do zrozumienia sposób. To narzędzie jest niezbędnę dla graczy, pozwalając im na szybkie i łatwe planowanie podróży międzysygwiezdnej',
            en: 'This project is a tool for Elite Dangerous players that calculates the shortest route between two star or more systems. It takes into account the jump distance of each system, and uses the fastest route available to get from point A to point B. The project uses an algorithm to determine the most efficient route, and the results are presented in an easy to understand format. This tool is an invaluable asset for players of Elite Dangerous, allowing them to quickly and easily plan their inter-system travel.'
        },
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Last.fm graph',
        img: Cinema,
        live: '',
        github: '',
        desc: {
            pl: 'Ten Projekt używa danych z Last.fm aby utworzyć wykres który pokazuje jakiej muzyki słuchaliśmy w danym okresie czasu. Wykres pozwala śledzić nasze muzyczne zwyczaje i jakiej muzyki słychaliśmy. Można zobaczyć jakich artystów czy gatunków słuchaliśmy najwięcej i jak zmieniał się gust muzyczny. Projekt pozwala na łatwe śledzenie swojej muzyki i pomaga w odkrywaniu nowej bazując na tym czego słuchaliśmy.',
            en: 'This project uses data from Last.fm to create a graph that shows what music you have listened to over a certain period of time. This graph will allow you to see your music listening habits and see what kind of music you have been listening to. You will be able to see how often you listen to a particular artist, which songs are your most listened to, and how your music tastes have changed over time. This project will provide an easy way for you to keep track of your music listening habits and help you discover new music based on what you have been listening to.'
        },
        tech: ['Java script', 'React', 'NextJS'],
    },
    {
        name: 'Spotify Music Tracker',
        img: Cinema,
        live: '',
        github: 'https://github.com/pawelmusiol/spotify-tracker-api',
        desc: {
            pl: 'Projekt wizualizuje muzyczne zwyczaje użytkownika bazując na danych ze spotify. Wyświetla interaktywną mapę i lokalizacje gdzie słuchaliśmu muzyki w danym okresie czasu. Użytkownik może zobaczyć mapę rozpowszechnianią się swojej muzyki po świecie i odkrywac miejsca poprzez muzykę.',
            en: 'This project is a visual display of your music listening habits based on your Spotify account. It presents an interactive map of the locations where you have listened to music over a certain period of time. You can view the map to see the geographical spread of your music listening and explore the places you have visited through music.'
        },
        tech: ['Java script', 'React Native', 'NodeJS', 'MongoDB'],
    },

]


const Projects = () => {
    return (
        <Container sx={{ marginTop: 5 }} id='projects'>
            <Grid container direction='row' justifyContent='space-evenly' gap={10}>
                {projectsData.map((project, index) => <SingleProject key={`projet-${index}`} project={project} pos={index % 2 ? 'row' : 'row-reverse'} />)}
            </Grid>
        </Container>
    )
}

export default Projects