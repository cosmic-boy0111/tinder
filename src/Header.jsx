import React from 'react'
import './Header.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';


const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonRoundedIcon fontSize='large' className='header__icon'/>
            </IconButton>
            <img className="header__logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="" />
            <IconButton>
                <ForumRoundedIcon fontSize='large' className='header__icon'/>
            </IconButton>

        </div>
    )
}

export default Header

