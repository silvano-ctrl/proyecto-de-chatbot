import React from 'react';

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1
        };

        this.cancelAction = this.cancelAction.bind(this);
        this.createItem = this.createItem.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    cancelAction(e) {
        this.props.onhide();
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });

    }
    onChangeImage(e) {
        this.setState({ image: e.target.value });
    }
    onChangeRating(e) {
        const rating = parseInt(e.target.value);
        this.setState({ rating: rating });
    }

    createItem(e) {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        this.props.onadd({ title: title, image: image, rating: rating });
        this.cancelAction();
    }

    render() {
        return ( <
            div className = "new-item-panel-container" >
            <
            div className = "new-item-panel" >
            <
            form onSubmit = { this.createItem } >
            <
            p >
            <
            label > Título de pelicula < /label><br / >
            <
            input type = "text"
            placeholder = "Nombre de la pelis"
            name = "title"
            className = "input"
            onChange = { this.onChangeTitle }
            /> < /
            p >

            <
            p >
            <
            label > Imagen del portada < /label><br / >
            <
            input type = "text"
            placeholder = "Nombre de imagen"
            name = "image"
            className = "input"
            onChange = { this.onChangeImage }
            /> < /
            p >

            <
            p >
            <
            label > Evaluar < /label><br / >
            <
            select onChange = { this.onChangeRating } >
            <
            option value = "1" > 1 < /option> <
            option value = "2" > 2 < /option> <
            option value = "3" > 3 < /option> <
            option value = "4" > 4 < /option> <
            option value = "5" > 5 < /option> < /
            select > <
            /p> <
            input type = "submit"
            className = "button btn-blue"
            value = "Registrar pelicula" / >
            <
            button className = "button btn-normal"
            onClick = { this.props.onhide } > Cancelar < /button> < /
            form > <
            /div> < /
            div >
        );
    }
}

export default PanelAdd;