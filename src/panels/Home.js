import React from 'react';
import PropTypes from 'prop-types';
import {Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';
import { useNavigate } from 'react-router-dom';

import './custom.css';


function Content(props){
	console.log(props)
	const navigate = useNavigate();

	if(props.props.route == '/'){
		return(	
			<>	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => navigate('/comics')}>
						Показать все HOME
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
							<Link onClick={() => navigate('/comics/:id')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link  onClick={() => navigate('/series')}>
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
							src="./img/check.png"
						>
						</Image>
						<Link onClick={() => navigate('/series/:id')}>
							Название серии
						</Link>
						<span>
							5 книг
						</span>
					</div>
					</CardScroll>
				</Group>
			</>
			)
	}
	if(props.props.route == '/fav'){
		return(	
			<>	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => navigate('/comics')}>
						Показать все FAV
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
							<Link onClick={() => navigate('/comics/:id')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => navigate('/series')}>
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
							src="./img/check.png"
						>
						</Image>
						<Link onClick={() => navigate('/series/:id')}>
							Название серии
						</Link>
						<span>
							5 книг
						</span>
					</div>
					</CardScroll>	
				</Group>
			</>
		)
	}
}

const Home = (props) => (
	<Content props={props}/>
);

Home.propTypes = {
	route: PropTypes.string.isRequired,
};

export default Home;
