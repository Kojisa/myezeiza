import React,{Component} from 'react';
import ReactDOM from 'react-dom';




export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            pila:[], //guarda los objetos por los que fue pasando, para mantener las pantallas
        }
        
    }

    volver(obj){
        let pila = this.state.pila;
        pila.slice(0,0,obj);
        this.setState({pila:pila})
    }

}