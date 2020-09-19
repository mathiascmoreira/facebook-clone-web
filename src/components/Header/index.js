import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Content,
    SearchField,
    TextButton,
    IconButton,
    NotificationButtons,
    Buttons,
    SearchFieldGroup,
    CreatePopup,
    CreatePoputItem,
    OtherOptionsPopup
} from './styles';


import { 
    FriendRequests, 
    Messages, 
    Notifications, 
    QuickHelp, 
    ArrowDown, 
    FacebookIcon, 
    Search,
    HeaderCreateAd,
    HeaderCreateEvent,
    HeaderCreateGroup,
    HeaderCreateMarketPlace,
    HeaderCreatePage
} from '../Icons';

export default function Header({profilePicture}) {

    const name = useSelector(state => state.user.profile.name);
    return (
        <Container>
            <Content>
                <SearchFieldGroup>
                    <Link to="/dashboard">
                        <FacebookIcon />
                    </Link>
                    <SearchField>
                        <input placeholder="Search" />
                        <Link>
                            <Search />
                        </Link>
                    </SearchField>
                </SearchFieldGroup>
                <Buttons>
                    <TextButton>
                        <img src={profilePicture} />
                        <span>{name}</span>
                    </TextButton>
                    <TextButton>
                        <span>Home</span>
                    </TextButton>
                    <TextButton>
                        <span>Find Friends</span>
                    </TextButton>
                    <TextButton>
                        <span>Create</span>
                        {/* <CreatePopup>
                            <h4>Create</h4>
                            <CreatePoputItem>
                                <span>
                                    <HeaderCreatePage />
                                    <section>
                                        <strong>Page</strong>
                                        <p>Connect and share with customers or fans</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <HeaderCreateAd />
                                    <section>
                                        <strong>Ad</strong>
                                        <p>Advertise your business, brand or organization</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <HeaderCreateGroup />
                                    <section>
                                        <strong>Group</strong>
                                        <p>Find people with shared interests</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <HeaderCreateEvent />
                                    <section>
                                        <strong>Event</strong>
                                        <p>Bring people together with a public or private event</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <HeaderCreateMarketPlace />
                                    <section>
                                        <strong>Marketplace listing</strong>
                                        <p>Sell items to people in your community</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                        </CreatePopup> */}
                    </TextButton>
                    <NotificationButtons>
                        <IconButton>
                            <FriendRequests />
                        </IconButton>
                        <IconButton>
                            <Messages />
                        </IconButton>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                    </NotificationButtons>
                    <IconButton>
                        <QuickHelp />
                    </IconButton>
                    <IconButton>
                        <ArrowDown />
                         {/* <OtherOptionsPopup>
                            <section>
                                <li>Your Groups</li>
                            </section>
                            <section>
                                <li>Advertising on Facebook</li>
                            </section>
                            <section>
                                <li>Activity Log</li>
                                <li>News Feed Preferences</li>
                                <li>Settings</li>
                            </section>
                            <section>
                                <li>Log Out</li>
                            </section>
                        </OtherOptionsPopup> */}
                    </IconButton>
                </Buttons>
            </Content>
        </Container>
    )
}