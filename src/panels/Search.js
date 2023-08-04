import React from 'react';
import PropTypes from 'prop-types';

import {Icon24Filter} from '@vkontakte/icons';
import {Panel, Search, Header, PanelHeaderBack, Group, PanelHeader, Image, Link} from '@vkontakte/vkui';
import './custom.css';

function SearchRes(der){
    der = 1
    if(!der){
        return <p slideWidth="30%">Поиск пуст</p>
    }
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
const search = props => (
<Panel>
    <PanelHeader
        before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
    >
        Название серии
    </PanelHeader >
    <Search value="" icon={<Icon24Filter />}/>
    <SearchRes />	
</Panel>
);

search.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default search;