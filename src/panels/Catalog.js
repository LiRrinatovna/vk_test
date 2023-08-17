import React from 'react';
import PropTypes from 'prop-types';
import {Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';
import { useNavigate } from 'react-router-dom';
import './custom.css';


function Content(props){
	const navigate = useNavigate();
	console.log(props)
	if(props.props.route == '/comics'){
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
							<Link onClick={() => navigate('/comics')}>
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
	
				<Header
					mode="primary"
					aside={
					<Link onClick={() => navigate('/comics')}>
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
						<Link onClick={() => navigate('/comics')}>
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
	if(props.props.route == '/series'){
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
	<Content navigate={navigate} props={props}/>
);


Catalog.propTypes = {
    route: PropTypes.string.isRequired,
};

export default Catalog;
