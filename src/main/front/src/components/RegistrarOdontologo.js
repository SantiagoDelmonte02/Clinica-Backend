import React, { Component } from 'react';
import './styles/Register.css'

import { registrar } from './crud/post_odontologo'

class Register extends Component {

    render() {

        return (
            <div>
                <div class="login">
                    <form>
                        <h2>Registrar Odontologo</h2>
                
                        <input class="entrada" id="nombre" type="text" name="nombre" placeholder="Nombre"/>
                        <input class="entrada" id="apellido" type="text" name="apellido" placeholder="Apellido"/>
                        <input class="entrada" id="matricula" type="number" name="matricula" placeholder="Matricula"/>

                        <input class="resetear" type="reset" value="Reiniciar"/>
                        <input onClick={registrar} class="entrar" type="button" value="Registrar"/>   
    
                    </form>
                </div>

            </div>
        );
    }
}

export default Register;
