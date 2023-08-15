import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bridge from '@vkontakte/vk-bridge';
import {SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Search} from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline, Icon24Filter} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import Catalog from './panels/Catalog';



const App = ({history}) => {
  const navigate = useNavigate();

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

  const [activePath, setActivePath] = useState('/')
  const [activeTab, setActiveTab] = useState('home');

  const onTabClick = (tab) => {
    console.log(tab)
    
    setActivePath(routes[tab]);
    setActiveTab(tab);
  
  }
  const routes = {
    HOME: '/',
    FAV: '/fav',
    COMICS: '/comics',
    SERIES: '/series',
    COMIC: '/comic/:id',
    SERIES_DETAIL: '/series/:id'
  }

	return ( 
    <>
    <Search icon={<Icon24Filter/>}/>  
      <SplitLayout
          style={{ justifyContent: 'center' }}
      >			
      
        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
          <Epic
          
          tabbar={
            (
                <Tabbar>
                <TabbarItem
                    history={history}
                    onClick={() => onTabClick('HOME')}
                    selected={activeTab === 'HOME'}
                    data-story="home"
                    text="Найти"
                >
                    <Icon28SearchOutline />
                </TabbarItem>
                <TabbarItem
                    history={history}
                    onClick={() => onTabClick('comics')}
                    selected={activeTab === 'comics'}
                    data-story="comics"
                    text="Комиксы"
                >
                    <Icon28BookSpreadOutline />
                </TabbarItem>
                <TabbarItem
                    history={history}
                    onClick={() => onTabClick('series')}
                    selected={activeTab === 'series'}
                    data-story="series"
                    text="Серии"
                >
                    <Icon28ListBulletSquareOutline />
                </TabbarItem>
                <TabbarItem
                    history={history}
                    onClick={() => onTabClick('FAV')}
                    selected={activeTab === 'FAV'}
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
            }>
              <Routes>
                <Route
                  path="/"
                  element={<Home history={Home} />} 
                />
          
                <Route
                  path="/comics"
                  component={Catalog}
                />

                <Route
                  path="/series"
                  component={Catalog} 
                />

                <Route
                  path="/fav"
                  element={<Home history={fav} />} 
                />

                <Route
                  path={activePath}
                  component={ComicsItem}
                />

                <Route
                  path={activePath}
                  component={SeriesItem}
                />
              </Routes>
          </Epic>
        </SplitCol>
      </SplitLayout>  
    </>
	);
}

export default App;
