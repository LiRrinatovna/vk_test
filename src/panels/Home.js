import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';

import './custom.css';

function Content(props){
	console.log(props)
	if(props.props.tab == 'home'){
	return(	
		<>	
			<Header
				mode="primary"
				aside={
				<Link onClick={() =>  props.props.go({id: "comics"})} data-to="comics">
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
						<Link onClick={() => props.props.go({id: "comicsItem"})} data-to="comicsItem">
							Название книги
						</Link>
					</div>
				</CardScroll>	
			</Group>

			<Header
				mode="primary"
				aside={
				<Link onClick={() => props.props.go({id: "series"})} data-to="series">
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
					<Link onClick={() => props.props.go({id: "seriesItem"})} data-to="seriesItem">
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
	if(props.props.tab == 'fav'){
		return(
			<>
				<Header
					mode="primary"
					aside={
					<Link onClick={() => props.props.go({id: "series"})} data-to="series">
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
							<Link onClick={() => props.props.go({id: "comicsItem"})} data-to="comicsItem">
								Название книги
							</Link>
						</div>
					</CardScroll>	
				</Group>
			
				<Header
					mode="primary"
					aside={
					<Link onClick={() => props.props.go({id: "comics"})} data-to="comics">
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
						<Link onClick={() => props.props.go({id: "seriesItem"})} data-to="seriesItem">
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
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired,
};


export default Home;
