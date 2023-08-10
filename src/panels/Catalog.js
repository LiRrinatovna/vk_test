import React from 'react';
import PropTypes from 'prop-types';

import { Header, Group, Link, Image } from '@vkontakte/vkui';
import './custom.css';

function Content(der) {
    der = 0
    if (der = 0) {
        return  <Group>
                    <Header slideWidth="30%">Комиксы</Header>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link>
                            Название книги
                        </Link>
                        <span>
                            Название серии
                        </span>
                    </div>
                </Group> 
    }
    if (der = 1) {
        return  <Group>
                    <Header slideWidth="30%">Серии</Header>
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