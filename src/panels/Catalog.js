import React from 'react';
import PropTypes from 'prop-types';

import { Header, Group, Link, Image } from '@vkontakte/vkui';
import './custom.css';

function Content(tab) {
    if (tab == "comics") {
        return  <Group>
                    <Header slideWidth="30%">Комиксы</Header>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link onClick={() => go({id: "comicsItem"})} data-to="comicsItem">
                            Название книги
                        </Link>
                        <span>
                            Название серии
                        </span>
                    </div>
                </Group> 
    }
    if (tab == "series") {
        return  <Group>
                    <Header slideWidth="30%">Серии</Header>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link onClick={() => go({id: "seriesItem"})} data-to="seriesItem">
                            Название серии
                        </Link>
                        <span>
                            5 книг
                        </span>
                    </div>
                </Group> 
    }

}

const Catalog = (props) => (

    <Content tab={props={tab}} />

);

Catalog.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired,
};

export default Catalog;