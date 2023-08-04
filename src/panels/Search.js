import React from 'react';
import PropTypes from 'prop-types';

import {Panel, CardGrid, Card, Search} from '@vkontakte/vkui';
import './custom.css';

function SearchRes(der){
    der = 1
    if(der){
        <p slideWidth="30%">
			Поиск пуст
        </p>
    }
    <CardGrid size="s">
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
        <Card>
            <div style={{ paddingBottom: '100%' }} />
        </Card>
    </CardGrid>	
}

<Panel id="panel1">
    <Search value="" after={null} icon={<Icon24Filter />}/>
    <SearchRes />	
</Panel>

Search.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Search;