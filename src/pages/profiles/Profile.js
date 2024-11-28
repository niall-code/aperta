// React core, hooks, and routing
import React from "react";
import { Link } from "react-router-dom";

// Third-party components
import Button from "react-bootstrap/Button";

// Project-specific imports

// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

// Components
import Avatar from "../../components/Avatar";

// Styles
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Profile.module.css";


/**
 * Profile component, used by ProfilePage component.
 * 
 * Includes a profile owner's avatar, username, and follow/unfollow
 * button, conditionally.
*/
const Profile = (props) => {
    const { profile, mobile, imageSize = 55 } = props;
    const { id, followers_id, profile_picture, owner } = profile;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const { handleFollow, handleUnfollow } = useSetProfileData();

    return (
        <div
            className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
        >
            <div>
                <Link className="align-self-center" to={`/profiles/${id}`}>
                    <Avatar src={profile_picture} height={imageSize} />
                </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak}`}>
                <strong>{owner}</strong>
            </div>
            <div className={`text-right ${!mobile && "ml-auto"}`}>
                {!mobile &&
                    currentUser &&
                    !is_owner &&
                    (followers_id ? (
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
                    ))}
            </div>
        </div>
    );
};


export default Profile;