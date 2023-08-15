import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Panel, Search } from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline, Icon24Filter} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import Catalog from './panels/Catalog';


const App = () => {

	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [activeStory, setActiveStory] = React.useState('home');
	// const activeStoryStyles = {
	//   backgroundColor: 'var(--vkui--color_background_secondary)',
	//   borderRadius: 8,
	// };
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  

	useEffect(() => {
		bridge.subscribe(({detail: {type, data}}) =>{
			if( type === 'VKWebAppUpdateConfig'){
				const schemeAttriute = document.createAttribute('scheme');
				schemeAttriute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttriute); 
			}
		})
		// async function fetchData() {
		// 	const user = await bridge.send('VKWebAppGetUserInfo');
		// 	setUser(user);
		// 	setPopout(null);
		// }
		// fetchData();
	}, []);

	const go = ({id, from}) => {
		if(from) {
			setActiveStory(from)
		} else {
			setActiveStory(id) 
		}
	}

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<Search onClick={go} data-to="я" value="" after={null} icon={<Icon24Filter/>}/>
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
									selected={activeStory === 'home'}
									data-story="home"
									
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
							
						<Panel id="home">
							<Home tab="home" id='home' go={go} />
						</Panel>
					
						<Panel id="comics">
							<Catalog tab="comics" id='catalog' go={go} />
						</Panel>
					
						<Panel id="series">
							<Catalog tab="series" id='catalog' go={go} />
						</Panel>
			
						<Panel id="fav">
							<Home tab="fav" id='home' go={go} />
						</Panel>

						<Panel id="comicsItem">
							<ComicsItem id='comicsItem' go={go} />
						</Panel>
						
						<Panel id="seriesItem">
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
