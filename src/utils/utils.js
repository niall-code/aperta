import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";


/**
 * Fetches additional data from API and updates resource state.
 * 
 * Merges new results with existing, avoiding duplicates.
*/
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
        ?
        {
            ...profile,
            followers_count: profile.followers_count + 1,
            follow_id,
        }
        : profile.is_owner
            ?
            { ...profile, follows_count: profile.follows_count + 1 }
            :
            profile;
};

/**
 * When user unfollows a profile, updates its followers count
 * and sets a follow id.
*/
export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
        ?
        {
            ...profile,
            followers_count: profile.followers_count - 1,
            follow_id: null,
        }
        : profile.is_owner
            ?
            { ...profile, follows_count: profile.follows_count - 1 }
            :
            profile;
};

/**
 * Saves a JWT refresh token in local storage.
*/
export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/**
 * Checks whether refresh token available in local storage.
*/
export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
};

/**
 * Removes JWT token from local storage. Used when log out.
*/
export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
};
