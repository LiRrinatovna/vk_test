import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Panel, PanelHeader, Group, Cell, Badge, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import Search from './panels/Search';
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
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<ComicsItem id='ComicsItem' go={go} />
								<SeriesItem id='SeriesItem' go={go} />
								<Search id='search' go={go} />
								<Catalog id='Catalog' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
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
									onClick={go}
									data-to="search"
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
							<View id="feed" activePanel="feed">
							<Panel id="feed">
								<PanelHeader before={<PanelHeaderBack />}>Найти</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28SearchOutline width={56} height={56} />} />
								</Group>
							</Panel>
							</View>
							<View id="services" activePanel="services">
							<Panel id="services">
								<PanelHeader before={<PanelHeaderBack />}>Комиксы</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28BookSpreadOutline width={56} height={56} />}></Placeholder>
								</Group>
							</Panel>
							</View>
							<View id="clips" activePanel="clips">
							<Panel id="clips">
								<PanelHeader before={<PanelHeaderBack />}>Серии</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28ListBulletSquareOutline width={56} height={56} />}></Placeholder>
								</Group>
							</Panel>
							</View>
							<View id="messages" activePanel="messages">
							<Panel id="messages">
								<PanelHeader before={<PanelHeaderBack />}>Моё</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder
									icon={<Icon28UserStarBadgeOutline width={56} height={56} />}
								></Placeholder>
								</Group>
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
