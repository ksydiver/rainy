import React from 'react';
import PropTypes from 'prop-types';
import {Panel, ListItem, Button, Group, Div, Avatar, HeaderButton, PanelHeader, IOS, platform} from '@vkontakte/vkui';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import persik from '../img/persik.png';
import './Persik.css';

const osname = platform();

const Home =  ({ id, go, fetchedUser }) => (
    <Panel id={id}>
        <PanelHeader
            left={<HeaderButton onClick={go} data-to="persik">
                {osname === IOS ? <Icon28Place/> : <Icon24Place/>}
            </HeaderButton>}
        >
            Погода
        </PanelHeader>
        {fetchedUser &&
        <Group title="User Data Fetched with VK Connect">
            <ListItem
                before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
            >
                {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </ListItem>
            <img className="Persik" src={persik} alt="Persik The Cat"/>
        </Group>}
        <img className="Persik" src={persik} alt="Persik The Cat"/>
        <Group title="Navigation Example">
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="persik">
                    Show me the Persik, please
                </Button>
            </Div>
        </Group>
    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
