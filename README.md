# Aperta

This React app is designed to serve as the front end of my full-stack portfolio project, Aperta. This README.md file also includes the overview of my project, aspects that are not exclusively front or back end.

The repository for the back end can be found here: https://github.com/niall-code/aperta-api

Aperta is a content platform, made distinct from my Moments walkthrough project by the inclusion of additional functionality, particularly security features like the ability to block another user or report an inappropriate post. I wanted to improve on the concept previously explored by addressing the real-world issue that a platform will inevitably be misused by some people. As such, my main project goal was to create a social media platform where due attention is given to minimising unpleasant interactions and removing objectionable material, letting users enjoy and utilise the web application in a welcoming environment.

## Design, Development, and Deployment Process

### Naming

I chose the name Aperta because it is Latin for open, suiting the nature of a platform where people share content.

![Google Translate](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728569430/latin_op8rjo.png)

### Initial Setup

I created a GitHub repository and a Gitpod workspace for it. As with the beginning of Moments, I created a React app and pre-installed dependencies by running:

`npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm`

As I had found previously, `npm start` was not immediately useable, generating an error message.

![npm start error](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728574592/npm-start-failure_rwqg4u.png)

As before, I fixed it by running `npm install react-scripts@latest`.

![npm start fixed](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728574592/npm-start-success_pdqkqv.png)

### Preparation for Agile Methodology

I wrote my user stories and acceptance criteria and made a GitHub Projects kanban board for them. The Project is linked to both repositories but uses Issues made in the front end's repositiory. I planned to work on the React app and Django Rest API side by side, for example, making the back-end signup functionality and then the front-end Sign Up page shortly after.

Given the relatively narrow timeframe of the project, my entire kanban board will effectively be a sprint, but I will aim to as far as possible work systematically on one or two user stories and then the next, so those chunks could also be thought of as sprints.

I intend to show the acceptance criteria of each user story in my readme documentation when beginning it.

![kanban board](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728763525/kanban-board_yz42un.png)

### Wireframes

![post feed wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729275225/feed-wireframe_utqhkm.jpg)

My Feed wireframe shows the root page of my site. It illustrates the responsiveness of the navbar, which becomes an icon for a dropdown menu on small devices. It indicates the infinite scrolling of the posts feed, and shows that there will be a search bar, to find content that includes particular keywords.

![individual post view wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/post-wireframe_xr9arh.jpg)

When an individual post is selected, such as from the Feed page, the user will be shown a single-post view. As my Post wirefrane depicts, this would include the title, author, image (if applicable), and full text of the post, as well as access to the liking, commenting, and reporting features.

![My Content page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/content-wireframe_dp547y.jpg)

The My Content wireframe shows that the page will display posts owned by the current user and will present buttons that access major CRUD functionalities, i.e., a post creation form, a similar post editing form, and post deletion with confirmation modal. I've noted the possibility that the edit/delete buttons may look and fit better at the bottom of each post than to their side. The create button will probably be higher than initially drawn, near the top like on mobile. For most authenticated users, the main navbar will be virtually the same across all pages. The dashed lines at the bottom indicate infinite scrolling, like the Feed page.

For some pages, such as the mentioned forms, I have not used up time drawing further wireframes. The known aspects of its appearance will either match the other wireframes or be standard, strongly resembling a form. The uncertain aspects will be dictated by subsequent planning, e.g., of the Post model's attributes.

![Liked page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729275225/liked-wireframe_dbuzhi.jpg)

My Liked page wireframe shows that it will display posts that the user has liked. Although I had drawn a dedicated 'unlike' button, liking and unliking by clicking the same thumb icon is widely expected and may suffice. I might still insert a search bar at the top for user convenience, like on Feed.

![Followed and Blocked pages wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/followed-wireframe_t5eizc.jpg)

My Followed page/Blocked page wireframe shows that both will consist of a list of usernames and profile pictures, each accompanied by an 'unfollow' or 'unblock' button.

![Profile page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904353/profile-wireframe_iioghg.jpg)

My Profile page outline shows that a user's name and picture will dominate the page. For that user, there should be a button for replacing the picture, like we included in Moments. For other users, it would instead be a 'follow' button. Naturally, a username appearing on a post will link to their profile. Like with Moments, a profile could additionally display posts by that user underneath.

![Suspicious page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/suspicious-wireframe_smsynl.jpg)

My Suspicious page outline shows that, similar to other pages, a scrollable column of posts will be displayed. In this case, it will be posts that users have reported. I intend that this page will appear only for a superuser. As shown, buttons will be available to destroy an offending post or reinstate the post with protection from re-reporting.


### Add logo asset and replace favicon

I made a logo for my app and put it in a `src/assets/` directory. I also made a `.ico` favicon version and a reduced-pixels 'Apple touch icon' version, adding them to `public/`. At the same time, I placed the Bootstrap and Font Awesome connectiona in `index.html`.

### Create a NavBar component

I shall move my "Navigation" user story to In Progress. As said in my API's readme, "Registration & Authentication" is currently an in-progress user story too. Here are the acceptance criteria for both:

![Navigation user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729873579/navigation-ustory_ixrt2u.png)
![Registration and Authentication user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729516945/signup-login-ustory_k7on9x.png)

I created a `NavBar.js` file and put it in a `src/components/` directory. Inside, I added code for an initial navigation bar, provisionally copied from an early commit of my Moments app, but due to be altered and expanded. Naturally, this `<NavBar />` React component/JSX element was added into `App.js`.

### Define loggedInNav and loggedOutNav

In `NavBar.js`, I made two more JSX elements that will, once other related code is complete, make what options are available in the navbar conditional on whether the user is authenticated, as well as if they have superuser status, for the 'Suspicious' page link.

I also replaced `App.css` with `App.module.css` and have begun adding custom styles.

## Credit

- My project has been significantly based on my previous codealong work from Code Institute's Moments walkthrough project, but with additional functionality (including two new models), stylistic differences, and other miscellaneous alterations.
- My Aperta logo was created using Adobe Express' free [logo maker](https://www.adobe.com/express/create/logo).
- The favicon and apple-touch-icon versions were produced with [Free Convert](https://www.freeconvert.com/png-to-ico) and [Resize Image](https://resizeimage.net/), respectively.
- 