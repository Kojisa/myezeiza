import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {TextField,Button,Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'


export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            ps:'',
            us:'',
            error:'',
            logeando:false,
        }

        this.funcLogin = props.onLogin;

    }

    login(){
        let ps = this.state.ps;
        let us = this.state.us;
        let log = this.state.logeando;
        if(ps.length === 0 || us.length === 0 ){
            this.setState({
                error:'Complete todos los campos.'
            })
            console.log('Complete todos los campos.')
        }
        else if(log === true){
            return
        }

        else{
            console.log('login');
            //enviar login
        }
        
    }


    render(){

        let error = <Typography align='center' > {this.state.error} </Typography>

        return(
            <div style={{width:'100vw',height:'100vh'}} >
                <div style={{textAlign:'center'}}> 
                    <TextField 
                        label='Usuario'
                        id='us'
                        onChange={(ev)=>this.setState({
                            us:ev.target.value
                        })}
                        onKeyUp={(ev)=>{
                            if(ev.key === 'enter'){
                                if(this.state.ps.length === 0){
                                    this.refs.ps.focus();
                                }
                                else{
                                    this.login();
                                }
                            }
                        }}
                        value={this.state.us}
                        margin='dense'
                    />
                    <br/>
                    <TextField
                        label='Contraseña'
                        id='ps'
                        onChange={(ev)=>this.setState({
                            ps:ev.target.value
                        })}
                        onKeyUp={(ev)=>{
                            if(ev.key === 'enter'){
                                if(this.state.us.length === 0){
                                    this.refs.us.focus();
                                }
                                else{
                                    this.login();
                                }
                            }
                        }}
                        value={this.state.ps}
                        margin='dense'
                    />
                    <br/>
                    <Button variant='contained' color='primary' onClick={
                        this.login
                    }>

                    </Button>
                    {error}
                </div>

            </div>
        )
    }
}