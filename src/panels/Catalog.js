import React from 'react';
import PropTypes from 'prop-types';

import { Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline } from '@vkontakte/icons';
import { Panel, Search, Header, PanelHeaderBack, Group, PanelHeader, Tabbar, TabbarItem, Counter } from '@vkontakte/vkui';
import './custom.css';

function Content(der) {
    der = 0
    if (der = 0) {
        return (
            <Group>
                <Header slideWidth="30%">Книги</Header>
                <div className="card series">
                    <Image
                        size={200}
                        src="../img/check.png"
                    >
                    </Image>
                    <Link onClick={go} data-to="SeriesItem">
                        Название книги
                    </Link>
                    <span>
                        Серия
                    </span>
                </div>
                <div className="card series">
                    <Image
                        size={200}
                        src="../img/check.png"
                    >
                    </Image>
                    <Link onClick={go} data-to="SeriesItem">
                        Название книги
                    </Link>
                    <span>
                        Серия
                    </span>
                </div>
            </Group>
            );
    }
    if (der = 1) {
        return (
                <Group>
                    <Header slideWidth="30%">Серии</Header>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link onClick={go} data-to="SeriesItem">
                            Название серии
                        </Link>
                        <span>
                            5 книг
                        </span>
                    </div>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link onClick={go} data-to="SeriesItem">
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
const Catalog = props => (

    <Content />

);

Catalog.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Catalog;