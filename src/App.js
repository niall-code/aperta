// React routing
import { Route, Switch } from "react-router-dom";

// Third-party component
import Container from "react-bootstrap/Container";

// Project-specific imports

// API requests
import "./api/axiosDefaults";

// Contexts
import { useCurrentUser } from "./contexts/CurrentUserContext";

// Components
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import LogInForm from "./pages/auth/LogInForm"
import SignUpForm from "./pages/auth/SignUpForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ReportCreateForm from "./pages/reports/ReportCreateForm";
import SuspiciousPage from "./pages/reports/SuspiciousPage";

// Styles
import styles from "./App.module.css";


/**
 * Renders the NavBar component plus one component-based page,
 * selected from a Switch case of Routes based on a URL path.
*/
function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";

    return (
        <div className={styles.App}>
            <NavBar />

            <Container className={styles.Main}>
                <Switch>

                    {/* Public Feed - all posts */}
                    <Route
                        exact path="/"
                        render={() => (
                            <PostsPage message="No results found. Adjust the search keyword." />
                        )}
                    />

                    {/* Followed - posts by users you followed */}
                    <Route
                        exact path="/followed"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or follow a user."
                                filter={`owner__followers__owner__profile=${profile_id}&`}
                            />
                        )}
                    />

                    {/* Liked - posts you liked */}
                    <Route
                        exact path="/liked"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or like a post."
                                filter={`likes__owner__profile=${profile_id}&ordering=-likes__made_at&`}
                            />
                        )}
                    />

                    {/* Log In - authentication */}
                    <Route
                        exact
                        path="/login"
                        render={() => <LogInForm />}
                    />

                    {/* Create Post - content creation */}
                    <Route
                        exact
                        path="/posts/create"
                        render={() => <PostCreateForm />}
                    />

                    {/* Viewing an individual post */}
                    <Route
                        exact
                        path="/posts/:id/"
                        render={() => <PostPage />}
                    />

                    {/* Editing an owned post */}
                    <Route
                        exact
                        path="/posts/:id/edit"
                        render={() => <PostEditForm />}
                    />

                    {/* Viewing own or another user's profile */}
                    <Route
                        exact
                        path="/profiles/:id"
                        render={() => <ProfilePage />}
                    />

                    {/* Editing own profile */}
                    <Route
                        exact
                        path="/profiles/:id/edit"
                        render={() => <ProfileEditForm />}
                    />

                    {/* Changing password */}
                    <Route
                        exact
                        path="/profiles/:id/edit/password"
                        render={() => <UserPasswordForm />}
                    />

                    {/* Changing username */}
                    <Route
                        exact
                        path="/profiles/:id/edit/username"
                        render={() => <UsernameForm />}
                    />

                    {/* Reporting content for moderator review */}
                    <Route
                        exact
                        path="/report/:id"
                        render={() => <ReportCreateForm />}
                    />

                    {/* Sign Up (registration) */}
                    <Route
                        exact
                        path="/signup"
                        render={() => <SignUpForm />}
                    />

                    {/* Moderators' page */}
                    <Route
                        exact
                        path="/suspicious"
                        render={() => <SuspiciousPage />}
                    />

                    <Route render={() => <NotFound />} />

                </Switch>
            </Container>
        </div>
    );
}


export default App;
