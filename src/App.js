import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import bridge from '@vkontakte/vk-bridge';
import {SplitLayout, SplitCol, Epic, Tabbar, TabbarItem, Counter, Search} from '@vkontakte/vkui';
import {Icon28SearchOutline, Icon28BookSpreadOutline, Icon28ListBulletSquareOutline, Icon28UserStarBadgeOutline, Icon24Filter} from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';


import Home from './panels/Home';
import ComicsItem from './panels/ComicsItem';
import SeriesItem from './panels/SeriesItem';
import Catalog from './panels/Catalog';
import { hot } from 'react-hot-loader';



const App = ({history}) => {  

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
  const [activeTab, setActiveTab] = useState('HOME');

  const onTabClick = (tab) => {
    // console.log(tab)
    
    setActivePath(routes[tab]);
    setActiveTab(tab);
  
  }

  const routes = {
    HOME: '/',
    FAV: '/fav',
    COMICS: '/comics',
    SERIES: '/series',
    COMICS_ITEM: '/comic/:id',
    SERIES_ITEM: '/series/:id'
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
                    onClick={() => onTabClick('COMICS')}
                    selected={activeTab === 'COMICS'}
                    data-story="comics"
                    text="Комиксы"
                >
                    <Icon28BookSpreadOutline />
                </TabbarItem>
                <TabbarItem
                    history={history}
                    onClick={() => onTabClick('SERIES')}
                    selected={activeTab === 'SERIES'}
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
                  element={<Home history={history} route={activePath}/>} 
                />
          
                <Route
                  path="/comics"
                  element={<Catalog history={history} route={activePath}/>} 
                />

                <Route
                  path="/series"
                  element={<Catalog history={history} route={activePath}/>}  
                />

                <Route
                  path="/fav"
                  element={<Home history={history} route={activePath}/>} 
                />

                <Route
                  path="/comic/:id"
                  route={activePath}
                />

                <Route
                  path="/series/:id"
                  route={activePath}
                />
                </Routes>
          </Epic>
        </SplitCol>
      </SplitLayout>  
    </>
	);
}

export default App;
