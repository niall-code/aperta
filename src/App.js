import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

import "./api/axiosDefaults";
import NavBar from "./components/NavBar";
import LogInForm from "./pages/auth/LogInForm"
import SignUpForm from "./pages/auth/SignUpForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import styles from "./App.module.css";


function App() {
    return (
        <div className={styles.App}>
            <NavBar />

            <Container className={styles.Main}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <h1>Public Feed</h1>}
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
                        render={() => <p>Sorry, that page doesn't exist.</p>}
                    />
                </Switch>
            </Container>
        </div>
    );
}


export default App;