import React, { useState, useEffect } from 'react';
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


import {
    formatPostDate
} from '../../services/formatter';

export default function ({ post }) {

    useEffect(() => {
     console.log(post);
    }, [post]);


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
                    <img src={post.user.picture.url} />
                    <span>
                        <h5>{post.user.name}</h5>
                        <time>{formatPostDate(post.createdAt)} . {post.isPublic ? <SharedWithPublic /> : <SharedWithFriends />} </time>
                    </span>
                </section>

                <PostEllipsis />
            </Header>

            <Content>
                <p>{post.content}</p>
                <img src={post.image?.url} />
            </Content>
            

            <Counts>
                <LikesCount hasLikes={post.likesCount > 0}>
                    <LikeCount />
                    <p> {post.likesCount} </p>
                </LikesCount>
                <CommentsCount hasComments={post.commentsCount > 0}>
                    <Link onClick={() => handleCommentsCountClick(post)}>{post.commentsCount} comments</Link>
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
            <Comments showComments="true">
                {
                    post.comments.map(comment => (
                        <Comment key={comment.id}>
                            <img src={comment.user.picture.url} />
                            <span>
                                <p>
                                    <Link>{comment.user.name}</Link> {comment.comment}
                                </p>
                                <span>
                                    <Link>Like</Link>
                                    <time>{formatPostDate(comment.createdAt)}</time>
                                </span>
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
