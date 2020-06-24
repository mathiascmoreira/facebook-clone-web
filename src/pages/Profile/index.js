import React from 'react';
import { Link } from 'react-router-dom';



import Header from '../../components/Header';
import {
    Scroll,
    Content,
    CoverPhotoContainer,
    ProfileMenu,
    ProfileMenuButtons,
    ActionButtons,
    ProfilePicture,
    AddFriendIcon,
    FollowIcon,
    MessageIcon,
    MoreOptionButton,
    TimeLine,
    TimeLineAside,
    TimeLineIntro,
    TimeLinePhotos,
    TimeLineFriends,
    Posts,
    Post
} from './styles';



import coverPhoto from '../../assets/coverPhoto.jpg';
import profile2 from '../../assets/profile2.jpg';

export default function Profile() {
    return (
        <>
            <Header />

            <Scroll>
                <Content>
                    <CoverPhotoContainer coverPhoto={coverPhoto}>
                        <ProfilePicture>
                            <span>
                                <img src={profile2} />
                            </span>

                            <p>Shakeeb Aftab</p>
                        </ProfilePicture>

                        <ActionButtons>
                            <span>
                                <button>
                                    <AddFriendIcon />
                                    Add Friend
                                </button>
                            </span>
                            <span>
                                <button>
                                    <FollowIcon />
                                    Follow
                                    </button>
                                <button>
                                    <MessageIcon />
                                    Message
                                    </button>
                                <button>
                                    <MoreOptionButton />
                                </button>
                            </span>
                        </ActionButtons>
                    </CoverPhotoContainer>
                    <ProfileMenu>
                        <ProfileMenuButtons>
                            <button>Timeline</button>
                            <button>About</button>
                            <button>Friends</button>
                            <button>Photos</button>
                        </ProfileMenuButtons>
                    </ProfileMenu>

                    <TimeLine>
                        <TimeLineAside>
                            <TimeLineIntro>
                                <h1>Intro</h1>
                                <ul>
                                    <li>Not Yet Working</li>
                                    <li>Lives in United States</li>
                                    <li>From Brazil</li>
                                    <li>Single</li>
                                </ul>
                            </TimeLineIntro>
                            <TimeLinePhotos>
                                <h1>Photos</h1>
                            </TimeLinePhotos>
                            <TimeLineFriends>
                                <h1>Friends</h1>
                            </TimeLineFriends>
                        </TimeLineAside>
                        <Posts>
                            <Post>
                                <h1>Post 1</h1>
                            </Post>
                            <Post>
                                <h1>Post 1</h1>
                            </Post>
                        </Posts>
                    </TimeLine>
                </Content>
            </Scroll>
        </>
    )
}