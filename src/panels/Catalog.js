import React from 'react';
import PropTypes from 'prop-types';

import { Header, Group, Link, Image, CardGrid } from '@vkontakte/vkui';

import './custom.css';

function Content(props) {
    console.log(props)
    if (props.props.tab == "comics") {
        return <>
        <Header mode="primary">
            Комиксы
        </Header>
        <Group>
            <CardGrid size="s">
                <div className="card series">
                    <Image
                        size={200}
                        src="../img/check.png"
                    >
                    </Image>
                    <Link onClick={() => props.props.go({id: "comicsItem", from: "comics" })} data-to="comicsItem">
                        Название книги
                    </Link>
                    <span>
                        Название серии
                    </span>
                </div>
            </CardGrid> 
        </Group>
        </>
    }
    if (props.props.tab == "series") {
        return <>
            <Header mode="primary">
				Серии
			</Header>
            <Group>    
                <CardGrid>
                    <div className="card series">
                        <Image
                            size={200}
                            src="../img/check.png"
                        >
                        </Image>
                        <Link onClick={() => props.props.go({id: "seriesItem", from: "series" })} data-to="seriesItem">
                            Название серии
                        </Link>
                        <span>
                            5 книг
                        </span>
                    </div>
                </CardGrid>
            </Group>
        </>
        
    }

}

const Catalog = (props) => (

    <Content props={props} />

);

Catalog.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired,
};

export default Catalog;