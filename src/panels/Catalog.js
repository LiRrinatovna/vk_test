import React from 'react';
import PropTypes from 'prop-types';
import {Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';

import './custom.css';


function Content(props, history){
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
							<Link onClick={() => history.push('/comics/:id')}>
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
						<Link onClick={() => history.push('/series/:id')}>
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
					<Link onClick={() => history.push('/catalog')}>
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
							<Link onClick={() => history.push('/comics/:id')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => history.push('/catalog')}>
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
						<Link onClick={() => history.push('/series/:id')}>
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

const Catalog = (props) => (
	<Content history={history} props={props}/>
);


Catalog.propTypes = {
    route: PropTypes.string.isRequired,
};

export default Catalog;
