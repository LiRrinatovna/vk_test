import React from 'react';

import {Header, Group, CardScroll, Link, Image} from '@vkontakte/vkui';

import './custom.css';

function Content(props){
	console.log(props)
	if(props.history.name == 'Home'){
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
	// if(props.history.name == 'fav'){
	// 	return(
	// 		<>	
    //     <Header
    //       mode="primary"
    //       aside={
    //       <Link onClick={() => history.push('/comics')}>
    //         Показать все
    //       </Link>
    //       }
    //     >
    //       Комиксы
    //     </Header>
    //     <Group>
    //       <CardScroll size="s">
    //         <div className="card item">
    //           <Image
    //             size={200}
    //             src="./img/check.png"
    //           >
    //           </Image>
    //           <Link onClick={() => history.push('/comics-item')}>
    //             Название книги
    //           </Link>
    //         </div>
    //       </CardScroll>	
    //     </Group>

    //     <Header
    //       mode="primary"
    //       aside={
    //       <Link onClick={() => history.push('/series')}>
    //         Показать все
    //       </Link>
    //       }
    //     >
    //       Серии
    //     </Header>
    //     <Group>
    //       <CardScroll size="s">
    //       <div className="card series">
    //         <Image
    //           size={200}
    //           src="./img/check.png"
    //         >
    //         </Image>
    //         <Link onClick={() => history.push('/series-item')}>
    //           Название серии
    //         </Link>
    //         <span>
    //           5 книг
    //         </span>
    //       </div>
    //       </CardScroll>	
    //     </Group>
    //   </>
	// 	)
	// }
}

const Home = ({history}) => (
		<Content history={history}/>
);


export default Home;
