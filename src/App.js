import React, {Component} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';
import './App.css';

const soccerseasons = [
    {
        "id": 426,
        "caption": "Premier League 2016/17",
        "league": "PL",
        "numberOfTeams": 20,
        "numberOfGames": 380,
        "link": "https://1.bp.blogspot.com/-CRVSOZmm8vc/Vrp1sHkcpiI/AAAAAAAAzRw/MchhGmhk2EY/s1600/new-premier-league-logo-2016-17-9.jpg"
    },
    {
        "id": 427,
        "caption": "Championship 2016/17",
        "league": "ELC",
        "numberOfTeams": 24,
        "numberOfGames": 552,
        "link": "http://e2.365dm.com/16/06/16-9/20/scottish-scotland-fixtures-graphic_3484961.jpg?20160616121532"
    },
    {
        "id": 428,
        "caption": "League One 2016/17",
        "league": "EL1",
        "numberOfTeams": 24,
        "numberOfGames": 552,
        "link": "http://cf.c.ooyala.com/prbXk1dzr5T5alNxjXHLOQ_3DD7H4nQh/promo264628011"
    },
    {
        "id": 430,
        "caption": "1. Bundesliga 2016/17",
        "league": "BL1",
        "numberOfTeams": 18,
        "numberOfGames": 306,
        "link": "http://fifa-footballmanager.com/wp-content/uploads/2016/04/ImTgKWb.jpg"
    },
    {
        "id": 431,
        "caption": "2. Bundesliga 2016/17",
        "league": "BL2",
        "numberOfTeams": 18,
        "numberOfGames": 306,
        "link": "https://i.ytimg.com/vi/L_NpNjk4adM/maxresdefault.jpg"

    },
    {
        "id": 434,
        "caption": "Ligue 1 2016/17",
        "league": "FL1",
        "numberOfTeams": 20,
        "numberOfGames": 380,
        "link": "https://pbs.twimg.com/media/CkLyZ82XEAQlchP.jpg"
    },
    {
        "id": 435,
        "caption": "Ligue 2 2016/17",
        "league": "FL2",
        "numberOfTeams": 20,
        "numberOfGames": 380,
        "link": "http://www.squawka.com/news/wp-content/uploads/2016/04/Ligue-2.jpg"
    },
    {
        "id": 436,
        "caption": "Primera Division 2016/17",
        "league": "PD",
        "numberOfTeams": 20,
        "numberOfGames": 380,
        "link": "http://news.meridianbet.com/wordpress/wp-content/uploads/2014/08/liga_bbva.jpg"
    },
    {
        "id": 437,
        "caption": "Liga Adelante 2016/17",
        "league": "SD",
        "numberOfTeams": 22,
        "numberOfGames": 462,
        "link": "data:image/png;base64,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"
    },
    {
        "id": 438,
        "caption": "Serie A 2016/17",
        "league": "SA",
        "numberOfTeams": 20,
        "numberOfGames": 380,
        "link": "http://www.highonsports.net/wp-content/uploads/2017/01/Meridian.jpg"
    },
    {
        "id": 439,
        "caption": "Primeira Liga 2016/17",
        "league": "PPL",
        "numberOfTeams": 18,
        "numberOfGames": 306,
        "link": "http://primeira.esumula.com.br/Noticias/F17N20160511200003_1960.jpg"
    }
];

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Content items={soccerseasons}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
