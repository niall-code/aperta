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

I added `<Router>` into `index.js`. Unlike during Moments, I attempted other adjustments in response to an indication that 'ReactDOM.render' was deprecated, which also entailed an update with `npm install react@18 react-dom@18`. At this time, the issue appears to have been resolved. The changes to that file will be apparent from the corresponding commit. My addressing of how to contemporarily render was largely influenced by https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis. (I believe I later reverted those changes, so I'll remove the second mention of this from Credits.)

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

### Fix Dependency Version Compatibility

I had tried signing up and it appears to be operational. I now tried to log in and was hit by errors. I decide that I was getting tripped up by incompatibilities of dependency versions, so I did several `npm uninstall` and `npm install` commands to make my `package.json` file mirror the dependency version numbers found in my 'moments' GitHub repo. Combined with taking back my `index.js` file to its Moments-like structure from before my unnecessary changes in the early "enable routing between pages" commit, and combined with inserting an absent `to` attribute into a `NavLink` element in `NavBar.js`, logging in and logging out now seem to be working.

![successfully logged in](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731414545/logged-in_bljzaa.png)

### Rapid-Fire Commits

On the 10th of November, 2024, I pushed 8 commits to my repo, including creation of the Post, PostPage, and PostCreateForm files. With only a week remaining to complete my project, moving on to my unique block and report functionalities as soon as possible is very important. Therefore, I have opened about 20 commit pages from my 'moments' repo in separate tabs and will try to power through them, copying relevant code into Aperta with minor adjustments and closing each tab as I complete it. If I had blindly copy-pasted my whole Moments project, I could have begun focusing on the distinctive parts of my project weeks ago, but I believe reproducing my work systematically will show that I am able to and, perhaps more importantly, has allowed me to more strongly learn about how to create Django-React stack applications for beyond the end of the course. I hope to have time to edit some of my transplanted code, particularly regarding styling, but the block and report functionality must take precedence, as that is supposed to be the core of my project.

At this point, the essentials of my "Registration & Authentication" and "Navigation" user stories, which constitute my "Authentication" milestone, have been put in place, so I'll move those to 'Done'. I'll move the user stories of my "Posts" and "Engagement" milestones to 'In Progress', as my planned and begun commits surge described above will encompass these.

![user stories in progress](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731414362/in-progress-11-11_nk39k8.png)


After 22 commits in one day, going a long way towards catching up to Moments' functionality, I ran `npm start` to get a sense of how broken my code was after having worked so rapidly, and was pleasantly surprised that there were no immediate screen-filling error messages, my root page being visible instead, as hoped.

![successful launch of development server](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731418203/fortunate-root-page_h7utyr.png)

### Fix Misnamed Variables

I saw in the terminal that there were some smaller issues going on though.

![terminal warnings](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731417367/terminal-no-undef_w7haxi.png)

So, I tweaked my code accordingly, summarised in my commit message as "fix misnamed variables", which constituted the bulk of the problem, though eliminating some disused code also would occur.

### Manual Testing

![login tests](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731437865/conditional_navlink_z5xdqm.jpg)

![responsiveness test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731447825/mobile_responsiveness_c0ljdv.jpg)

> I had been planning to have a My Content page with the logged-in user's existing posts and a 'Create new post' button, but it now occurs to me that if I move my posts from the bottom of my profile into My Content, other users won't be able to see a collection of all of my posts, and having them in two locations is redundant. Therefore, I'll leave my posts in Profile and rename My Content to "Create Post" and make it a link to the post creation form. By happy chance, this makes the artist palette icon even more appropriate.

![post and comment testing](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731515385/post_and_comment_testing_acvpg2.png)

- Create a post

![post creation test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731517242/image_post_creation_wc0dzi.png)

- Create a comment

![comment creation test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731512119/comment_creation_ayj09s.png)

- Post page is mobile responsive

<img src="https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731514442/post_page_mobile_wdcv0h.png" alt="post page responsiveness test" width="300px" />

- Edit the post

![post editing test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731512782/post_editing_test_fuz97u.png)

- Edit the comment

![comment editing test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731513486/comment_editing_test_pz9efp.png)

- Post visible on Profile

![post visible on profile](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731514990/post_visible_on_profile_wxjg0x.png)

### Fix handleLike method of Post component

While trying to manually test my liking/unliking functionality, I was running into 400 errors in the console. After much experimentation, I determined that the issue was merely one occasion of an absence of `liked_` in front of `post`. In my back end, I had tried to give things more clear, descriptive names than had been the case in Moments. Mostly, this has been fine, but my 'speedrun' of commits the other day possibly led to me missing this discrepancy at first.

![fix of handleLike method](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731531755/liked_post_c3bwrf.png)

Now that the change has been made, my liking and unliking pass my manual test too.

### The 'Liked' page

At first, irrespective of whether a post was liked or not, it appeared on my 'Liked' page. I went back to my API, pip-installed `django-filter`, and added `filterset_fields` into views files. I had previously omitted this because I thought I didn't need it for Aperta's 'Public Feed' page, but I realised that it was still required for this other use. This solved the problem.

### Following/unfollowing and the 'Followed' page

To enable my following functionality, in `ProfileDataContext.js`'s `handleFollow` method, I changed `"/followers/"` to `"/followed/"` at about line 21, better matching the URL patterns of my API, and changed `followed` to `followed_creator` at about line 22, better matching the corresponding field of my API's Follow model.

![fixing handleFollow method](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731678498/handleFollow_zfegr8.png)

Issues remained with my unfollowing functionality though. After trying by myself, I consulted a Code Institite tutor, Rebecca. We enabled unfollowing by changing `following_id` to `follow_id` in the `handleUnfollow` method, and `follows_id` also to `follow_id` at about line 89 of `ProfilePage.js`.

Issues still remained with the 'Followed' page. At first, all posts appeared there regardless of whether or not the creator was followed. After an attempt to fix it, then no posts would appear, the opposite problem. In consultation with another Code Institute tutor, Holly, I made a few trial-and-error changes on the back end (which I'll also mention in the other readme) and here tweaked `App.js` in about line 43, similarly from `__follows__` to `__followers__`. It seems the similarity and potential ambiguity of the terms follow/follows/followed/following has been a stumbling block, despite my previous conversation with Sarah (mentioned in the other readme), but the matter has now been resolved. I maybe earlier mistook, for example, `follows_id` for being a related name with ID appended, rather than being a `follow_id` field in its own right, so I'm a little clearer now on how it works, at least.

**Although I at one point conceived of having the 'Followed' page be simply a list of who you followed, I have ended up instead making it a page where posts by those followed creators are displayed.**

### Deployment to Heroku

From my Heroku dashboard, I clicked 'New', 'Create new app', named it _aperta_ and selected Europe, then 'Create app', 'Connect to GitHub', connected my repo, and 'Deploy Branch'.

![naming the app](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731675636/deploy_1_name_pe4utu.png)

![connecting the repository](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731675636/deploy_2_connect_awyjw9.png)

![successfully deployed](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731675636/deploy_3_view_cnmkyj.png)

Then, I changed my _aperta-api_ app's CLIENT_ORIGIN config var to the URL of my production front end.

![live production front end](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731675636/deploy_4_live_orwh0j.png)

### Priority and future-release functionalities

With less than 4 days remaining to complete my project, I must scale back my perhaps over-ambitious plans for the first release. The reporting of posts and the moderator capacity to delete or approve those suspicious posts is the most important aspect of my imagined distinct-from-Moments features and therefore will be my priority. Blocking other users is a good idea also but out of the two is more deserving of being relegated to a future release. I'll have to make a "won't do" column for it in my kanbann board. Simiarly, reporting posts is more essential than reporting comments. Therefore, I've tweaked my Report model (over in my API) to focus on that for this release and re-migrated it.

The user stories currently in my In Progress column must be approximately done now, so I'll shift them all to Done, move the reporting-relevant user story/ies to In Progress, and the blocking user story to a new column as said.

I'd originally been going to put a screenshot of each user story's acceptance criteria in this readme while it was still active, but the shortness of time and the realities of the fluid way I have felt I needed to work - moving organically between different or overlapping features - has meant that it hasn't quite happened like that. To partly make up for it, when my project is almost in a submittable state, I'll make a chart breaking down my milestones, u-stories, and acceptance criteria, retrospectively confirming their fulfilment or explaining their non-fulfilment (similar to the little manual testing charts higher up). I have of course been less formally thinking about the criteria though.

![rearranged kanban board](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683382/kanban_15_11_xfomwm.png)

![Reporting Posts user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683569/reporting_ustory_uozoad.png)

![moderating posts user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683682/moderating_ustory_hw8lcz.png)


### 

- Took the dots out
- FormControl as select

## Credit

- My project has been significantly based on my previous codealong work from Code Institute's Moments walkthrough project, but with additional functionality (including a new model), a few stylistic differences, and other miscellaneous adjustments. More of my CSS than originally intended had to be lifted from Moments, to save time.

- My Aperta logo was created using Adobe Express' free [logo maker](https://www.adobe.com/express/create/logo).

- The favicon and apple-touch-icon versions were produced with [Free Convert](https://www.freeconvert.com/png-to-ico) and [Resize Image](https://resizeimage.net/), respectively.

- My Code Institute mentor, Gareth McGirr, suggested the convenient inclusion of the 'reported' attribute in my API's Post model, and provided general support with clarifying my ideas and priorities for the project.

- Code Institute tutors Rebecca and Holly assisted with fixing problems with my `handleUnfollow` method and with post filtering for my 'Followed' page, as described above.