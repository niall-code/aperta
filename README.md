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

### Enable routing between pages

I ran `npm install react-router-dom` and imported NavLink from it in `NavBar.js`, then removed the dots from all appearances of `Nav.Link`, and I've begun to add attributes to those `NavLink` elements. I also needed to run `npm install @types/react-router-dom`, and correct some imports from React Bootstrap, to placate error messages.

I made a `NavBar.module.css` file and put it in a `src/styles/` directory. If I was more experienced with React, I likely would have made all these extra directories at the start, knowing they would be needed. At time of commit, that CSS file has some nested styles, but this might soon be again altered.

I added `<Router>` into `index.js`. Unlike during Moments, I attempted other adjustments in response to an indication that 'ReactDOM.render' was deprecated, which also entailed an update with `npm install react@18 react-dom@18`. At this time, the issue appears to have been resolved. The changes to that file will be apparent from the corresponding commit. My addressing of how to contemporarily render was largely influenced by https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis.

### ~~Provide user context~~

### Workflow Transformation

So far, I have been aiming to fluidly move back and forth between making a back-end feature then its front-end user interface. This might be viable when I have more experience, but we were taught Django/React stack by coding the entirety of the back end first and then moving on to the front end, and unravelling what is and isn't necessary on the back end to have in place from square one is challenging. Therefore, to minimise the delaying effect of unnecessary extra problem-solving, I am thinking of now changing approach and as quickly as I can making all aspects of the back end that will be similar to Moments, then returning to here. This might result in multiple user stories being active at the same time. Ideally, I would have liked to avoid that, but it may need to be accepted given the tight timeframe of the project and my currently limited experience.

I have booked my next mentor session for about a week from now and hopefully by then can be getting to the point where most of my re-creation of a Moments-like app is in place and I can start giving my attention to those aspects of my project that will set it apart from that, particularly the blocking and reporting features. In theory, if I copy-pasted all of the Moments project, I could begin that almost immediately, but I want to show that I am able to code it again for myself, and also introduce some differences where I can.

### Mentor Meeting and Milestones

I had a mid-project meeting with my Code Institute mentor, Gareth McGirr. He clarified the importance of grouping my user stories into milestones. Informally, I had done so naturally, since I find that my user stories for each milestone/category are next to each other in my kanban board. However, I have now made it official, with one of four milestone-titling keywords being present like a label on each user story.

![milestones](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1730476903/milestones_si7l6w.png)
![milestone grouping of user stories](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1730476902/milestone-signposts_m4ys5o.png)

### Resuming the Front End

Having fairly rapidly, over about a week and a half, caught up my Django REST back end's code with the functionality offered by Moments' counterpart API, I am now returning to my React app to work on associated front-end aspects. Again, I will match the capabilities of Moments as quickly as I can, hopefully leaving sufficient time to give my attention to the blocking and reporting features which I am meaning to be the distinctive section of my work. Technically, a majority of my user stories are in progress at this point, but to avoid having them all in the same column, I intend to move them to 'in progress' as I begin addressing their front-end dimensions. Accordingly, my two currently active user stories are those belonging to my Authentication milestone. The acceptance criteria of them can be seen below.

![Registration and Authentication user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729516945/signup-login-ustory_k7on9x.png)
![Navigation user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729873579/navigation-ustory_ixrt2u.png)

### Connecting to my API

I created `api/axiosDefaults.js` and assigned the URL of my deployed API to `axios.defaults.baseURL`.

I noticed that, despite my back end now being in place, no `loggedOutNav` links were visible in my navbar. However, I found that simply giving them a `className` remedied that.

### Improve Navbar Appearance

In `NavBar.module.css`, I adjusted my navbar's styles - refreshing my development server's browser tab after each edit, to assess my changes and respond immediately - and refactored from nested rulesets to separated ones, for example, from `.NavBar { a { } }` to `.NavLink { }`.

I also altered the Font Awesome icons in `NavBar.js`. I chose a globe for 'Feed' and renamed it 'Public Feed', for general clarity but also to strengthen the icon association - a globe for the public/global feed. For 'Log In' and 'Log Out', I chose opening and closed doors, respectively. For 'Liked', a happy face. For 'Followed', a group of people. For 'Blocked', a no-entry symbol. I chose an artist's palette for 'My Content', because it has a strong connotation of creativity and that page will contain your created posts and allow you to create new ones. It may also subtly encourage people to treat the site as a place where they can express their creative side, which would harmonise well with the site name Aperta, or "open".

### Add Container, Switch, and Route tags in App.js

