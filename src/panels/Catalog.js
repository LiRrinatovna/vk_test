import React from 'react';
import PropTypes from 'prop-types';

import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';
import {Panel, Search, Header, PanelHeaderBack, Group, PanelHeader, Tabbar, TabbarItem, Counter} from '@vkontakte/vkui';
import './custom.css';

function Content(der){
    der = 0
    if(der = 0){
        return <p slideWidth="30%">Серии</p>
    }
    if(der = 1){
        return<p slideWidth="30%">Книги</p>
    }
    
}
const Catalog = props => (

        <Content />

);

Catalog.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Catalog;