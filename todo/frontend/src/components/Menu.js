import React from 'react';
import {BrowserRouter, HashRouter, Link} from "react-router-dom";


const Menu = ({is_auth, logout, whoIsUser}) => {
   return (
        <div>
            <HashRouter>
                <nav>
                    <ul className="menu-main">
                        <li><Link className="current" to='/'>Главная страница</Link></li>
                        <li><Link to='/todo'>Заметки</Link></li>
                        <li><Link to='/users'>Пользователи</Link></li>
                        <li><Link to='/projects'>Проекты</Link></li>
                        <li><a href="#">Контакты</a></li>
                        <li>{is_auth() ? <Link onClick={()=>{logout()}}>Пользователь: {whoIsUser} | Выйти</Link> : <Link to='/login'>Войти</Link>}</li>
                    </ul>
                </nav>
            </HashRouter>
        </div>
    )
}

export default Menu
