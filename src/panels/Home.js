import React from 'react';
import PropTypes from 'prop-types';
import {Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';

import './custom.css';


function Content(props){
	console.log(props)
	if(props.props.route == '/'){
		return(	
			<>	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => history.push('/comics')}>
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
							<Link onClick={() => history.push('/comics-item')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => history.push('/series')}>
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
						<Link onClick={() => history.push('/series-item')}>
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
					<Link onClick={() => history.push('/comics')}>
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
							<Link onClick={() => history.push('/comics-item')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => history.push('/series')}>
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
						<Link onClick={() => history.push('/series-item')}>
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
    history: PropTypes.func.isRequired,
};

export default Home;
