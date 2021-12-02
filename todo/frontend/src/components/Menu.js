import React from 'react';
import {BrowserRouter, HashRouter, Link} from "react-router-dom";



const Menu = () => {
    return (
        <div>
            <HashRouter>
                <nav>
                    <ul className="menu-main">
                        <li><Link className="current" to='/'>Главная страница</Link></li>
                        <li><Link to='/todo'>Заметки</Link></li>
                        <li><Link to='/users'>Пользователи</Link></li>
                        <li><Link to='/projects'>Проекты</Link></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </HashRouter>
        </div>
    )
}

export default Menu