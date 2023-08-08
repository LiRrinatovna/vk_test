import React from 'react';
import PropTypes from 'prop-types';

import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';
import {Panel, Search, Header, PanelHeaderBack, Group, PanelHeader, Tabbar, TabbarItem, Counter} from '@vkontakte/vkui';
import './custom.css';

function Content(der){
    // der = 1
    if(!der){
        return <p slideWidth="30%">Книги</p>
    }
    return<p slideWidth="30%">Серии</p>
}
const Catalog = props => (
<Panel>
    <PanelHeader
        before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
    >
        <Content />
    </PanelHeader >
</Panel>
);

Catalog.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Catalog;