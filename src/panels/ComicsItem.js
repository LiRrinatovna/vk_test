import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Gallery, Group, Header,Title, Avatar, Link, Image, HorizontalCell} from '@vkontakte/vkui';
import './custom.css';
const ComicsItem = props => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={() => props.go({id: "fav"})}/>}
		>
			Название книги
		</PanelHeader >
		<Image
			size={200}
			src="../img/check.png"
			className="img"
		>
		</Image>
		<Group>
			<p slideWidth="30%">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus quam eget fringilla elementum. Integer in cursus nulla. Nulla placerat massa id dolor mollis, vel placerat odio hendrerit. Phasellus diam libero, porta sed turpis quis, euismod tristique lectus. Proin semper tortor eu orci pulvinar hendrerit. Ut eros enim, cursus ut diam sed, congue congue nibh. Aenean sed ex sit amet nunc maximus tincidunt. Suspendisse ligula diam, finibus cursus dui eget, mollis viverra velit. Morbi ipsum massa, posuere ut ornare sit amet, luctus nec velit. Donec non sollicitudin nisl. Quisque sed enim est. Donec sed arcu dui.
			Nunc elementum enim ac sem porttitor, ut lacinia sapien posuere. Vivamus quis est nulla. Quisque pellentesque sodales dolor, eu ultrices eros placerat at. Curabitur pretium ut lorem at gravida. Donec a hendrerit erat. Ut at dui dui. Phasellus porta massa porttitor feugiat pharetra. Vivamus faucibus vestibulum massa, a pharetra odio convallis non. Fusce eget viverra sapien. Nullam tincidunt luctus dictum. Integer in quam nec urna ornare pretium a at erat. Suspendisse aliquam lorem vitae consequat accumsan. Nullam condimentum euismod hendrerit.
			</p>
			<Gallery slideWidth="90%" bullets="dark">
				<div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
				<img src="https://placebear.com/1024/640" style={{ display: 'block' }} />
				<div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
			</Gallery>
		</Group>
		<Header>
			Авторы
		</Header >
		<div className="autors">
			<HorizontalCell className="autor" size="s" header="oo">
				<Avatar size={96}/>
			</HorizontalCell>
			<HorizontalCell className="autor" size="s" header="aa">
				<Avatar size={96}/>
			</HorizontalCell>
		</div>
		<Header>
			Серия
		</Header >
		<div className="card series">
			<Image
				size={200}
				src="../img/check.png"
			>
			</Image>
			<Link onClick={() => props.go({id: "SeriesItem"})}>
				Название серии
			</Link>
			<span>
				5 книг
			</span>
		</div>

	</Panel>
);

ComicsItem.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
}

export default ComicsItem;
