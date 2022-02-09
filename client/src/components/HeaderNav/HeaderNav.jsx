import React from 'react';
import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/userAC';
import { ButtonNav } from './ButtonNav';

function HeaderNav() {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(userLogout())
    navigate('/')
  };

  return (
    <nav className={style.NavbarItems}>

      <h1 className={style.navbar_logo}>Соседушка<i className='fa-solid fa-users'></i></h1>

      <ul className={style.nav_menu}>

        {user ?

          <>
            <Link to={'/profile'}>
              <li key="1">
                <span className={style.nav_links}>Личный кабинет</span>
              </li>
            </Link>

            <Link to={'/'}>
              <li key="2">
                <span className={style.nav_links}>Главная</span>
              </li>
            </Link>

            <li key="3">
              <span className={style.nav_links} onClick={logoutHandler}>Выйти</span>
            </li>

          </>
          :
          <>

            <Link to={'/signin'}>
              <li key="4">
                <span className={style.nav_links}>Войти</span>
              </li>
            </Link>

            <Link to={'/signup'}><ButtonNav>Регистация</ButtonNav></Link>
          </>
        }

      </ul>
    </nav>
  )
}

export default HeaderNav;
