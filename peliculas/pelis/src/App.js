import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import Footer from './footer';
import './footer.css';
import Principal from './principal';
import './principal.css';
import KommunicateChat from './chat';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filmss: [
                { id: 0, rating: 4, title: 'Creep 2', image: 'peli1.jpg' },
                { id: 1, rating: 3, title: 'Un lugar tranquilo', image: 'peli2.jpg' },
                { id: 2, rating: 5, title: 'El apóstol', image: 'peli3.jpg' },
                { id: 3, rating: 5, title: 'El juego de Gerald', image: 'peli7.jpg' },
                { id: 4, rating: 5, title: 'Insidiuos', image: 'peli5.jpg' },
                { id: 5, rating: 3, title: 'Fast & furious 7', image: 'peli6.jpg' }
            ],
            copyFilmss: []
        };

        this.onSearch = this.onSearch.bind(this);
        this.addItem = this.addItem.bind(this);
        this.remove = this.remove.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    initFilmss() {
        //this.setState({copyBooks: [...this.state.books]});
        this.setState((state, props) => ({
            copyFilmss: [...state.filmss]
        }));
    }

    componentDidMount() {
        this.initFilmss();
    }

    onSearch(query) {
        if (query === '') {
            this.setState({ copyFilmss: [...this.state.filmss] });
        } else {

            const temp = [...this.state.filmss];
            var res = [];
            temp.forEach(item => {
                if (item.title.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                }
            });

            this.setState({ copyFilmss: [...res] });
        }
    }

    addItem(item) {
        var temp = [...this.state.filmss];
        const id = temp[temp.length - 1].id + 1;
        item['id'] = id;
        temp.push(item);
        this.setState({ filmss: [...temp] });
        this.initFilmss();
    }

    remove(id) {
        var temp = [...this.state.filmss];
        const res = temp.filter(item => item.id != id);
        this.setState({ filmss: [...res] });
        this.initFilmss();
    }

    updateRating(item) {
        var temp = [...this.state.filmss];
        const index = temp.findIndex(x => x.id === item.id);
        temp[index].title = item.title;
        temp[index].image = item.image;
        temp[index].rating = item.rating;

        this.setState({ filmss: [...temp] });
        this.initFilmss();
    }

    render() {
        return ( <
            div className = "app" >
            <
            Menu title = "Films"
            onsearch = { this.onSearch }
            onadd = { this.addItem }
            /> <
            Principal / >
            <
            List className = "list"
            items = { this.state.copyFilmss }
            onremove = { this.remove }
            onupdaterating = { this.updateRating }
            /> <
            br / >
            <
            br / >
            <
            br / >
            <
            Footer / >
            <
            KommunicateChat / >
            <
            /div>
        );
    }
}

export default App;