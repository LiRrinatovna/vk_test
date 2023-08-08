import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter } from '@vkontakte/vkui';
import {Icon24Filter, Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline} from '@vkontakte/icons';
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
	const platform = usePlatform();
	const { viewWidth } = useAdaptivityConditionalRender();
	const [activeStory, setActiveStory] = React.useState('profile');
	const activeStoryStyles = {
	  backgroundColor: 'var(--vkui--color_background_secondary)',
	  borderRadius: 8,
	};
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isVKCOM = platform !== Platform.VKCOM;
  

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
						header={isVKCOM && <PanelHeader separator={false} />}
						style={{ justifyContent: 'center' }}
					>
						{viewWidth.tabletPlus && (
						<SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
							<Panel>
							{isVKCOM && <PanelHeader />}
							<Group>
								<Cell
								disabled={activeStory === 'feed'}
								style={activeStory === 'feed' ? activeStoryStyles : undefined}
								data-story="feed"
								onClick={onStoryChange}
								before={<Icon28NewsfeedOutline />}
								>
								feed
								</Cell>
								<Cell
								disabled={activeStory === 'services'}
								style={activeStory === 'services' ? activeStoryStyles : undefined}
								data-story="services"
								onClick={onStoryChange}
								before={<Icon28ServicesOutline />}
								>
								services
								</Cell>
								<Cell
								disabled={activeStory === 'messages'}
								style={activeStory === 'messages' ? activeStoryStyles : undefined}
								data-story="messages"
								onClick={onStoryChange}
								before={<Icon28MessageOutline />}
								>
								messages
								</Cell>
								<Cell
								disabled={activeStory === 'clips'}
								style={activeStory === 'clips' ? activeStoryStyles : undefined}
								data-story="clips"
								onClick={onStoryChange}
								before={<Icon28ClipOutline />}
								>
								clips
								</Cell>
								<Cell
								disabled={activeStory === 'profile'}
								style={activeStory === 'profile' ? activeStoryStyles : undefined}
								data-story="profile"
								onClick={onStoryChange}
								before={<Icon28UserCircleOutline />}
								>
								profile
								</Cell>
							</Group>
							</Panel>
						</SplitCol>
						)}
				
						<SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
						<Epic
							activeStory={activeStory}
							tabbar={
							viewWidth.tabletMinus && (
								<Tabbar className={viewWidth.tabletMinus.className}>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'feed'}
									data-story="feed"
									text="Новости"
								>
									<Icon28NewsfeedOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'services'}
									data-story="services"
									text="Сервисы"
								>
									<Icon28ServicesOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'messages'}
									data-story="messages"
									indicator={
									<Counter size="s" mode="prominent">
										12
									</Counter>
									}
									text="Сообщения"
								>
									<Icon28MessageOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'clips'}
									data-story="clips"
									text="Клипы"
								>
									<Icon28ClipOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === 'profile'}
									data-story="profile"
									indicator={<Badge mode="prominent" />}
									text="Профиль"
								>
									<Icon28UserCircleOutline />
								</TabbarItem>
								</Tabbar>
							)
							}
						>
							<View id="feed" activePanel="feed">
							<Panel id="feed">
								<PanelHeader before={<PanelHeaderBack />}>Новости</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
								</Group>
							</Panel>
							</View>
							<View id="services" activePanel="services">
							<Panel id="services">
								<PanelHeader before={<PanelHeaderBack />}>Сервисы</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}></Placeholder>
								</Group>
							</Panel>
							</View>
							<View id="messages" activePanel="messages">
							<Panel id="messages">
								<PanelHeader before={<PanelHeaderBack />}>Сообщения</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
								</Group>
							</Panel>
							</View>
							<View id="clips" activePanel="clips">
							<Panel id="clips">
								<PanelHeader before={<PanelHeaderBack />}>Клипы</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>
								</Group>
							</Panel>
							</View>
							<View id="profile" activePanel="profile">
							<Panel id="profile">
								<PanelHeader before={<PanelHeaderBack />}>Профиль</PanelHeader>
								<Group style={{ height: '1000px' }}>
								<Placeholder
									icon={<Icon28UserCircleOutline width={56} height={56} />}
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
