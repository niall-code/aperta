// React hooks
import { createContext, useContext, useState } from "react";

// API requests and utilities
import { axiosRes } from "../api/axiosDefaults";
import { followHelper, unfollowHelper } from "../utils/utils";


const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();


export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

/**
 * Provides profileData state and setProfileData method to descendants.
*/
export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
    });

    /**
     * Creates an instance of Follow in the database.
    */
    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post("/followed/", {
                followed_creator: clickedProfile.id,
            });
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        followHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * Removes an instance of Follow from the database.
    */
    const handleUnfollow = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/followed/${clickedProfile.follow_id}/`);
            setProfileData((prevState) => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        unfollowHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            // console.log(err);
        }
    };
    
    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider
                value={{ setProfileData, handleFollow, handleUnfollow }}
            >
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};