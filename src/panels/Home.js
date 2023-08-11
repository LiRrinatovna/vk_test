import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';

import './custom.css';

const Home = ({ id, go, tab }) => (

	<Panel id={id}>
		<Header
			mode="primary"
			aside={
			<Link onClick={() => props.go({id: "comics"})} data-to="comics">
				Показать все
			</Link>
			}
		>
			Комиксы
		</Header>
		<Group>
			<CardScroll size="s">
				<div className="card item">
					<Image
						size={200}
						src="./img/check.png"
					>
					</Image>
					<Link onClick={() => go({id: "comicsItem"})} data-to="comicsItem">
						Название книги
					</Link>
				</div>
			</CardScroll>	
		</Group>

		<Header
			mode="primary"
			aside={
			<Link onClick={() => props.go({id: "comics"})} data-to="comics">
				Показать все
			</Link>
			}
		>
			Серии
		</Header>
		<Group>
			<CardScroll size="s">
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
			</CardScroll>	
		</Group>

		
	</Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired,
};


export default Home;
