import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cookies from "universal-cookie/lib";
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import ProjectParam from './components/ProjectParam';
import TodoList from './components/Todo.js';
import axios from "axios";
import Menu from './components/Menu'
import Footer from "./components/Footer";
import NotFound404 from "./components/NotFound404";
import {HashRouter, BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import LoginForm from "./components/LoginForm";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token': '',
            'whoIsUser': '',
        }
    }

    set_token(token, username) {
        // console.log(token)
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token, 'whoIsUser': username}, () => this.load_data())
        // console.log(this.state['token'])
    }

    is_auth() {
        return !!this.state.token
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        // localStorage.setItem('login', 'username')
        // let item = localStorage.getItem('login')
        // document.cookie = `login=poker4grig;password=2`
        const data = {username: username, password: password}
        axios.post('http://127.0.0.1:8000/api-token-auth/', data).then(
            response => {
                this.set_token(response.data['token'], username)
                console.log(response.data)
            }
        ).catch(error => alert('Неверный логин или пароль '))
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://localhost:8000/api/users/', {headers}).then(
            response => {
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => {
            console.log(error)
            this.setState({users: []})
        })

        axios.get('http://localhost:8000/api/projects/', {headers}).then(
            response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }
        ).catch(error => {
            console.log(error)
            this.setState({projects: []})
        })

        axios.get('http://localhost:8000/api/todo/', {headers}).then(
            response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }
        ).catch(error => {
            console.log(error)
            this.setState({todos: []})
        })
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()){
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render() {
        return (
            <div class='row'>
                <Menu is_auth={this.is_auth.bind(this)} logout={() => {this.logout()}} whoIsUser={this.state.whoIsUser} />
                <HashRouter>
                    <Switch>
                        <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todos}/>}/>
                        <Route path='/projects/:name'><ProjectParam projects={this.state.projects}
                                                                    users={this.state.users}/></Route>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Redirect from='/project' to='/projects'/>
                        <Redirect from='/user' to='/users'/>

                        <Route component={(NotFound404)}/> } />
                    </Switch>
                </HashRouter>
                <Footer/>
            </div>
        )
    }
}


export default App;

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

 //