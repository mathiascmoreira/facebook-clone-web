import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import pt from 'date-fns/locale/pt';

import Header from '../../components/Header';

import api from '../../services/api';

import { formatWorkToDisplay, formatEducationToDisplay, formatRelationshipToDisplay } from '../../services/formatter';

import {
    AddFriend,
    MessageUser,
    Follow,
    ProfileEllipsis,
    ProfileFriends,
    ProfileIntro,
    ProfilePhotos,
    ProfileWork,
    ProfileEducation,
    ProfileLivesIn,
    ProfileFromLocation,
    ProfileRelationshipStatus,
    ProfileFollowedBy,
    ProfileJoinedAt
} from '../../components/Icons';


import {
    Scroll,
    Content,
    CoverPhotoContainer,
    ProfileMenu,
    ProfileMenuButtons,
    ActionButtons,
    ProfilePicture,
    TimeLine,
    TimeLineAside,
    TimeLineIntro,
    TimeLinePhotos,
    TimeLinePhotoList,
    TimeLineFriends,
    TimeLineFriendList,
    Posts,
} from './styles';

import Post from '../../components/Post';


export default function Profile(props) {

    const [profile, setProfile] = useState(null);
    const [friends, setFriends] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get(`profiles/${props.match.params.username}`);
            const profile = response.data;


            profile.works.map(work => {
                work.display = formatWorkToDisplay(work);
                return work;
            });

            profile.educations.map(education => {
                education.display = formatEducationToDisplay(education);
                return education;
            });

            profile.relationship.display = formatRelationshipToDisplay(profile.relationship);

            setProfile(profile);
        }

        async function loadFriends() {
            const response = await api.get(`friendships`);
            const friends = response.data;

            console.log('buscando lista de amigos', friends);



            setFriends(friends);
        }

        loadPosts();
        loadFriends();
    }, [props.match.params.username])


    return (
        <>
            <Header profilePicture={profile?.picture?.url} />

            <Scroll>
                <Content>
                    <CoverPhotoContainer coverPhoto={profile?.coverPhoto?.url}>
                        <ProfilePicture>
                            <span>
                                <img src={profile?.picture?.url} />
                            </span>

                            <p>{`${profile?.name} ${profile?.lastName}`}</p>
                        </ProfilePicture>

                        <ActionButtons>
                            <span>
                                <button>
                                    <AddFriend />
                                    <p>Add Friend</p>
                                </button>
                            </span>
                            <span>
                                <button>
                                    <Follow />
                                    <p>Follow</p>

                                </button>
                                <button>
                                    <MessageUser />
                                    <p>Message</p>
                                </button>
                                <button>
                                    <ProfileEllipsis />
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
                                <h1>  <ProfileIntro />     Intro</h1>
                                <ul>
                                    {profile?.works.map(work => (
                                        <li> <ProfileWork /> <p>{work.display}<Link>{work.company}</Link></p></li>
                                    ))}
                                    {profile?.educations.map(education => (
                                        <li> <ProfileEducation /> <p>{education.display}<Link>{education.schoolName}</Link></p></li>
                                    ))}
                                    <li> <ProfileLivesIn /> <p> Lives in <Link>{profile?.location?.currentLocation}</Link></p></li>
                                    <li> <ProfileFromLocation /> <p> From <Link>{profile?.location?.fromLocation}</Link></p></li>
                                    <li> <ProfileRelationshipStatus /> <p>{profile?.relationship?.display}</p></li>
                                    <li> <ProfileJoinedAt /> <p>Joined at {profile?.joinedAt}</p></li>
                                </ul>
                            </TimeLineIntro>
                            <TimeLinePhotos>
                                <h1><ProfilePhotos /> Photos</h1>
                                <TimeLinePhotoList>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </TimeLinePhotoList>
                            </TimeLinePhotos>
                            <TimeLineFriends>
                                <h1><ProfileFriends /> Friends</h1>
                                <TimeLineFriendList>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Lucas Marques Da Silva II</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Friend's name 1</p>
                                            </td>
                                            <td>
                                                <img src={profile?.picture?.url} />
                                                <p>Lucas Marques Da Silva II</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </TimeLineFriendList>
                            </TimeLineFriends>
                        </TimeLineAside>
                        <Posts>
                            {/* { posts.map(post => <Post key={post.id} post={post} /> ) } */}
                        </Posts>
                    </TimeLine>
                </Content>
            </Scroll>
        </>
    )
}