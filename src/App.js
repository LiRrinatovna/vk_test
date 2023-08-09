import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Panel, Search } from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline, Icon24Filter} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import SearchPg from './panels/Search';
import Catalog from './panels/Catalog';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	
	const [activeStory, setActiveStory] = React.useState('profile');
	const activeStoryStyles = {
	  backgroundColor: 'var(--vkui--color_background_secondary)',
	  borderRadius: 8,
	};
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<Search onClick={go} data-to="searchPg" value="" after={null} icon={<Icon24Filter/>}/>
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
									selected={activeStory === 'services'}
									data-story="services"
									text="Комиксы"
								>
									<Icon28BookSpreadOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'clips'}
									data-story="clips"
									text="Серии"
								>
									<Icon28ListBulletSquareOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'messages'}
									data-story="messages"
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
							<View id="search" activePanel="search">
								<Panel id="search">
									<SearchPg id='searchPg' go={go} />
								</Panel>
							</View>
							<View id="services" activePanel="services">
								<Panel id="services">
									<ComicsItem id='ComicsItem' go={go} />
								</Panel>
							</View>
							<View id="clips" activePanel="clips">
								<Panel id="clips">
									<SeriesItem id='SeriesItem' go={go} />
								</Panel>
							</View>
							<View id="messages" activePanel="messages">
								<Panel id="messages">
									<Home id='home' fetchedUser={fetchedUser} go={go} />
								</Panel>
							</View>
						</Epic>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
		
	
	);
}

export default App;
