import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";


export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
            ...prevResource,
            next: data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                    ? acc
                    : [...acc, cur];
            }, prevResource.results),
        }));
    } catch (err) { }
};

/**
 * When user follows a profile, updates its followers count
 * and sets a follow id.
*/
export const followHelper = (profile, clickedProfile, follow_id) => {
    return profile.id === clickedProfile.id
        ? // This is the profile I clicked on,
        // update its followers count and set its follow id
        {
            ...profile,
            followers_count: profile.followers_count + 1,
            follow_id,
        }
        : profile.is_owner
            ? // This is the profile of the logged in user
            // update its follows count
            { ...profile, follows_count: profile.follows_count + 1 }
            : // this is not the profile the user clicked on or the profile
            // the user owns, so just return it unchanged
            profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
        ? // This is the profile I clicked on,
        // update its followers count and set its follow id
        {
            ...profile,
            followers_count: profile.followers_count - 1,
            follow_id: null,
        }
        : profile.is_owner
            ? // This is the profile of the logged in user
            // update its follows count
            { ...profile, follows_count: profile.follows_count - 1 }
            : // this is not the profile the user clicked on or the profile
            // the user owns, so just return it unchanged
            profile;
};

export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};
export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
};
export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
};