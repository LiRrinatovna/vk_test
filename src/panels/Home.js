import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Header, Group, Search, Tabbar, TabbarItem, Counter, CardScroll, Card, Link, Image} from '@vkontakte/vkui';

import './custom.css';

const Home = ({ id, go }) => (

	<Panel id={id}>
		<Header
			mode="primary"
			aside={
			<Link onClick={go} data-to="Catalog">
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
						src="../img/check.png"
					>
					</Image>
					<Link onClick={() => go({id: "ComicsItem"})} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
			</CardScroll>	
		</Group>

		<Header
			mode="primary"
			aside={
			<Link onClick={go => "Catalog" }>
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
				<Link onClick={() => go({id: "SeriesItem"})} data-to="SeriesItem">
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
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
