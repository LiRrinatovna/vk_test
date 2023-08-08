import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Header, Group, Search, Tabbar, TabbarItem, Counter, CardScroll, Card, Link, Image, Epic} from '@vkontakte/vkui';
import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';

import './custom.css';

const Home = ({ id, go, fetchedUser }) => (

	<Panel id={id}>

		<Search onClick={go} data-to="search" value="" after={null} icon={<Icon24Filter />}/>
		
		<Header
			mode="primary"
			aside={
			<Link data-idslide='1' data-id='tab_all'>
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
					<Link onClick={go} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
				<div className="card item">
					<Image
						size={200}
						src="../img/check.png"
					>
					</Image>
					<Link onClick={go} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
				<div className="card item">
					<Image
						size={200}
						src="../img/check.png"
					>
					</Image>
					<Link onClick={go} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
				<div className="card item">
					<Image
						size={200}
						src="../img/check.png"
					>
					</Image>
					<Link onClick={go} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
				<div className="card item">
					<Image
						size={200}
						src="../img/check.png"
					>
					</Image>
					<Link onClick={go} data-to="ComicsItem">
						Название книги
					</Link>
				</div>
			</CardScroll>	
		</Group>

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
		<Group>
			<CardScroll size="s">
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
