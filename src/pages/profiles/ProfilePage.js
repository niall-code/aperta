// React core, hooks, and routing
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Third-party components
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import InfiniteScroll from "react-infinite-scroll-component";

// Project-specific imports

// API requests and utilities
import { axiosReq } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";

// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
    useProfileData,
    useSetProfileData
} from "../../contexts/ProfileDataContext";

// Components
import Post from "../posts/Post";
import Asset from "../../components/Asset";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

// Local images
import NoResults from "../../assets/no-results.png";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfilePage.module.css";


/**
 * Returns a site user's profile page.
*/
function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profilePosts, setProfilePosts] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        let isMounted = true; 

        /**
         * Fetches details of the Profile instance
         * and associated Post instances.
         * 
         * Sets profileData in state.
        */
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}/`),
                        axiosReq.get(`/posts/?owner__profile=${id}`),
                    ]
                );

                if (isMounted) {
                    setProfileData((prevState) => ({
                        ...prevState,
                        pageProfile: { results: [pageProfile] },
                    }));
                    setProfilePosts(profilePosts);
                    setHasLoaded(true);
                }
            } catch (err) {
                // console.log(err);
            }
        };
        fetchData();

        return () => {
            isMounted = false;
        };    
    }, [id, setProfileData]);

    // Profile information at top of screen
    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfilePicture}
                        roundedCircle
                        src={profile?.profile_picture}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>

                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>Posts</div>
                            <div>{profile?.posts_count}</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>Followers</div>
                            <div>{profile?.followers_count}</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>Followed</div>
                            <div>{profile?.follows_count}</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {currentUser &&
                        !is_owner &&
                        (profile?.follow_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                                onClick={() => handleUnfollow(profile)}
                            >
                                Unfollow
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                onClick={() => handleFollow(profile)}
                            >
                                Follow
                            </Button>
                        ))
                    }
                    {is_owner && <ProfileEditDropdown id={profile?.id} />}
                </Col>
            </Row>
        </>
    );

    // Below profile information, any posts by that user
    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{profile?.owner}'s posts</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResults}
                    message={`No results found, ${profile?.owner} hasn't posted yet.`}
                />
            )}
        </>
    );

    return (
        <Row>
            <Col className="mx-auto py-2 p-0 p-lg-2" lg={8}>
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
        </Row>
    );
}


export default ProfilePage;