I found that my previous enabling of routing between component-based pages was incomplete, and remedied the situation by introducing necessary code to my `App.js` file. I now realise/remember that in a React app like this, my navbar does not directly fetch other pages like in plain HTML, but rather nudges the `Route` components in `App.js` to summon appropriate JSX elements with which to repopulate the page.

### Move api directory from root into src directory

I noticed that my `api` directory was in my root directory and that in Moments, its counterpart had been inside the `src` directory, so I relocated the directory and its `axiosDefaults.js` file.

### Add currentUser.is_staff condition for one NavLink

In [a commit to my back end](https://github.com/niall-code/aperta-api/commit/4869de613cf858bb1d81cce25e4e3d1bcafd9f63), I included Django's `is_staff` property as a field of my `CurrentUserSerializer`.

Here in my front end, in `NavBar.js`, I then uncommented my draft of a conditionally-rendered NavLink to the page called 'Suspicious'. I am calling it that instead of 'Reported' because it will appear alongside 'Liked', 'Followed', and 'Blocked', each of which implies that the current user performed the actions that collected that page's contents. By contrast, the items appearing on the 'Suspicious' page will have been reported by _other_ people and are not yet confirmed as problematic - they are merely suspicious, _potentially_ problematic, on the grounds that someone else deemed them worthy of being reported.

I edited the drafted conditional rendering to properly utilise the False/True value that will now be passed from my API along with its other current user information. This resembles `{currentUser.is_staff && <NavLink ... }`. Although this format looks like it should mean "something **and** something else", it really functions more like "if the first thing is false, don't show them the second thing".

I originally imagined basing the condition on superuser status, but I now feel that basing it on staff status permissions is more suitable, as this is about certain content moderation powers that do not necessarily have to be wielded by a full superuser.

#### Bundled with the commit

In the corresponding commit, again within `NavBar.js`, I also moved my `loggedOutNav` and `loggedInNav` into the `NavBar` component. I did this because my code editor was previously warning me that `currentUser` wasn't defined, since the conditional rendering within `loggedInNav` was higher in the file than the `const currentUser = useCurrentUser();` at the top of the NavBar component. Additionally, in `SignUpForm.js`, there seemed to be many `const` declarations present inside the `SignUpForm` component but above its `return` statement, including entire methods, so I figured that it was okay to similarly include things between the opening of the NavBar component and the beginning of its return statement.

I decided that it was inefficient to have the 'Public Feed' link appearing twice in my code, so I extracted both and instead placed it once above the `{currentUser ? loggedInNav : loggedOutNav}` ternary conditional. I also gave my `NavLink` components preliminary `to="#"` attributes, and selected an `fa-triangle-exclamation` Font Awesome icon for the 'Suspicious' link.

These changes were included with the commit "add currentUser.is_staff condition for one NavLink" because they arose organically from enacting the commit's namesake.

### Add src/ pages/auth/SignUpForm.js

I created a `SignUpForm.js` file and populated it with code similar to its counterpart in Moments. I have already mentioned this file above, because I worked on it concurrently but committed it separately. The space in the path name in the commit message is not a typo; it clarifies to my eyes that "src/" already existed and "pages/auth/SignUpForm.js" were the added directories and file.

### Add Optional Chaining to NavLink's Conditional Rendering

I ran `npm start` and received error messages suggesting that `is_staff` was undefined, which seemed odd as I thought I had made appropriate preparations. I inserted a question mark (i.e., `currentUser?.is_staff`) for "optional chaining", refreshed my development server's tab, and this resolved the issue.

### Fix Incomplete CurrentUserContext.js File

It appears that there are gaps in my code relating to passing user context to and from my API, to facilitate signing up or logging in from my React app. This somewhat makes sense as I had begun grappling with user context at the time of my "workflow transformation", as marked by a crossed-out heading that I left in the readme to imply that.

I made the `CurrentUserProvider` React component in `CurrentUserContext.js` and placed its JSX element in `index.js`. Adding this will allow fetching the user context.

## Credit

- My project has been significantly based on my previous codealong work from Code Institute's Moments walkthrough project, but with additional functionality (including two new models), stylistic differences, and other miscellaneous alterations.

- My Aperta logo was created using Adobe Express' free [logo maker](https://www.adobe.com/express/create/logo).

- The favicon and apple-touch-icon versions were produced with [Free Convert](https://www.freeconvert.com/png-to-ico) and [Resize Image](https://resizeimage.net/), respectively.

- Previously untaught changes in index.js were guided by https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis.

- 