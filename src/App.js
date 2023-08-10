import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Panel, Search } from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline, Icon24Filter} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import SearchPg from './panels/Search';
import Catalog from './panels/Catalog';


const App = () => {

	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [activeStory, setActiveStory] = React.useState('home');
	// const activeStoryStyles = {
	//   backgroundColor: 'var(--vkui--color_background_secondary)',
	//   borderRadius: 8,
	// };
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  

	useEffect(() => {
		bridge.subscribe(({detail: {type, data}}) =>{
			if( type == 'VKWebAppUpdateConfig'){
				const schemeAttriute = document.createAttribute('scheme');
				schemeAttriute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttriute); 
			}
		})
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = ({id}) => {
		console.log(id)
		setActiveStory(id);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<Search onClick={go} data-to="я" value="" after={null} icon={<Icon24Filter/>}/>
					{/*<SearchPg id='searchPg' go={go} />
					<ComicsItem id='ComicsItem' go={go} />
					<SeriesItem id='SeriesItem' go={go} />
					<Home id='home' fetchedUser={fetchedUser} go={go} /> */}
					<SplitLayout
						style={{ justifyContent: 'center' }}
					>			
						<SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
						<Epic
							activeStory={activeStory}
							tabbar={
							(
								<Tabbar>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'search'}
									data-story="search"
									
									text="Найти"
								>
									<Icon28SearchOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'comics'}
									data-story="comics"
									text="Комиксы"
								>
									<Icon28BookSpreadOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'home'}
									data-story="home"
									text="Главная"
								>
									<Icon28BookSpreadOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'series'}
									data-story="series"
									text="Серии"
								>
									<Icon28ListBulletSquareOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'fav'}
									data-story="fav"
									indicator={
									<Counter size="s" mode="prominent">
										n
									</Counter>
									}
									text="Моё"
								>
									<Icon28UserStarBadgeOutline />
								</TabbarItem>
								</Tabbar>
							)
							}
						>
							
						<Panel id="search">
							<SearchPg id='searchPg' go={go} />
						</Panel>
					
						<Panel id="comics">
							<Catalog id='Catalog' go={go} />
						</Panel>
					
						<Panel id="home">
							<Home id='home' go={go} />
						</Panel>
					
						<Panel id="series">
							<Catalog id='Catalog' go={go} />
						</Panel>
			
						<Panel id="fav">
							<Home id='home' go={go} />
						</Panel>

						<Panel id="comicsItm">
							<ComicsItem id='comicsItem' go={go} />
						</Panel>
						
						<Panel id="seriesItm">
							<SeriesItem id='seriesItem' go={go} />
						</Panel>
					
						</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
