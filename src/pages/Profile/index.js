import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

import api from '../../services/api';

import {
    formatWorkToDisplay,
    formatEducationToDisplay,
    formatRelationshipToDisplay,
    formatJoinedAtToDisplay
} from '../../services/formatter';

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
    const [friends, setFriends] = useState([]);
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);

    const user = useSelector(state => state.user.profile);

    useEffect(() => {
        async function loadProfile() {
            const response = await api.get(`profiles/${props.match.params.username}`);
            const profile = response.data;

            profile.works && profile.works.map(work => {
                work.display = formatWorkToDisplay(work);
                return work;
            });

            profile.educations && profile.educations.map(education => {
                education.display = formatEducationToDisplay(education);
                return education;
            });

            profile.relationship && (profile.relationship.display = formatRelationshipToDisplay(profile.relationship))

            profile.joinedAt && (profile.joinedAtDisplay = formatJoinedAtToDisplay(profile.joinedAt));

            setProfile(profile);
        }

        loadProfile();

    }, [props.match.params.username]);

    useEffect(() => {
        async function loadPosts() {
            const userId = profile && profile.id;

            const posts = userId ? (await api.get(`posts/${userId}`)).data : []

            setPosts(posts);
        }

        loadPosts();
    }, [profile]);

    useEffect(() => {
        async function loadPhotos() {
            const userId = profile && profile.id;

            const response = await api.get(`photos/${userId}`);
            const photos = response.data;

            setPhotos(photos);
        }

        loadPhotos();
    }, [profile, props.match.params.username])

    useEffect(() => {
        const userId = profile && profile.id;

        async function loadFriends() {
            const response = await api.get(`friendships/${userId}`);
            const friends = response.data;

            setFriends(friends);
        }

        loadFriends();
    }, [profile, props.match.params.username])

    return (
        <>
            <Header profilePicture={user?.profilePhotoUrl} />

            <Scroll>
                <Content>
                    <CoverPhotoContainer coverPhoto={profile?.coverPhoto?.url}>
                        <ProfilePicture>
                            <span>
                                <img src={profile?.picture?.url} alt='' />
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
                                    {profile?.location?.currentLocation && <li> <ProfileLivesIn /> <p> Lives in <Link>{profile?.location?.currentLocation}</Link></p></li>}
                                    {profile?.location?.fromLocation && <li> <ProfileFromLocation /> <p> From <Link>{profile?.location?.fromLocation}</Link></p></li>}
                                    {profile?.relationship && <li><ProfileRelationshipStatus /> <p>{profile?.relationship?.display}</p></li>}
                                    {profile?.joinedAtDisplay && <li> <ProfileJoinedAt /> <p>{profile?.joinedAtDisplay}</p></li>}
                                </ul>
                            </TimeLineIntro>
                            <TimeLinePhotos>
                                <h1><ProfilePhotos /> Photos</h1>
                                <TimeLinePhotoList>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={photos[0]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[1]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[2]?.image.url} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src={photos[3]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[4]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[5]?.image.url} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={photos[6]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[7]?.image.url} />
                                            </td>
                                            <td>
                                                <img src={photos[8]?.image.url} />
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
                                                <img src={friends[0]?.friend.picture.url} />
                                                <p>{friends[0]?.friend.name} {friends[0]?.friend.lastName}</p>
                                            </td>
                                            <td>
                                                <img src={friends[1]?.friend.picture.url} />
                                                <p>{friends[1]?.friend.name} {friends[1]?.friend.lastName}</p>
                                            </td>
                                            <td>
                                                <img src={friends[2]?.friend.picture.url} />
                                                <p>{friends[2]?.friend.name} {friends[2]?.friend.lastName}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </TimeLineFriendList>
                            </TimeLineFriends>
                        </TimeLineAside>
                        <Posts>
                            {posts.map(post => <Post key={post.id} post={post} />)}
                        </Posts>
                    </TimeLine>
                </Content>
            </Scroll>
        </>
    )
}