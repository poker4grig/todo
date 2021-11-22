import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './components/User.js';
import axios from "axios";
import Menu from './components/Menu'
import Footer from "./components/Footer";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users/').then(
            response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => console.log(error))
    }

    // const users = [
    //     {
    //         'username': 'sergey',
    //         'first_name': 'Сергей',
    //         'last_name': 'Григорьев',
    //         'email': 'poker4grig@mail.ru'
    //     },
    //     {
    //         'username': 'denis',
    //         'first_name' : 'Денис',
    //         'last_name': 'Давыдов',
    //         'email': 'denden@yandex.ru'
    //     },
    //     {
    //         'username': 'vasya',
    //         'first_name' : 'Василий',
    //         'last_name': 'Александров',
    //         'email': 'vasya@gmail.com.ru'
    //     }
    // ]


    render() {
        return (
            <div class='row'>
                <Menu/>
                <UserList users={this.state.users}/>
                <Footer/>
            </div>
        )
    }
}

export default App;