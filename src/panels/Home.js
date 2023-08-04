import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Header, Group, Search, Tabbar, TabbarItem, Counter, CardScroll, Card, Link, Image} from '@vkontakte/vkui';
import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';

import './custom.css';

const Home = ({ id, go, fetchedUser }) => (

	<Panel id={id}>
		<Search onClick={go} data-to="earch" value="" after={null} icon={<Icon24Filter />}/>
		
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

		<Tabbar style={{ position: 'sticky'}}>
			<TabbarItem onClick={go} data-to="search" text="Найти">
				<Icon28SearchOutline/>
			</TabbarItem >
			<TabbarItem onClick={go} data-to="ComicsItem" text="Комиксы">
				<Icon28BookSpreadOutline/>
			</TabbarItem >
			<TabbarItem onClick={go} data-to="SeriesItem" text="Серии">
				<Icon28ListBulletSquareOutline/>
			</TabbarItem >
			<TabbarItem text="Моё" indicator={
					<Counter size="s" mode="prominent">
					n
					</Counter>
				}>
				<Icon28UserStarBadgeOutline/>
			</TabbarItem >
		</Tabbar>
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
