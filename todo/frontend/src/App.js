import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import ProjectParam from './components/ProjectParam';
import TodoList from './components/Todo.js';
import axios from "axios";
import Menu from './components/Menu'
import Footer from "./components/Footer";
import NotFound404 from "./components/NotFound404";
import {HashRouter, BrowserRouter, Route, Switch, Redirect} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users/').then(
            response => {
                // console.log(response.data.results);
                // console.log(response.data);
                // console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }
        ).catch(error => console.log(error))

        axios.get('http://localhost:8000/api/projects/').then(
            response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }
        ).catch(error => console.log(error))

        axios.get('http://localhost:8000/api/todo/').then(
            response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <div class='row'>
                <Menu/>
                <HashRouter>
                    <Switch>
                        <Route exact path='/users' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todos}/>}/>
                        <Route path='/projects/:name'><ProjectParam projects={this.state.projects}/></Route>

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

