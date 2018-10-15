import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            menu:[],
            seccion:'',
        };
        this.darTitulo = this.darTitulo.bind(this);
    }



    darTitulo(texto){
        this.setState({
            seccion:texto
        })
    }

    render(){

        return(
            <AppBar position='static' >
                <Toolbar>
                    <IconButton color='inherit' >
                        <HomeIcon/>
                    </IconButton>
                    <Typography>
                        {this.state.seccion}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
        
    }

}