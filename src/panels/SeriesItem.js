import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, CardGrid, Card, Image} from '@vkontakte/vkui';
import './custom.css';
const ComicsItem = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Название серии
		</PanelHeader >
		<Image 
			className="img"
			size={200}
			src="../img/check.png"
		>
		</Image>
		<Group>
			<p slideWidth="30%">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus quam eget fringilla elementum. Integer in cursus nulla. Nulla placerat massa id dolor mollis, vel placerat odio hendrerit. Phasellus diam libero, porta sed turpis quis, euismod tristique lectus. Proin semper tortor eu orci pulvinar hendrerit. Ut eros enim, cursus ut diam sed, congue congue nibh. Aenean sed ex sit amet nunc maximus tincidunt. Suspendisse ligula diam, finibus cursus dui eget, mollis viverra velit. Morbi ipsum massa, posuere ut ornare sit amet, luctus nec velit. Donec non sollicitudin nisl. Quisque sed enim est. Donec sed arcu dui.
			Nunc elementum enim ac sem porttitor, ut lacinia sapien posuere. Vivamus quis est nulla. Quisque pellentesque sodales dolor, eu ultrices eros placerat at. Curabitur pretium ut lorem at gravida. Donec a hendrerit erat. Ut at dui dui. Phasellus porta massa porttitor feugiat pharetra. Vivamus faucibus vestibulum massa, a pharetra odio convallis non. Fusce eget viverra sapien. Nullam tincidunt luctus dictum. Integer in quam nec urna ornare pretium a at erat. Suspendisse aliquam lorem vitae consequat accumsan. Nullam condimentum euismod hendrerit.
			</p>
		</Group>
		<CardGrid size="s">
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
			<Card>
				<div style={{ paddingBottom: '100%' }} />
			</Card>
		</CardGrid>		
	</Panel>
);

SeriesItem.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default SeriesItem;
