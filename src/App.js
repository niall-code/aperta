import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

import "./api/axiosDefaults";
import NavBar from "./components/NavBar";
import LogInForm from "./pages/auth/LogInForm"
import SignUpForm from "./pages/auth/SignUpForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import styles from "./App.module.css";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";


function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";

    return (
        <div className={styles.App}>
            <NavBar />

            <Container className={styles.Main}>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => (
                            <PostsPage message="No results found. Adjust the search keyword." />
                        )}
                    />

                    <Route
                        exact path="/followed"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or follow a user."
                                filter={`owner__follows__owner__profile=${profile_id}&`}
                            />
                        )}
                    />

                    <Route
                        exact path="/liked"
                        render={() => (
                            <PostsPage
                                message="No results found. Adjust the search keyword or like a post."
                                filter={`likes__owner__profile=${profile_id}&ordering=-likes__made_at&`}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/login"
                        render={() => <LogInForm />}
                    />
                    <Route
                        exact
                        path="/signup"
                        render={() => <SignUpForm />}
                    />
                    <Route
                        exact
                        path="/posts/create"
                        render={() => <PostCreateForm />}
                    />
                    <Route
                        exact
                        path="/posts/:id"
                        render={() => <PostPage />}
                    />
                    <Route
                        exact
                        path="/posts/:id/edit"
                        render={() => <PostEditForm />}
                    />
                    <Route
                        render={() => <p>Sorry, that page doesn't exist.</p>}
                    />
                </Switch>
            </Container>
        </div>
    );
}


export default App;