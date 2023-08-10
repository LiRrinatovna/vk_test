import React from 'react';
import PropTypes from 'prop-types';

import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';
import {Panel, Search, Header, PanelHeaderBack, Group, PanelHeader, Image, Link, Tabbar, TabbarItem, Counter, Epic} from '@vkontakte/vkui';
import './custom.css';

function SearchRes(dqr){
    dqr = 0
    if(dqr = 1){
        return <p slideWidth="30%">Поиск пуст</p>
    }
    if(dqr = 0){
        return(
            <Group>
                 <Header
                    mode="primary"
                    aside={
                    <Link data-idslide='1' data-id='tab_all'>
                        Показать все
                    </Link>
                    }
                >
                    Книги
                </Header>
                <div className="card item">
                    <Image
                        size={200}
                        src="../img/check.png"
                    >
                    </Image>
                    <Link>
                        Название книги
                    </Link>
                </div>
                <Header
                mode="primary"
                aside={
                <Link data-idslide='1' data-id='tab_all'>
                    Показать все
                </Link>
                }
                >
                     Серии
                 </Header>
                <div className="card series">
                    <Image
                        size={200}
                        src="../img/check.png"
                    >
                    </Image>
                    <Link>
                        Название серии
                    </Link>
                    <span>
                        5 книг
                    </span>
                </div>
            
            </Group>
            
               
        );
    }
   
}
const search = props => (
  
        <SearchRes />

);

search.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default search;