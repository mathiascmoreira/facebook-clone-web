import React from 'react';
import { Link } from 'react-router-dom';


import {CommentPost, LikePostWhite, LikePostBlue, LikeCount, SharedWithPublic, SharedWithFriends, PostEllipsis} from '../Icons';

import {
    Container,
    Header,
    Content,
    Counts,
    LikesCount,
    ActionButtons,
    ActionButton,
    Comments,
    Comment,
    CommentsCount,
    NewComment

} from './styles';

export default function ({ post }) {

    function handleCommentsCountClick(post) {

        post.showComments = !post.showComments;
    }

    function handleCommentButtonClick(post) {

        post.showComments = true;
    }

    return (
        <Container>
            <Header>
                <section>
                    {/* <img src={profile} /> */}
                    <span>
                        <h5>{post.user.name}</h5>
                        <time>{post.postedAt} . {post.isPublic ? <SharedWithPublic /> : <SharedWithFriends />} </time>
                    </span>
                </section>

                <PostEllipsis />
            </Header>

            <Content>
                {post.content}
            </Content>

            <Counts>
                <LikesCount hasLikes={post.hasLikes}>
                    <LikeCount />
                    <p> {post.likesCount} </p>
                </LikesCount>
                <CommentsCount hasComments={post.hasComments}>
                    <Link onClick={() => handleCommentsCountClick(post)}>{post.commentsCount} comentários</Link>
                </CommentsCount>
            </Counts>
            <ActionButtons>
                <ActionButton hasOwnLike={post.hasOwnLike}>
                    {post.hasOwnLike? <LikePostBlue /> : <LikePostWhite />}
                    Like
                </ActionButton>
                <ActionButton onClick={() => handleCommentsCountClick(post)}>
                    <CommentPost/>
                    Comment
                </ActionButton>
            </ActionButtons>
            <Comments showComments={post.showComments}>
                {
                    post.comments.map(comment => (

                        <Comment key={comment.id}>
                            {/* <img src={profile} /> */}
                            <span>
                                <p>
                                    <Link>{comment.user.name}</Link> {comment.comment}
                                </p>
                                <Link>Like</Link>
                            </span>
                        </Comment>
                    ))
                }

                <NewComment >
                    {/* <img src={profile} /> */}
                    <input placeholder="Write a comment..." />
                </NewComment>

            </Comments>
        </Container>
    )
}
