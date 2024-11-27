# Aperta

![responsiveness mockup](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732719200/responsive_mockup_rbtkoo.png)

This React app is designed to serve as the front end of my full-stack portfolio project, Aperta. This README.md file also includes the overview of my project, aspects that are not exclusively front or back end.

The deployed site can be found here: https://aperta-d13fdb04474d.herokuapp.com


(The repository for the back end can be found here: https://github.com/niall-code/aperta-api )

Aperta is a content platform, made distinct from my Moments walkthrough project by the inclusion of additional functionality, particularly security features like the ability to report an inappropriate post. I wanted to improve on the concept previously explored by addressing the real-world issue that a platform will inevitably be misused by some people. As such, my main project goal was to create a social media platform where due attention is given to minimising unpleasant interactions and removing objectionable material, letting users enjoy and utilise the web application in a welcoming environment.

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

> I ended up having my existing content on my Profile page instead, making the My Content page into a dedicated Create Post page. This makes it simpler for other users to get to see content by me together in one place.

For some pages, such as the mentioned forms, I have not used up time drawing further wireframes. The known aspects of its appearance will either match the other wireframes or be standard, strongly resembling a form. The uncertain aspects will be dictated by subsequent planning, e.g., of the Post model's attributes.

![Liked page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1729275225/liked-wireframe_dbuzhi.jpg)

My Liked page wireframe shows that it will display posts that the user has liked. Although I had drawn a dedicated 'unlike' button, liking and unliking by clicking the same thumb icon is widely expected and may suffice. I might still insert a search bar at the top for user convenience, like on Feed.

![Followed and Blocked pages wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/followed-wireframe_t5eizc.jpg)

My Followed page/Blocked page wireframe shows that both will consist of a list of usernames and profile pictures, each accompanied by an 'unfollow' or 'unblock' button.

> I ended up making the Followed page instead be a feed of posts by followed users, rather than a list of who I follow.

> Out of my proposed safety features, I decided to focus on the reporting and moderating aspect, deferring the considered blocking feature to a potential future update.

![Profile page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904353/profile-wireframe_iioghg.jpg)

My Profile page outline shows that a user's name and picture will dominate the page. For that user, there should be a button for replacing the picture, like we included in Moments. For other users, it would instead be a 'follow' button. Naturally, a username appearing on a post will link to their profile. Like with Moments, a profile could additionally display posts by that user underneath.

![Suspicious page wireframe](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1728904354/suspicious-wireframe_smsynl.jpg)

My Suspicious page outline shows that, similar to other pages, a scrollable column of posts will be displayed. In this case, it will be posts that users have reported. I intend that this page will appear only for a superuser. As shown, buttons will be available to destroy an offending post or reinstate the post with protection from re-reporting.

> I later felt that viewing and dealing with the suspicious posts one by one was more appropriate than an infinite scroll, and technically it is a report with content from the original post included.

> Technically, it is limited to staff members, not the narrower category of superusers. This allows for the future possibility of a growing number of moderators, who could be given necessary permissions only.

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

The deployed site can be found here: https://aperta-d13fdb04474d.herokuapp.com

### Priority and future-release functionalities

With less than 4 days remaining to complete my project, I must scale back my perhaps over-ambitious plans for the first release. The reporting of posts and the moderator capacity to delete or approve those suspicious posts is the most important aspect of my imagined distinct-from-Moments features and therefore will be my priority. Blocking other users is a good idea also but out of the two is more deserving of being relegated to a future release. I'll have to make a "won't do" column for it in my kanbann board. Simiarly, reporting posts is more essential than reporting comments. Therefore, I've tweaked my Report model (over in my API) to focus on that for this release and re-migrated it.

The user stories currently in my In Progress column must be approximately done now, so I'll shift them all to Done, move the reporting-relevant user story/ies to In Progress, and the blocking user story to a new column as said.

I'd originally been going to put a screenshot of each user story's acceptance criteria in this readme while it was still active, but the shortness of time and the realities of the fluid way I have felt I needed to work - moving organically between different or overlapping features - has meant that it hasn't quite happened like that. To partly make up for it, when my project is almost in a submittable state, I'll make a chart breaking down my milestones, u-stories, and acceptance criteria, retrospectively confirming their fulfilment or explaining their non-fulfilment (similar to the little manual testing charts higher up). I have of course been less formally thinking about the criteria though.

![rearranged kanban board](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683382/kanban_15_11_xfomwm.png)

![Reporting Posts user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683569/reporting_ustory_uozoad.png)

![moderating posts user story](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1731683682/moderating_ustory_hw8lcz.png)

### Revert "add 'Report' button to Post.js"

In my back-end readme, there are two occasions where I record having used `git revert` commands (five on the first occasion, two on the second). At the same time as the first occasion, I did one such command here as well, though similar code to that which was undone would later be re-added. The circumstances are discussed extensively in my other readme, since it primarily concerned my back end.

### Change request in PostPage's useEffect

A problem was discovered relating to posts in my "public feed" post list not being viewable when you go into the post detail. In short, that is what had prompted those reversion commands, to get back to what I believed to be the last stable version. Unfortunately, problems persisted even then. I consulted a Code Institute tutor, Roman. We did a few things, already talked about in the other readme, but the one we changed here in the front end was adjusting `PostPage.js` like this:

![amended get request](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732032499/roman_postpage_pjuq8r.png)

### Add 'Report' link button to Post.js

I then again added a 'Report' button into `Post.js`, but this time wrapped in a link, rather than going unnecessarily via a `handleReport` method.

### Add ReportCreateForm.js

I populated `ReportCreateForm.js` with a draft of the code it would demand, and added a route into `App.js`. As can be seen from my repository, at that point in time, there were many console log statements and commented-out lines of code in that file, as I had fiddled with it for quite a while before settling on an iteration that felt worth committing, perhaps deterred by my then-recent git reversion fiasco from committing it in smaller chunks, like I maybe otherwise would have.

Two breakthroughs, small in appearance but large in effect, that probably persuaded me to make the commit were the changing of `<Form.Select` to `<FormControl as="select"` and the removal of dots from between all uses of `FormControl`, `FormGroup` and `FormLabel` (as opposed to `Form.Control`).

The contents of my `handleMount` method in that commit reflect that I had added four fields starting with the characters "post_" to my API's Report model about an hour before, grouped into a back-end commit titled "add perform_create method", which at the time seemed the headline of the commit. (It turned out the namesake method would get removed, and the new fields' importance would become more certain.)

### Alter CreateReportForm (sic) to eliminate 400 error

After removing a 404 error, as described in the other readme, a 400 error remained. It was resolved by a combination of the commit "alter model fields for Report" on the back end and here the almost aptly named commit "alter CreateReportForm to eliminate 400 error". Having battled my coding conundrum literally all day, when I finally fixed it, I tiredly mistyped the commit message as 'CreateReportForm' instead of the more acccurate 'ReportCreateForm'.

Subjectively, it already feels a long time ago, even though my repository says it was 19 hours ago, but it looks like my changes here were:

- adding `parseInt` at about line 52

- `.url` after 'image' at about line 58

- expanding the `handleChange` method to add logic that uses `parseInt` when necessary

- adding `reportData.` before 'reason' and 'explanation' at about lines 150 and 183

- removing unneccessary name attributes of option elements

- and adding attributes of `value="0" disabled` to the first, instruction-only option element.

### Add optional chaining in ReportCreateForm's handleMount method

I'd gotten a HTTP 400 (Bad Request) error in the devtools console of my development server when trying to submit a report creation form. Although surprised to see it, as I appeared to have already fixed that last night, the small number of changes since then narrows down what could be wrong:

- I have made a single-word change on the back end, from 'PUT' to 'PATCH' in part of the permissions file. I don't think that should be relevant right now, but I'll try reintroducing 'PUT' if I cannot find any other culprit.

- I had made a single-line addition here in my `handleSubmit` method of the `ReportCreateForm.js` page, but had not yet committed it (as that was what I meaning to first test) and I've now commented it out, so it shouldn't be that.

- That is all of the changes, but just now I was trying to report a post that had neither an image or text, so I'm feeling that this is the most probable cause. I inspected devtools and saw this console message:

<img src="https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732028186/properties_of_null_pfsq8p.png" alt="console message about image URL" width="400px" />

I therefore decided to amend line 58 to ``const post_image = `${data.image?.url}`;``, basically inserting the question mark, i.e., using optional chaining. This indeed solved the problem, as that post now has been reported just fine:

![successful report of post without image](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732029105/null_url_avoided_lc4oib.png)

I have also added a `default` attribute to the file's first, instructional-only option element, so that it shows up in the dropdown bar instead of "Graphic violence".

### Add patch of Boolean field to report functionality

I uncommented and tested line 125 of `ReportCreateForm.js`, the second axios request of the try block.

    try {

        await axiosReq.post("/suspicious/", reportData);

        await axiosReq.patch(`/posts/${reportData.post_id}/`, {reported: true});

        history.push(`/`);

    }

It worked, as shown below.

![Boolean field change test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732043060/reported_boolean_changed_alapdz.png)

### Reported posts not in Public Feed

Having just committed "add reported=False filter to PostList queryset" on the back end and redeployed my API, I came here to confirm its success. It appears to indeed have worked for here in my front end too, post #5 being absent from the public feed but still existing if I append `/posts/5` to the URL.


### Wed. 20 Nov., '24

#### Create SuspiciousPage.js for moderator use

I made `SuspiciousPage.js` at `src/pages/reports/`. In it, I put a `fetchReports` method that fetches instances of Report and saves them to the state. I also put a return statement containing JSX, with a ternary conditional that checks whether there are in fact any current reports.

At this point, my JSX somewhat resembles vanilla HTML. I chose to begin coding my 'Suspicious' page in that way so that I fully understood what I was typing and so that the process was more enjoyable for me, both of which felt important for progressing swiftly with my project. However, some out-of-the-box Bootstrap elements and self-made, supplementary React components would soon start to be introduced, where necessary.

I have decided that I want this page to present a single Report instance at a time, but indicate how many reports are awaiting review. This would promote efficiency of content moderation. The oldest report should appear first, as it has been awaiting review the longest.

#### Add ReasonReader component to interpret integer

Speaking of which, I next made `ReasonReader.js` at `src/components/`, into which I placed a draft of a switch statement. In service to my larger `SuspiciousPage` component, the atomic `ReasonReader` component will translate a Report instance's 'reason' field from an integer to a corresponding, human-readable string.


### Thu. 21 Nov.

#### Add 'Suspicious' route to App.js

I placed another Route element into `App.js`, with a path matching the 'to' value of my staff-only "Suspicious" NavLink and a render pointing to `<SuspiciousPage />`.

#### Add a SuspiciousPage.module.css stylesheet

I created a `SuspiciousPage.module.css` file at `src/styles/`.

#### Fix ReasonReader component

I `npm start`ed my development server and found that my `ReasonReader` helper component was not successfully interpreting the reason integer. I added break statements and a default. I changed line 1 to make the component a standard function, not an arrow function, and I put curly braces around its parameter. I also wrapped switch's parameter in a `parseInt()`, just in case. The component now seems to be working as intended.

![initial test of reason reader](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732206904/reason_text_ewiduf.png)

#### Add Card elements to structure SuspiciousPage

In `SuspiciousPage`, I imported React-Bootstrap's Card element, wrapped three of them around segments of my JSX, and nested those in a fourth, rapidly enhancing the visual structure of the page. I also began to connect with my stylesheet using `className` attributes.

#### Fix post_image assignment in ReportCreateForm

I noticed that my Report instances' 'post_image' fields have been getting a value of "undefined", even when the reported post did include an image. I previously thought optional chaining had fixed line 58 of `ReportCreateForm`, but I have now removed the `?.url`. A manual test showed me that a report about a post with an image now receives an appropriate value for that field, and that the value can later be read when the Report instance is retrieved by the moderator, i.e., the picture shows up.

![fixing a field value assignment](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732206757/post_image_assign_jwsljp.png)

#### Implement flexbox in SuspiciousPage

Continuing to connect to my stylesheet via `className` attributes, I applied flexbox in such a way as to position the post's image to the left of its title and text on desktop, centered and grayed the 'remaining' count, and provided appropriate spacing. A horizontal line beneath the title also enhances the appearance.

Although this page is just for a moderator, making it well-organised and easy to look at could improve their efficiency. My grouping of the content with nested Cards was based on the same rationale.

![styled moderation page](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732208075/styled_mods_page_azhdrt.png)


### Fri. 22 Nov.

#### Fix useEffect method with empty dependency array

Yesterday evening, I spotted in devtools that my 'Suspicious' page is generating a high and ever-increasing number of occasions of "cross-site cookie reading". I believe that this will be being caused by a flaw in my useEffect method. I know that useEffect acts upon every update, but I had imagined that the only update would be when the moderator actively clicks a button.

I see that I gave my `ReportCreateForm`'s useEffect method a dependency array, with an `id` variable. At the time, my intention had been to pass a value - which had been collected with `const { id } = useParams();` - into useEffect, so that it could be accessed by its handleMount child method and injected into a GET request. I'm thinking that it also, or instead, prevented my current issue from occurring on that page. I'm now recalling that the dependency array tells useEffect to run only when there is a change to the variables listed. I believe that adding an empty dependency array to `SuspiciousPage`'s useEffect method will mean that it fetches the data once when the component mounts and not again, which should solve the immediate problem.

#### Add handleDelete method to SuspiciousPage

I added a `handleDelete` method to my `SuspiciousPage` component and had the 'Delete' button trigger it `onClick`. The method deletes the objectionable post and the report about it. Then, the next report will be displayed, if there is one. Some quick manual tests seemed to confirm its success. As you can see below, I had API tabs open to check for a back-end effect.

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${reports.results[0].post_id}/`);
            await axiosRes.delete(`/suspicious/${reports.results[0].id}/`);
            window.location.reload(); 
        } catch (err) {
            console.log(err);
        }
    };

![successful report deletion](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732282316/report_deletion_wyoirl.png)

#### Fix SuspiciousPage mobile responsiveness

When I used devtools to see what my page would look like on a small device, I found that there was a mobile responsiveness issue. Specifically, the navbar, cards, and buttons extended slightly past the right edge of the simulated screen. It was unaesthetic and, more seriously, meant that the burger icon was mostly obscured. However, it seems that simply adding `max-width: 100vw;` into my `.Card` ruleset, in `SuspiciousPage.module.css`, seems to have fixed it.

#### Add handleApprove method to SuspiciousPage

I added a `handleApprove` method to my `SuspiciousPage` component and had the 'Approve' button trigger it `onClick`. The method green lists the non-objectionable post and deletes the report about it. The Post instance's "reported" value is changed back to false, making the post reappear in the public feed. Its "green_listed" value is changed to true, making its 'Report' button disappear, which would prevent malicious reporting of an already moderator-reviewed post.

    const handleApprove = async () => {
        try {
            await axiosReq.patch(
                `/posts/${reports.results[0].post_id}/`,
                {reported: false, green_listed: true}
            );
            await axiosRes.delete(`/suspicious/${reports.results[0].id}/`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

To link the "green_listed" Boolean to presence or absence of the 'Report' button, in my `Post` component, I added `green_listed,` into my desctructured props, then added an extra condition for the display of that button.

    {currentUser && !green_listed &&

        <Link to={`/report/${id}`}>
            <Button  ...
    }

The post should only remain green listed until if and when the owner edits it. Therefore, in my `PostEditForm` component, I added an extra line to that effect into my `handleSubmit` method.

    formData.append("green_listed", false);

A manual test revealed that these solutions worked as I hoped.

![successful green listing test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732294345/green_list_test_dtdh8l.jpg)


### Sat. 23 Nov.

#### Add placeholder image for when post_image is falsy

Again in `SuspiciousPage.js`, I added a ternary conditional that should mean an image from a reported post is displayed if there is one and a placeholder rectangle with the words 'No Image' is displayed if not.

#### Enable automated testing

I created `src/ mocks/handlers.js` and gave it some data that my test can pretend is fetched from my API, added to `setupTests.js`, and created `src/pages/reports/ __tests__/SuspiciousPage.test.js`, in which I wrote a Jest automated test to check that my previous placeholder commit was efficacious. Although it would have been faster to just test it manually, since I had to work a lot of things out, this should demonstrate that I am able to do an automated test and also has let me better learn how it works, which could be useful beyond the course.

![placeholder test passed](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732363283/jest_image_pass_p1gamo.png)

#### Add cleanup to useEffect hooks

My Jest testing flagged up that "memory leakage" was occurring. After some research to try to understand what it really meant, I decided to add an 'AbortController' in `SuspiciousPage.js` and `ReportCreateForm.js`, which should mean that if somebody closes or leaves the page in the middle of a process, it is better handled. My useEffect hooks were like a guy hanging around a party venue after the party has ended, but now they should get a nudge to go home.

#### Add confirmDelete method wrapping handleDelete

I thought it was too easy for a user to accidentally delete a post that they might have put time and effort into creating, so I added a confirmation pop-up as an extra step, in `Post.js`. I don't feel this is necessary in `SuspiciousPage.js`, where post deletions will be frequent and constant "Are you sure?" messages would annoy the moderator.

![post delete confirmation](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732365081/delete_confirm_cqfab8.png)

#### Alter manifest.json icons

I've been noticing a favicon and `public/manifest.json` related message in my console. To hopefully remedy it, I have altered the file to better reflect my current favicon situation.

#### Change NavBar's i tag class attribute to className

I have been seeing a warning in the console:

> Invalid DOM property class. Did you mean className?

I realised that it was referring to several of my Font Awesome icon-hosting `<i>` elements in my `NavBar` component having a 'class' attribute instead of a React-appropriate 'className' property, so I rectified that.

#### Fix react-bootstrap imports to avoid nesting forms

I was also seeing this warning in the console:

> validateDOMNesting(...): form cannot appear as a descendant of form.

For a time, it was confusing, as there were no visible occassions of a form element nested in another form element. After examing the Components tab of Devtools, it seemed that all discrete parts of the form in my `ReportCreateForm` component were showing up there as being forms. This didn't seem to match either my own eyes or the fact that the form had been sending successfully anyway, but I eventually discovered that the issue was with my react-bootstrap imports. Specifically, FormGroup, FormLabel, and FormControl had all been imported from `react-bootstrap/Form`. This has now been corrected, removing that warning.

In `ReportCreateForm.js`, I have also:

- added `htmlFor` and `id` attributes to my FormLabel and FormControl elements, respectively, to try to ensure that the label is properly associated with the input,

- altered my Bootstrap structure, so that the reporting form will be larger and central instead of small and to the side,

- and shifted my entire "text fields" down into the actual form, which otherwise would have been bare.


### Sun. 24 Nov.

#### Add authentication checks to recently-made pages

I added code to `ReportCreateForm.js` that should turn an unauthenticated user away from the page, in case they try to access it by manually appending to the URL. I added code to `SuspiciousPage.js` that should turn away both unauthenticated users and users without staff status. After thinking about how to do it, I realised the means already existed elsewhere in the project and could be reapplied.

#### Wrap post title with link

A post in the public feed needs a link to view that individual post. The post images are links but not every post has an image. Previously, the backup link was the comments icon. I've now made the post title be the link instead, which is more expected.


### User Stories Review

I moved my last remaining user stories to Done.

![finished user stories](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732478454/finished_ustories_ovbjd1.png)

I reviewed each acceptance criterion of each user story of each milestone.

![all acceptance criteria reviewed](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732487042/aperta_ustories_reviewed_zab2du.png)

I closed my Issues.

![GitHub Issues closed](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732489874/issues_closed_mcaye5.png)


### JSX validation with typescript-eslint

[Post.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFEljgGcYBPAGyXrm1wIDoeB6Pv0at2-AAoRGPEBAAmAVzY809emSo1o8AN5wF9JAGEFUIgDsYAVUNQ4AX0448%2BIULQRLSAB4x6-EzMkSxskKCNPGB8YDWpwbTgjFCg5J25CYhgAWgAjCAg-GCgUMADkuVitOgBZJDlgFDSXInRsvILGYtLa%2BpRK%2BLoAeQA3MJYUJgAVKGAAc1mwpoIWjFz8wq7%2BEbGJ6bmFqH7aeEn8lhhgMCWM1rWOopL%2BU4hzy6OEvQAZYHMAawAafSGAASwEY0CYDmuK2yOAUUSgWTkuHedAAgsMUDBktc3AIPPFzME-PwMVjkqjdHAUN5gFJkBxHFwXHj%2BCVgGzaVIACJITAoJR%2BSlwPTVaBIbk4MDIgDu5ihzN4AncuEgRMs-jFRElEGlEDlwoAQvCYJ5oZk7htHsaYKbzLEqFQPOZGHBJK6ALxwAAUYCl9AAlHAPQA%2BEVUOBwZ2unQRyNwYByf5xyP6olQZOUeNwP0QTDANgAfUTmezufzRbAwAwpiQpfjBJAxPohY8Cks9cjLGAv3YrYg7Zgnbg3d7xaTKbgFxgbGHkEYhaivmHoBQC2HaAAFihzAs5IWscPZkRgoXu4w6nOpDBxGu65PDDfr-R644vbmwPQKFmo55XWhTAsaxbGDIFjEA4lQigb0A2-SNo3gMFCzTRYvQAoIQlsAB%2BHgDDCcwUCbYMPS9FCoG-OMELgTcwVNKBIS9PDQXBeiYIon8qO3cw5DYABRep4C9GDgzDWMf0jGiWKYHgwAMTdvQAA34ecSQAEh0RN7H4OpgBgBTYLjex2Pgv94C4niJSQNgolAlB6CYcw0B9INQ3DcSp3otzs0jFAZRQXTqS5egGR4OQrKQKJFOU59%2BHUzT%2BH0uDvMkujpNmCBDXQX42MnRw0CxLcfTCKAgzE7y4H4fhfxdF4kB4FgIFmb1ioM9z7EM4zqv-Tx8ygEBeWspBQOE1yyvjazqRdGVULgGUfllFQeuAPrvXwNEiDgJgBwYWtNu2vzLCnCA4DCwap0knNryw-BWuzYBMB9Hd6GmkqvOSncLIGiKkBytqOsdDjTOoj62G%2BXtbPsxznJEt7IyKSExuzKi9DkckoS9Xz-PgGk6WC9gZOvVb%2BFHMR8EBPQSf3FSAC4E1Sexbu8x93T8b1fSIYYWcDGHvUR7y%2BBkjmueHbMiHoQV6Fpv0kE558eDFiWZBKNmVJc0TJ3KogYFMeUVJ4RNiK9RMNfKuAsJFOABZUwESZbNtLCl696p7Pt7fgABqOAAEYbZd8dadR7F9fpk3ysdxgkvKhmRYcANGcjPKCs3IqzFKk3Kq62r6sa5rU8jhx-soSigfMtgrHMEmIYcpyRvV9z4dh%2BNMYCnH6Xx07vqi23Yp0Enxy0xKTeZ58VaF581Z9PnsytsfGBfUO4AV85JZzWe-Hl9hFZAZXfWvCep%2B8rWdcu6QDZIo25AX7Nzb0K3r193s7YHB2T5gZ3H-7Qc4Cyb2H6Qf24DmCUCwAu7lTZwHDjAfO2Zo4mwZvHKE%2BUYCFVzq9A%2BGdoxZwak1Fq%2Bd2o-iMgDSMR8oDym9JOAAPEkFIUZxhqAAHKESQB6HQIg2D0B4CzewIYTZUPKDwQ08gmA8LAfGChPQGi0LsvQRhTYPT4BQN2WY5gsi6SQCAegWQ0DEkWAAKwMBcTATAtGRGJLkCK01gj4BEeAyMFDvh-COiwpS5YCxiHUq4osmkFLcKvmIsk2I7D0CgGgFhnj-5VhrEQRwm4kBzE3DAFhABWJJjh%2BA2NsZGHQZF8GZIofwBxvwMngIofUYYUiGFMPkXILImA2DeGpEolRaiNFaJ0YcYptiKH0DADuEMOgtw7j3AeGA9h8k9L6X4rJSEyJwAAGRzNfreBY8zFnkNESUrUEopSynMFM963E%2BICRYaXJA-FdK5MyQcz64UogsOdL1fqtykCXKuRVTp4CAyvNNvkspHyxH8AkSgf5%2BTqFyAEUIkFhSnE6BcTFOKch7A%2BP%2BdM7eKyFlwD4SkHgABJEAswGAhJYauBYjhFGJJ0NONgaSQzfLsQUn4RTeFgohXIYRC97GMphXCuePdvF5ToTIqprDmDsJ4IU3xGz4yUt0mwVZmKWWTFlUNNAgrZHMPwEubI2ivAdJlTOF5oL%2BFKoNbSjlDK-gopFCpRc0R5VYvBZMaI-SbVarGWUbFTrfBmqlaU4A5TVXSPVSwth%2BMWaZSgJKzJGkWyzPNust5FDthQHGFMGY8wwj7MjGAcY2imyWHkaaMA%2BAs1wAgKMFNEwWEUOeK8MAIYACa218rmAAOTwErltUwZa5SvwAIT5NrRcetdLTZWvKhQ4AFShVyPwPyOw-IsixOSDEd5%2Bz8nJtTXsDNUBx1wCDLTPuBt43romfKTwRhuxoF%2BCckGSBy4kyjW8zFU7A2VLkbC-kHBF3LroOpUNHDgSoFgEiml67hC9PMHug9UYIKYUWCeqV2ZumQbLeYS91Yb06FOWDF5e7kOvrVcKhS87OAoCXcB%2BA-7RX4yAyuwY8JuxElA2upDAKz3QYgT6ddm7djpoOKWnN6B1HEkLbqEtbHszlp2EwatQ7Lghk%2BI1BM8pTQjhdq-egA6nhnGHT6t5%2BGxGEaDVUudOIf2UfwKxxNWwK1bv42EaDo7sy9xdk-QczmjPTuDWZhd5HGzNis%2BkvxAzcD5r8J-Swnnfn%2BpERyv5IX0JASgvKvtx4kCnnPFEVICz13QtNM4-gRBjh8sRci0tFCbR2lLZGTEMwdyJPwKjXcYQJPPvjPQYAAAvDV9AQBtefYZ7MyBjgVf4FVzwhn8mFL3dF-gCWi6iKNdiwRbLOnLbkBk1qhDFtUB8McE6fIBTnDdNeUgQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[PostCreateForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzksgGbZFIDKMKMScAvnKVBCHAERSoacDcAWABQoSLDgAxaB1bsuPdDAC0AIwgQYhGFBRgA9NKggBIsdHgAhfDBgQAdizYduvFes3bdB67YenRcAtECAB3J3lXJTUNLR09fQQwgPMJAGEIABsIl0UMGM94gwzMlKD0h1pgeyQoHIU3ArjvfQz7KpqoMvF4AEFM2vg5XMaPZoT%2Bwe7ggEkQFABzBmGG6LGvBLnFpGmJXsJiIecuADoT-TP9NHZIGvbCfX3D3fgAVTBMiBQAE3rOS8uKAOSC0%2BnwHy%2B3xOYHsCxecG0AE8BoQ-gDzkiUfoAAoQbRpRT0ACi32AMCMIBOIAg33wAxOaAO8L0YBoyKQqJW-3Ol16YDAVJpdKQDKZQkCPTgqhg9jZKLRPIxMHZD18dnsgtp9MZhHheEoAAlgNpoIimH88io2DZanq4CgAB7APHIACO5q56P0emA3qdeIAIkhSCg6Vo7ZRkKSeBgPcduRdzgALDQAawekaQ0aQfHFIhEpHw9gwzscuPxhKQFIAFABKXAiOAEYhR4AxmDVzifBZLb4AeRsnFr4qb13s2jgAG1amwoIRsIciVBZ4QALpwAC8zeotHo1ZwjGHjbgY4nk8g2gDdBQC5B5ZgV9o663lBodCQ%2B%2BPTZgZIGAC4uE4TAvzgC8YAAfXoB0YAAzggJA0Btlg%2BDhCbQ8RxPBwJzwH8YAGbAwMgpBoOwRClnNLcwMfFA81QzDx3gMikBmewwBsTdtzIat7DpTIjzo094CTY07CgM0X2II0TTEutaNHLChJQexvgGNIkyU8it2rJAADckHaesNwAPgbOim0Oe9qM-MymzgM5oTxB9r2Amym2nPT2hOWgoCWGATnsFAQCQVcAN0-S-O83yTh0lBMnwJAXNsph%2BLQjDBLgdTlNUzKli2TS4G0jyYEMkycAQ0gCrCzzIpBE5SGAFETgGWEYCTesytcuBXgQAAZE4eB0iBUyQPtVAAKxzGBup66smJSpKETvRyrI6hbbPsqjnJApKmIA6aGUrUaJowabCvCryUB82r6pRScAAZV1rRKFvQkDGGPRg5PoidMpU6h8FUEAyQ4oFEWLSqipK0ykqqvywAG8KgxDMNZJA9LSBkaiOJqcIKSs%2Bamwx4xqJOFl9O%2BTtcIGIC4CppACZYTHr1J-lyc7QioJgGmOeI4qMKbYAKtm%2BZctYmwGXwZdwoAfjqhqOSa-SFla9rtsZ4nmbJ5TOyYmmmJYti-LQSWeE8m6OXux7%2BaYECdDNVaFvSvBvmvCj7VCFBgcdZ1CDdBztE7fQwIeGmiZAaiGabYTpMRaEiCTasAAMg8ch4ABIcBd2gTmAb5GEThnmDQOg0CTSrl1Vzr9H0b6shFbttIr62BaFmd%2Bo5W5iFl7Q6CIOAAEINy3AAWO6AEZK7W8yQSXFdG6gdvCE7pBZazlBI5tmz3roz78wEhTad5yRgCQTJvlRLSQIAHlJHST0yIFCAAOUCpAN04TnlDQcLbSMtWr4pCcAA4taMAf9OpNgATIE4PUUCqFPkZAAKr%2BJAV9DDQNgfAzI4Cp5wCgcYE4bQdBZDVklZUYA34f15pwUhtkApBXfnTGhEDbIxTim-HAdNt64KbA4NSGkOG-WygI7hU99A4IWmgwBICIDggkUlHAM5oCEFlnTWW8wwDVmrEFA42xSLfAdFDastCr6TAkDFKAwAlIwHfh7KA9hqhwjgMNREG4cC5wdIweRU8cA6MINsURa00FmJgN4pstZazb3-tI0BYTbL4MpJghBiDeZwAgBVe8UiMFwIQSYwBRC2CZFoU2IEjDeaXVQMwnhcA2ChEIG4gAHIEqe9DKE82glUnhbD4puPaTAZpa0%2BE5UEUpP6-DYRIAGbZcR-90EEJkXItWijlzKNln09RegtF%2BL0XADxRiTEhLgBYqx7RbGXQcbCTgzikCuPcQYrxxTcDbKWFMyBjwBiwDiREqJnUr5qgcLQtAD8DgvwYTgROGdpSymVI1f59hmCQplHKBWlh2H51eWk%2BwaRMjADQKmNxdZNwmWjqJWOCwICWHQKmOsUy4lNjSEpb%2BRTfn6DhXEv5Nh1T30fqCjhEKcBQuRYQE4cKEUCqRTClFaLE7MHIZQwgAMgZczpXAAkqB6CzLZdffQt8JH8WPDwGAktHDGJsgkzFVBFVkjcUI-6gMyQPN%2BUkUIKqr4lG5SC1%2B78wCImUAAJlAsoO6gaQDfH9Vc0NbiADszBMgLEaY66pbrKie06I80cwLn5evBRnFkQrCGVHCmKzECsiGptqMwMNpABgOhYDWr%2BWR8AgEcGNIgP5SC%2BrHPQdoX8f5QBlY8lVSUEnANAR6rNDCqHQV7e0X%2B6bbLuJFgwaWBV53DqHTwq%2B9UFiSyQBupNeUGBAp5dmvNkrhWHuYIQKAaA3FMWYNaZSWY4AzJYUm-Q27d37qnjfYAOlv24JHUk5l1TQPjt5W4-lgrz0is5Q4MV0GVQirRVKGUA631gYyjAEAmQjDvyYsocEnwfidMwwtADPDxnkVagwJia6f1zMSTk7B9Hh06r-RRt5FH6wAVNWRyBgDgOsdssez1k6q01rgK27QgtO2Fp7d-WdXRhNR2w7h6A%2BGl2EYhCR4TnH4lPBBCp2y17b04HeMRvOxmmzPModi3FqY0l1FoGAWmEACA6d%2BEpXZS7SP8dffxvBjGYHMe4xioJgDj4DGE7nTT2xtOWb82B9A38wA2M4ExfQAAqJLoGhkCJtaM4REzL3CZ4KQO9S6DY2HCwtALoGsnzNifO5ZK5ZZMQ2Zo7RHJ-FLH0YYolq6MPDsOcc6xZz7GOKuS4u99z9O%2BJ6wE%2BjwSPmhPnd8veYHf131ExOyhYbQ3KHsA4HYRlOFHxPmfQgjA0G6seWgst1RaiutaFkV17rI04AAKyxvjTgYeRdM0Qc4GG47NQ4AHbDaoT4eLA3BrAMoQ7frOAbuTe0ctdRdsQZwGepDRCi1nc5sfU%2B58buvfR09qAL2SjssSGEbxjWQB6vFD8kQxFJTfGDKGTI8B7xqvfBScUQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[PostEditForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSyZNxAyjCjEnAL5xlQQhwARFFQZBAbgCwAKFCRYcAGLQBvfkJHoYAWgBGECDEIwoKMAHplUEBJlzo8AEL4YMCADsefAcNE79hsamFs6uHray4A6IEADuXuq%2BWnoGRiZm5ghxEfYKAMIQADYJPpoYKYHpFgWFOVH5HqzA7khQJRp%2BFWnB5gXuTS1QdfLwAIKFrfBqpZ0B3Rnjk8PRAJIgKADmHNMdyXNBGWubSMsKxgCeE4TtggB0t%2Bb35hdX5gAKEMZ5muwkACbAGBWEC3EAQP74Ca3NCEQineBmMAsS5Ia47O4PJ6jMBgUHgyFIaGw%2BFwXQwdzIq43J5PF6o8yhNzuPEQqEwuFSSIjXAEYgACWAxmg50YSDeKFMIGu3HRZR0fBcrRJeBQAA9gJ9kABHLjUzEPMzAcxqjWEAAiSDIKEhRgiMhkZHw7gwGs8H2M-0BwIAFABKXAyOBwNAeYxwADarT4UEI2GIMBIUGjhAAunAALy8pAsNhIb04Ti%2BzlBkPuMPhyDGM1sFBxpAwd0wausNOZ2g59j5wNBuAwQETABcQkEmG7QcrMAA%2BuxVTAh4IR2O4KBjvPF9Ig4XOd3S2G8H2YBNsBPp0hZ9gV1tdZmJ82UMXg6H4JekCt3GAXBms-Rve5IYUix3J84AAC0FNwoHOL9aAFIVIL9B9d3gPBgD%2Ba8s3FSVCAQ%2B0NyzchKAwb0-QzAA%2BAM8JLYCQJQdw-gmABZCAnXgTMUEIc5nTgEj03InAlyDEwoP4yieyostkLgP4a3QlBYhQQE4BNTUkC1W4thgb0AANzAnQhzAAEhwVDOHMLTANEsSkJ5A8jzgE8ZywZd1i2C9CEnOJBnQ6TWAfMSg0FDzYi8gB%2BOB40bO9817fskGPT4p0ci8XI4Qs4CHMC4POW4P0IEDvUEcxBAs-zdTQNg0BA7io39ETSqDcxzEfMsikJQoIA2b0ar8ntOCXTgepoujGOY-ocLwzhsHDTKIJFZc-hTCygIk0DaPopA8iGq9My6gA3JB%2Bn9XiKLEiKEqiur-PuHLzprUdLIjJB9v6W5WCgDTbncFAQCQFMhyeg6YFeiUPt2lBCnwOL%2BpKrhEOotaJk22itiObbquemAjr4pdgDIdHAeB9761uMhgCuW4JncDYYBA2qBLgABVBAABlbhEXaIAAayQAB5XQACsqBgJnme9F8YdO%2BtIprLsHqDa7bzu%2BmApSocRehH5eYFoWRb2gm3o%2B0mrnDAAGRb7tKrd%2Bu7AbcPEsMhvWph8F0EBFLYjiuL1w6yJOnsAZesB2cBi0rRtcarOAsgVDvL8WniYEoolngY5rW5EQOv4Ctsk5sBz5Po%2BsO905xTOCocs8YBHeyEtPWdk9x7iXzfD8YBC6F8CTQH26N1FTcWv2xMLkBi4zuiCpfavm-fFwO67l7e8Ifvk766Ql2H0fS-HwQNhEA7J0KcCkD%2BaurUKYgltEoTB57OSFIRdUVLU1vtN0hL9KMkyzOwDea2ToMZrChykQfKOk9KGWMn8Tg5kercHKjASq1Ukx0weo1ZqhBWoUw6l1ZBPUAp4xwVANmqJIBliQO3YwbAiBwAAITpkzAAFhNgARhQfVcK9ZEzJkIcQwgpDiDtx8igf%2BXBrYTW3HhayjlFDACQIUP41wdpLgADwAl2sGQo7FCAADlvpIHTIIRy2g0CAyVKRemyjgS3AAOIKjAOYuWcBLEqFuMzFAug5GkQACqxWUZYFxbiPGFAcew5x1hbh9BMEUZWPYYDnDAPowxldBAxKDF9H6Bic4pMcUGMGEN9E4BzqvdhQYPBIypgUx2iMtpIGKfVcwIT-J%2BKsbY5i9j6Y4CjNAQg7cc7t3WGAYiP1YTHAvH8VUWNuIxOUYsBQYMoDAFojAAx8koDuGaBsQQcBubnHTJA1UnBGnsJwMMwgxw6mlT8bMmARyey%2Bl9KvCxLS7G3LEmEkEgTPGRMBs0gJ7jPHTKsZEvghRUlKUIJkyuEpUDZJKXAPgsQIU4AAGwXPqukxJFdZywpKXkyGeysUwDRaVMpNS9lVI2jU4lPYGkWP8eE1p%2BB2kPU6Umbp7dSzsH6P0swQzURnNcvNCZvtvTTOuXAeZiz%2BgrIlOsqmWydl7NQgc15-kTn8vOdM8w1zVX3MeQ9ZRjIPAxLQJo2EuiMk4C0kZMkFI4nkyNe4bgNrySUlRLcRw%2BToHUtKe4PIh80Ccz2TxcigDILqQgI4dAnM-TUtVSWWiJjQUGoZC4JkqrDVpo8BorRFqCnWpwLat1hAPVZqdXAF1dqUQls9ZDb1vZ4mJMIC7N2Vd43hRQPtOljrbl%2BLUY0y%2BQYRAwE7p4UVol3lwA8M7V2gJyUI2zC2wEhyLFZFiO25RNQc3mr0QYsA5xtAACZ7LaBNiekAfwj1bIvXsgA7NwQoGw9kAA4V05KcZEhSgwwUljNTo3dVqjKImLRExogNnU4DpCWz9zRWjcEvWQCYqoeBIeMUUfAIBPD8yIH2MgB7OWA2MaYqAWkfU9nbW855bTt3-oyUk2cRH%2BhmJ-T2ZRpMNidyQBR%2BqyjUYcFNbmgDwH7Xur49wQgUA0BKpStwBUdFj5wFpe%2Bt55h2Oce428-tLHKN-KCdp-yAmd2WoLUWkTNay0QdM9Wj1XrSTklI-psSIEYAgEKFYAxL5tBMvaigE%2Bjm4AafquUq8NMOAvn8788Jnzgn6b7cAXagWgzvNuDIiY-nUIeZSl5sAPm-PKf8ugExYBlmCBfOYAAVDiuFYlSXI0qQu4Lr4ZP%2BZEGQaTxwW4uDI6VJT1WnH0pBIy5lfXWXJnbi%2BHlgzvSnNGUKyZ46%2BtJfFZKpZMq1kbIVUgXZ%2By32LZ7OqkZWxutNO1RMWAgW9UsdUfFmjeaDGXovdodwHgTikUKZXGRciFGcDiwlsFfiYODA3b0IoG6t03pwAAVgfU%2BnADC4F-ru4IS9z2WhSW0I93Q7VA0nrPWADHl7D2CG45uxoX7Wi3aEziED3z%2BiHPe7OT78jCA-ZB-0cnUBgc1AzZkOIvaBsDs5PqmQZ5uR-EtNaQo8BGyeiBCocQQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[PostPage.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgBhCABsOXHv0EwAtACMIEGIRhQUYAPTyFIiVOjwEEAO7LufAek069Bo6bv3Lk8Bs5CAA7RmAQpCgnVVcMbV19Q2MzUPDIqH9rGWMwBgBPBSRCGL4AOjKTCpMAQTAwMpAIABN8IrK0QkIswJk8WgAFFCMQEvZOZzU3DS58ZkyxAOl4PBQAD2AIQmQARzZS3mrq42ATdc3CABEkMhQ2-R7luAGt%2BAnVSpeDR6D5EBAkGFZK5mAAxaA8d7lSpobgAsKEVL-QEwYGoMEQn59AjEWT4KACMIAVWI0XGKmhVRhaSQa30ZnxhJgJKi8jCtJgWPgf3hbwph2pyIRSN5XLgAEkQmQIsBmHQ0FwFEooVN4hFpSFZUgNIQFYoFBpYYFImExTUukg%2BZMjoLICb6ebiJzFtkVhxLWgABYAWWgSEuTBQ%2BxVNpMc2ACkR4cj-gkcfEZHwIQwmxCz1eQwA5kgABQASlwEjgcFhIQMuDgwGa%2BwAvDikEMRoR84ti6XywBtSAGbBOr4wAC6cDrtAYTFzeAEhHuhAAXHAO0PWHnFkWS6Fy2hGSiWdER7jt8TSS21%2B34GAuNKigB9MDADD4lh1rcEnekgD8ZQvECvSFv95gR9W3XMt4A7I1eUIXtLR5FFCCHfd6EYZgc0nYoZ3nRc2BXeNi1ochKAwHN82HAA%2BQtxGLNsN3gT0UBCZoil9JN4DrFBCHyZM4BImtyJwNcqLgQx8gowTBLPBc8GaQN527eBWGwKSZPXIV9DYBC4BQewUFlZ4VGAYgyhQJUcw7ASxOLc4tl2MpsxgHMAAMTDkxEABIcCrVgTAcvNMHMiyrO2JAdlsy1HJMCC4JMd9IvZZpr1CW9XhrdzPJ8-yqIHHDKIsuA%2B1eVC4CnDCFzkpdstyvKYLhOCc1i-QKrE9g0CYL1uKiKAC34nKLJMEwQMIRQkDKBQIEzHMOsawTWHM1hgOLOiGKYiAWJPHKFIXKsstXHKBEAqA0xzcyAB5fBLBR2MIAA5FAARrXhPQ0ABGAAGF7eFIjLjvMc7Lpuu7eBANYNDuGAIDgMB8g0AAmCGNBeuGFEzGHeDgJGaxwAAOVhPp6sTjv7XAKi-V4ymKhR9A7F6B3YfKDEIDG6Zgdg5KzFgTFxyrvrSHSMl%2Brp-qQDHcgKIpCDKNlmDCHGMsEnAXyZXc4HfbjZfx2CgRBJBwSgEA1Ys79f2vKsMYVt8oi-S8Iz-Tz9bEw3rYGADHwxh2bzvB8BBmvHKuo1SkHixK5Ix22fd9pnGctftvd9sSnQ1-RI9RGqERj2O4A5u2C3nerxfJ-QRsBTMYE9ZXVbDizeAT7os7gecQjaBQ08q%2BWU4L-PxaKEJi9LlWjor-HJQ1LV5UVBQ7fEz0I2aQlTbbvP0Ip8WQGMYj6oLXjy-T9W24n3KAGskHyOfVLKUPt4snBifq5uL%2BLCOcCZ2%2B7-j%2Bek%2Br5-08zgeLLzPNP8qtJRgAAZIuJcT6QTJovAuXce4ANyqNFAzQogY2Oo6S0eU7whD5hzeBFk6KEF9AIDGABCEhucyiRDpHgsSVCYAYx4uRSgMAvREP9IGOq89oLJ1UoQf%2Be9v6x2ziWQ8zJSRl37tvY6hAwD0VIldcGuc4D5EtNgLQLAS4sGlFAcsYMVK8hIcdEwMi5G13nJI9O0jZEhHkYo%2BexNlGWiMSYmxWd4FGMlrzKInN8apAUD44sRjfA%2BOyt7eMtInjINuPcdMBg2bCCAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[PostsPage.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgBhCABsOXHv0EwAtACMIEGIRhQUYAPTyFIiVOjx5AO0bA7SKMu58B6TTr0Gjp%2B0dnKEtJcBs4ADFoHk53NS9tXX1DYxNoqBBQ6xkECAB3N1VPDCTfVNM8-OzwmQBJOzInYGY6NC4FJTji9Q0nJrsWpA1CdsUFDTRuSGcHGul4PFoAGQg0JmAIOzYij16ufGYQsXErWvgABQgDXd4AOhMrg3mIvBQAD03CZABHHe6%2BHcHkCTMZgKDPtcACJIMgofAKfQvGQAOQgyEICP0txBIJQhGI%2BhMdggGgEmMRhDuYDsAHNkfAAIIEpDwAH3YEPKbhWZE5mEhm4AjEWT4KACBwAVWIrnY7NxXK2zHeRNF4qQUplgSQKsFBgAngokIQcZyTAajYRHtd9BcULSkHcQBAACYIx1oAmCvCUGBoAAWAFloEgoUwUP8VICzYdgAorbH44LjGAGIbjaaTCDGWAwE7Xe67p7CKEJBIyPg7BhNtsnrb7UgABR4EDGwgN7BNREuOAAXj4vDYAEpcGXxHA4FM7DcANqQAyEbCEuuEAC6feF9EYzGbcHJWMIAC44DP16whycJ1PZ-78asUC6kC6l6yABJ3iAPp-r-u0BhMJs4XjJALwkK8thuPAwCYf07BQVsdl-YhVnWGAa0bUDx0nCD4BnH58BcfUXxgABFAioH1H9N3-HdeF4TDwOneA0DFCUYGlHskKQNU2I4qAMJOMDN3ISgMEbDC%2BwAPlHLDGJuX0AxXDd8X1Ks4Ak3tpJwISJwnQx9Rk3SjOwpihRdcNELgFB8hQForMhb4kB%2BO4HRgRsAAMTHnIkAH4ABIcC7I5WGIFAoADXsAvwwjWHchjjInZcbUIRtzMYeKEsJd9CHvR8XUbQwCIy3T2FQgN1JcKAR202TjJMEwTMIRRHQUCBaUbSrionVgdLYS9dKyj8v3yoDiGK694DQ1tXH7QkABVQCQCBDnEkdNMM4yFP9FcBN61hsAARgABhO4qBBgMVtg0rTeqvI0woW1tlrcqaXGK1h%2Bv2k8gpcbBooo7BoJgWD4KQbAWPVTUXFXTChPOy71N6gAeKpJwUfFCBRUHe14f0NGOo7eEk264CR8w0YxrHWxxkB3g0eEYAgOAwH1DQACZmY0I7OYUWl2cHXnexwAAOVhidqoykeACmCSppAhfcuETThEZUHC-04ACi1jTuOg1YDOop1i9gTHFhKJyRjIeDQdHZexnBtapPWwoDAAhMKeol4ytjofAtBAFohY6gA3DUYDW6SkFDhxqQEaOYBhOEsQwsWSclq27kCDo0%2BM4OUAUAihf%2B-VPfN727FkW86XlnAQ7DiO4EJMjCLrmPGCgVy7jzguQNLsvdJgfUwHl3hlRgXgc6Mm3Kex3gQCgEYQH5yfdLAdG0CQf1FEfKAced9XmeSievaM02c6R9IYjN82cFvHLPzyuAfMRk-dKR6-%2B9wbyqX3Sk7iNOkwMn4v0-pLBoAwhhtA6AoFeCUAxxhdBKIW387i-30E6Yw4lvIN0bLA82SM6xwAANZIH1Mgm0dxgAunYDgIE1IbTsCSguIWTD9Amw-qAicQ4hx904RONKKBlgalpMDchC5UHGgPP-YRwNeF8Nal%2BXeOAkb8lZI3MAThghwFNnIzhd9gwCCFgAQiMSg5wKpdGgPMTAIODctoGNDOGRs39iIrh4XgicZ9X5GRHMeXB3jjJkyVLZLR087bUxwCmNMlpM5KjDqnAJCUVEsngIQcKQs0QYgPOwVsBIGxC1ye2B07CPGkzMMEpwLgOFl3cQEi%2B1TdK%2BJAf3IJDgQk9jCZje2UTB4xO1A4BJnDkmEnUZonsXjP4X0CO0qADSuGWKmYoDhF8qjX0wp7McOoFhwEfEnREcAVx2gdCcIAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[Profile.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFEljgGcYBPAGyXrm1wIDoeB6Pv0at2-AAo5MwNjxAQAJgFdZaevTJUa0eACMYAOwDKzNhy558QoSLP8AQkpgwIBuYpVIeajRWrgdOABvOCV6JABhJSgiAxgAVXCoOABfThxLawE0VxgkAA8Yen4omKQ4xKQoCNyCmE1-WngQgBlgAwBrVPTuQmIYAFocJyqBhVwG7ToAQQA3FBgUZIteASEcgINyov45haXJgLpHZ1ceyyJ0Qd0ICCKYKBQwBycXA0Om4NDwoyQYSQg0jYABF9t0VlY1tlaoVigCgUhQYsanE6g0qFQcgZGHB4TIkHAALxwAAUYBwYHoAEoiQA%2BYJUOBwLE4kLkwH4gA0cHkui5cFAKAA5kgjMAAF4E4kAVml3WJ7MpfiZLOaAoU3MwEBYLAgAHcqvQAPrADVwdkIo1gYAYaJIbn6rbJNIKqT45XM1w4tDRWIJJJE76RX3bSpQElUj2qgXGx1VQM%2BsoVJIAfh4YSqBhQIClhOJcagUa9aoAFigDAo2AAxbW6vXcssVtjxAxanX6%2BVB37-N0g-YRvyMuBEGDRAykodMgA8CmAs0nTOZLBQ6gActmkISggADEBMAYAZjgCgGmDY%2BTgKBYwCFBgGwDyIHoAzQ23jABIgrz8XAAGS-ggzwKF9tSUEB3hSbcUgXWkF2nWdZlgyhFxQuApzaTolxXeh1xzQl8CvG873CFhMBfN8oHwOAXC3bd%2BAtfFik-U1IJSJDUNQqc9kWZJ6CgNAtwYtgrRtUciDSEskBvEsYC3QURTFSU0n4diOLQ-gMI6VSUKnfgEO0xcZznLC1w3WiQHyAYACY4E-Wx2B4AB1aAFHsS4OlYgydMYHADCFWkggLFJdJ81x-Lg9T9IiozZhMnCzJ3PJCiGaT4E-ABCb82D-AD8BAFgBhQJwIHwTyIqZIJMogPlsv-crF0TP0wxy%2BqmXS4BYz1J0WuQtSmRJNs60NE0FDgFMJ16vrpxON5WtQtBl1MvCd0-fRjFMByZtcNJVsMExRHoHh7GXNAOgAeSca8tlYuaUNcCJr1OrcIzpOBG0rJAW0G-UyV7JAqWgyapq8qavtrfVbvUraDBBlCaQALgmqbDOhyGVUW%2BLlu3Xb1oOo7Xm22ygjW-azCOk6PKgtG4Hux6OmemlCXpd7q3BvVfo5NgAch2G1Jrds9Uh3Tod5pkqW5oHpz0ucDN0qLesjKgUkHSgqAKT4FCQTAipYeA8TYUggA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[ProfileEditForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgMowoxLZFICiAZvUhtccvXAL5z1QQhwARFFQZBAbgCwAKFCRYuAsQASwQjGgBPVkgAKKKChCEuPPgOGiYAWj75KUawBN%2BEmXOjwAYtAG9%2BQiLoNgBGEBAw6oZgAPQ%2BUCBusuCecABC9hoAdmYBlsHWYRFRKLEZMNlJHgoAkiAoAOZIuRZBGIXhkTDRMXWNSFUpCggQAO4tgVYdxd2lMSOjg-LwAMIQADYT%2Be1FXT1r60upa1nkwFlIUFttoZ0lsSdnF1BHCgCC65fw-q1Tu-cxD5fV7wPAoAAewAghGQAEdTD8hAA6JExFExUrADGQ6EAESQ9BQ%2BHWkRBuBkcCUSBW%2BCgIlOAFViFBMBSqSQkDAaXSkIzmazpNxEYJ0ei0BBTkhwZEYtz6TAmZdHlKYGSQjAsmRNJ8TMLRaj1NqkIQYuVskiQBAnMSkEi0IRCGTSmAtTqtvrAWAwBarTa7Q6kjIZOKsuo4Lo%2BPRgJ9aE5gDB4gIALxwAAUAEo4EmAHzk6SUkNhtC0%2BWKq4pmhy3kK5kZqT5uCF%2BDELkl6tlrPszlVvmXOtspuKYBOUwV4j6QzGfsNwcACzUGigmk7NFU6i004LErDoH6XmjzTHSHYm8b2-gAG0wJGD7iKChsC2IxAo587%2BQALor4hkChIVM4GylLXi%2BB4APpgMAGC0kgABcQiCAKlKcOm9ZbqGoJwCBr5IBBUEwDBo5YTeb73mhZ4YXAF6XHwUCEI%2BnK0HS0CEF%2BR6-pQAEofWbI0AwTAYKmGZZrmgENuhYazigWROJ8ACyED4KcnYoIQmhZGgaaZjmeaUnpcDABwqbFjyvZQAA-Ei2HgcOlkaGQUDnA0wlJq5BlOJmYn6fp3TLl53n6YOeBOPeREoKMKDxnAEJQjCSCwkiTQwKmAAGMTWTqMQACQ4MOnAxClqFAQFFFhngGW4ZB0EiERIXkORJVwE%2BJFIO%2BKAAcRoGfHh1XNNxxX6dwaAUGgs5pjRnkDd5MQxKVGy2usEDORNDUlfO65LlZRCzqmggxIIRXid5nBTdwSDrMQulrQuWhbYQO17Qdq3IcVnCrVJMnyYppynpw2AXiZpb8nA62Lto7kfodA7niD0myaQ%2BAhCAUUpqp6maamSAAG7VtponFdj1ZWSIOOnPihLEslh2BTD9C%2BG1nYXOMiZtaelKGWmu5NPunyWYD1aWThhAXgADJDV36XTCRtUizq8k4u0VT1BEiIhBn1NzB5822pyCwewti9TeknUdvkS3pQVwHVKBhRFUUxdCcJbclaUVSaOV5QV2BSyAbVG-pLY9jWfbGTrwdQHjab%2BQFKJ2mHZZISVStVSrcFW-exNdZV%2BEwYng3pv7emg7dDQQGk6AANZs6Yw0wKN410pNR2UjNc2fEii3LY3z1NYxzF0ZjdJIiIhCQKGSCWdbhcm8hPEzjDlDSvu51OCYKapsVAA82ZTZvZoSlNBbrKphAAHJGEgSY4ClOXqpqMBGoQSL71k3C3xqrrGs-6z4EgnApTPEqEoVjrCghXK%2BLlczF02qXcuaAq7pkAfpHezc9IrGkmgc6u9TSZAlCggKe9cE5DQMfB058QCX2vu-e%2Bj9n5ELfjgO%2Bn8n5pB-n-ABcAH5gEvoIQgiNkaqnwSVEgKAcbYJfkIykm8YhCKhg2EQKscgbyOpvRMcAJQkH4fGK%2BH14aaKRvGTgki9KbwWMY-Sm8DiNlIWfC%2BSZBBgE0NYAATFhawIs3EgCcC4zhKprCYMlC8OAXir4AHZuDrAaFfAAbEYw%2BJjHiRWeNYk%2B5DKHOmYUiZUpw4moIIYmJEABxOwYBzGNVwMnHONUABk1S0zxMapvKMDQYJlPKSYvoTQmpQDQFfSpvUhQ-2HHAGRDSSrSOaa0sZ%2BlEHTL0jgGiLFLL9NTpZeoYAhIUIdP0bAw5wSR2Ue0ghQIFBYwMMAaSMB7ERSgFkJygg4AVyQJoK%2BezclHJKjgLZhB%2BhII%2BXAaRJyYBtJKgXP57TN5xixiCxpBSAAyKAQhYLyUckhqS7FUMYR-B%2BOo6EVAlAwphOKv6sN-twO%2BwSnFEg0AAuZAVZwwBAOseI9iuZIGsPgMAi0UBOEEHSvSMLykrA%2Bl0mAs5mhsv5VIuIvgkQIqResQVFiYhQqVSYgpPMkBSvcqyjW7LOXct5dqkQ9BXl6s1eCo56BMFgCuYINlMQABUfKUWNWASKyhmNI7R3%2BezIytpyBQCSkiIWHdeQNDFU3X1AVmpZ1Zj66NelY4VTannRNek2XwQZAgOFdogiUAAPIhAAFbMAVDmzGSJA3BqFqLSGabE39VdeUy17TOCtpKqM5t0qCnFMUqUuZkLgBYxSWQuxghvFeOsFkCUAxsw4EXgmYAK9CCcGkaqsZ0jEnnEuCCrdGw91WJCTgAArBEqJOBYmjtsRQ%2Bx3iZ0XCttYKdIRFrwLcR4sAz7vGuMXf46slxBCCssRKJ4lxr1pKvhk4lT9skwCMQulUy91irzXbKUDSTd3xP3Yq7BZit4yoSLI%2Bsb0ZBSmWFbAkRISThharGeMiZxBAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[ProfilePage.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgBhCABsOXHv0EwAtACMIEGIRhQUYAPTyFIiVOjwEEAO7LufAek069Bo6bv3Lk8Bs5CAA7RmAQpCgnVVcMbV19Q2MzUPDIqH9rGQBBQmJ4TmdeADoSkzKTNG5ISLDCEzyCrMCZAwBPBSRCGL5Kyo6uhoAFLjJgLuGUAHMkEpAIABN8LpK0fJbpeGMwBk7u3tLyypywMHmllbn1wk2grRgQvaHD-vLB7pMAIXwYGFCLstVjc7jI8LRZPgoAIwgBVYjRdhFVRvKppJAAD30ZihMJg8Ki8jCmJgoPg4OIUyMIB6SJULnUGi4vyiZNwcBQGOAEEIyAAjmxXsdysZgCZOdzCAARJBkFArfRsnASOAESljCZIKVMFCYFVq%2BhIGCjCDjLraxh68R04qo6rErEjDXmnVE5hYtk-P6hQ5xdyJLwpL3-EJsgCSIBmLGRDLcCU8yVMEaj4ZC4xCwGYdDQXAUShjajjEXTmaQGkIOcUCg01UCdVJYgCWzgwx5hXpRxMkAMIzbSo4RrQAAsALLQLU6wUF1G-CYNWcKW6N7LwAByEGQhAVPWnwvF%2BSNDRCECZ3W3JTAIWm-ZNZtIi0zUq4YEWDhCU47dpqoSQ9RMY4EJ8IBfN9-AkCQyHwEIMG5d9b01KZZgACgASlwfV7QMOAAG0hxQQgABkIBQRYkEWbACgACXwoiSLIgBdOAAF4DQYJgkCQuVFyQFDG1VTD4GwsBnSQVsewoo14MmNtCEYljaDY5gkLwAQtwUfQAC4cMY1heIw0IsLQXFf3xBFmINSFoRMgkoFQvi4AE9lgEWQV5MpFBqUIOz9JCLC8AKKSJ0tOA8JCRYugAMSrBxsFC8KkFhNNoscdg3MNY0RItFBvPEfiDPJOAwCjQLXINQKspyvLfME4TTU1OTCuKkSSlU7d7Mc4BCAAfTfKJzKMqy4QRAB%2BEpaCgEIUBAFgmNmwqRNG3qoEbfVaHISgMCQ1DmIAPnQ3LVQc-KBxgYcsvM-D2mguBtqYvblQOw64EMdp9qep7HOwvBFh1LSitmErWGwb7fvmurpJ7Ng5P1d7DpQewUEzFsVE6uYUDzJDsJh2G4a5Hl%2BRKWYYCQgADLsRIaAASHBnNYEwSZQq0cfeiV8aQPlCaNUmuxkkxhqWrqutqu8mOp2mGaZ5m4HovTHvegLMp1LbhKQAA3RSeN2m6HqluAygvAR1cYZhJeZ-7RJErSVLPdTCC0oSmvBpAdNN97dNl5mFadsT9CQ4WEJkj2caomjiNIxYkMMfAePsp72DQJhhxuqIoDQnWcZMEwjt8xQ5gUCBpiQlOg7j7HWFjk6zqVoOgZw5yJIyp2spllaDscyMIhKlikOxgAeHbsdVXvfDgY8AHFfmYKAejQBR8MIVcpqQJjeDADENAAZmekkaxM1kB7lp7e-MOAFGmJicA3%2BO5-yRfppX91NDPjQujIUkD913vk1mQecdn%2Be77LxwB8QgJRArDGABgKESBWC-1hsyMKZFZDACgLPJAcD5aoIvv7Loo0cFICFpAmA0DYGH3eiYD%2BONe6pAUJQ2Gx9FCn3PjgAAbKwOhVChxb3-rfJeK8QAaAAEy8B2jgfBi17AZFYNQrhB8MFDxHjwhefDeAACsiAwGAGQdoNZ0RhF3sSaIx4NDTEnlEW4HDmYMKUBiQgF8r4ORvso%2B%2BvAQA6OEZYqWvcHyqx2j7Qg1CfGeKsUEsRC0LwyS6tUKCMBpEmCCfIw61DzDBPetYuAtj7HXwASotxQiRGJKPkEqKeYHDmMCcAXxhSkmhPESUMgyVzFRIgDEuJCSyH0Joako%2BJ9MmX2ybwlxeSPHVKHsUxpiwKlVI6VQ2p4SGmlPsN1aJYQ2mVO6UkrpiTqG%2BFSckxQeyT5nyyY4nJLjH4v2mEyYA0whzv0STgAaeIbJwAAGSvOqQAQk6j1SRfV3nVL9vM5KXVnJwGGjdUZcBe7BlCFC-iTjAEXxJtTB4TwYD7FAbCkI7BUWPGeN0EoXw55oAANYAHlfgKAiDAkmpDdaw1CLIalZKL63T2nFLoiUFn53sECp2KF6UMtVBs2G3LkpQuodi0VcA0JaR7jM%2Bh2L4WnMGUAlFOA0UEqxZPUIuLNX4oxUMIlJLSWsDpSqplLLSVsrQndEKKAwqRWSvyu8gqoUyqeiU3lkrvi6pCDKlCKFElCuZjTbqS03mvOhYFEgD4YBARApIuAzlsHhNpnAChoa0lbLITshwHDqGUNlj5LCHcQjgJkuZBVR9PG9yHNEChv9e5gFVc45evALloD3pkURdSlqsAAOQ9G7PoahYA60NszZ4sJ3sZItRtvoEoXQrwwCHOCyFMyv5pgiKWbMuYFCJOHBMRYMI01zp7AutSS7IxgGVm2O1e0a0Mt7j7OApKkDtGwW2EoGacD61HewAKMkL5ezvP49gTbFWyvddBn6jACK-mmGu894H52tVtsupDa7s2w3znRKAF9e5NCNHAQgYAIgZGnbh96eFCAASAZ8z5%2BD-ElEiFiGjT12MwFtVrSgp1RzjgqixmSDdK09lg8zKDsM5WbqsSRmAiTCBYJwOuTc25OOHWmvkKMyL1xwAw-oDgLSwrYGpv2v5UB2B0ZCIO%2BAo6yJwHaEaEoFqZnSfepJzZxbW6qgEMQiacmkm7ObSfJRSLXHr3lP8Qq7jCoaAAAzxefsIphF8AAc7CMEMLCIjKj4W%2BE4B2NqkoboTJZegzgOjtFw4bufZ-T1uBy2BU07DHAzWRIQeqUWxJsn6teIU2RijIQqMeeZl5zpbo8tRDrbmo%2BJgQsHVlqQ8C4hMTNlInKBUyNvZRkbEAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[UsernameForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgBBADZIZnbnwHoYAWgBGECDEIwoKMAHoFSmCIlTo8AEL4YMCADsOXHv0Fbd%2Bw8Zmjs5u1pLgdnAAwhDyHqreGjp6BkYmpjHyYbYyMa6MwK5K8V7qGMn%2BaWZ5BUVQ2REyAGLQPCqlPhWpgaYtUCAN0vAIEADuJWqdft3pI6ODkXi0ABLAhtAAnjTEAAooxiCEbBOJ5VxOSpoAJtwLMngoAB7AEITIR%2BztfAB036a-phMwEBz1eABEkGQUPh5AY7vAcBI4ARiFF8FABPkAKrEKCYJEo%2BhIGBojFIbG4-HiT6eH5-AFoNzMR4GDLozEwHFKGpIFnwuDaGCuBgbRRHL68AEAwyipCEUzBFyub4gCBXGFIb5oQiEfkmMAisUnKV-WRgMAqtUarU6sKM1yGOBcqCuFAgJB9HgAXjgAAoAJRwL0APlwBPtjoA2rQXW6kNhiJzca73QBdIOEhhMJC%2B3i8f1icTIiPwSNKLhQQgJ4kkDHQQjpn20LPMX04VgF8NuR0ACzWLigGwzK37mwDheL3YRcGAV2OTd2%2BzdhHHXYd8DQ7PJSeKC6QpI5ztXRbgJbgiYP2%2Bdw%2BIdGJl4pSmPyNo5EoGF9AaDocRJ%2BRwDIP1NzJR8oAAfm%2BMAuDIYBFAAfVnCCXAYKBCgAcy-L0sJnK5A1-ZECPPYlnRTHNgMPXFvhjUjOz-Y4kHkYgwzo5E%2B3WQdIKIHtc1MfMJwI1gCVYbBI3Iq9KTgNiBy2HDU1oyd10klBXCuRQ6HwbQQGAeAfRQQgNlcNA-SQAA3bdAxDZjCNM7dIIEMz8ghKEYRgZ8CKMId8MIuAUFGFBtJ80E3jlTjXN4UwrgAK00ARDE0aEYB7UwY147AvO8wlY3dKkMo7fjCIvLdQM-KDTOdCzQzbAkMt%2BOyysparvOouMcu8jt5O8qTNm%2BNCIHsdAAGs3ORdg0CYNAe2MjE8Ma5FTFMU9u1iTV5AgDDyw6gqazrStfXLb5YsgB0kAgq4mBQTa2CE-iBBgdF3F9RqAB45mDWa4CezJT3kPTCAAOTjL1eDADZNAAJjgEBHnipwIDgZktDQbclF4SGri9HAADZWDeliCM%2Bpl-Lqb7foB90Mf1Q0Qp5fIcfewins9OA3HUzTtIxntlNU%2BgNK0mBRp%2BnUyaQIGQFBsHeFxjKMsZ1pvgAcXOMApelmXPW%2BAAZFBtAY4Mok51w0JYZr3Se3o5a1nX5BV1WGfVmouHkenbbAH6kZ7WIriUIGTaQXhndVmANjAEXeAR-28dtuATJQeR8BFnBfcEyPbbcfXlKNjG9ocmAKqIncspzGz8m%2BRgoCNmBvhjuOkH9ZOo8I0wbdts31cViB8GVgOCJwct6wg32IJAExP3dHUUCN7BZ0ePPHpTmWLBkAakA2DHp-YGPUOUmAgb8l10Ml7uMpwMfCAnpB64b5EzcXmBm9V-066Pj7FTcZ-i0F-7AZwAADAASHAgphRBzFN8V%2Brh2AAKAVTQgYCa6sB-pfK%2Bad5DADQANLOecuocV6v1dBAYkG23vrbKIykkZO3nvjBUTglTEJluA9%2BJMhbf3-oAoUMCwE0LcJAthwDZSwPsPAxBjCg4hyBoQXm2kI5XzodLOgKAzLPzNuA2R19zb9FkWbGoRMlDEK0bEZuZtXoEloqwQsvIhhwC9s5WETpkxxk9MIIAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[UserPasswordForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgBBADZIZnbnwHoYAWgBGECDEIwoKMAHoFSmCIlTo8AEL4YMCADsOXHv0Fbd%2Bw8Zmjs5u1pLgdnAAwm6MwK5KHqreGjp6BkYmpjGucQlQYbYyCBAA7kle6hhp-plmJaWFETIx8hVqPjUZgdkQ8k3S8ABi0DwqlZ1%2B3VkjUCADkXi0ABLAhtAAnjTEAAooxiCEbO0p1VxOSpoAJtwLMngoAB7AEITIR%2BzjfAB036a-phMwEBz1eABEkGQUPh5AY7vAlsQovgoAJcgBVYhQY5fXgAgFoWJIR4GbIotEwTFKHLMEnwuDaGCuBgbRRHXH4v6GVlIQimYIuVzfEAQK4wpDfNCEQj0kxgFlsk6c8xgMDC0XiyXSsKE1yGOBUqB7aWlaBXWY8AC8cAAFABKOCWgB8uAkcDguv1AAs1i4oBtHQRiKt1v77WJxO7PQi4MArsdrbQ9gdCOG3R63Pq0OSkBisYHaMjUbnKVi05GM3r4ABtWhQMFMFDYYilpQNxgAXQLxAYTCQNpw6fdCVKAH0wCgTWaAIwALj4vEwQ7gI-Hk8IpqgVwATPPeIv06w7RGo5mY6uJ1Ot9PsBf15udwmg23GyfK-rq0ouFBCM2kDASFRaBCC7RMe0YZgByPN9ozgL0UFcK5FCieDXAAcxYa0bSQAA3EsHWdV0K3dFtDXbFAB2Xd1fm%2BOtyKXYj3TgT88Nyb5GCgDCYG%2BVwUBAJAO3nXCS3Y-YuO%2BHCUHkfAkAYpi2GPQ831ochKAwG17UdF1B0Y4AyFtbNizzJQAH5vjALgyGARRRzjMyXAYKB4jQzSAEJLWtOMHR0%2BT3VMUw4AEK5gAEDBn2xPS4BgL0kADfYWFcfQopiuAynyVL9OitY4AsiArMUKi4N9TZzKIL0bV4UxeEUxjWEPbBq0MilDWwH1Qy2WMrg7GrTyrOCEKQ%2Bh8G0EBgHga1Jw2Vw0FtYTcgI7Tlzm7iLOWiEoRhGBy3kowAx83yUFKFAxrgJ4XjeXlzNeLbKquAArTQBEMTRoWi0xLw3M1TDQVCMKq7YX0YHrfLav0Nm%2BNCIHsdAAGttqY9g0CYH7ZtRbzCv898%2BgleQIBcr9gfkltAO-VMv2%2BJ7ID1JAzKuRtCbYJT0wEGAUXcG1lwAHgaJ1Cs51oPXkdcADk%2BKQS1eDADZNG3OAQEeF6nAgKLiS0NASyUXg5auS0cAANlYXnGPk-nYmO9K0CF6VRf43W5QVS6aRLQ3CpNi1UuZYbRpgXXUMGugvbGl3jd891OYtb4AHFzjAI3Q-juBw9Gb4ABkUG0JB5CdYWkHKD6H050wI7TjOs9d%2BOk7mb4aS4eRy4TsAhfVr0%2BiuJQJZHHL7zNXh6-jmANjAcXJe7rde5DhP3Uk6TxZwO8ryuac6onye3BQhCMN9gbkN%2BpBl8n%2BPeNt3h58%2B69x4P%2BTTDjy-C4j6OIHwWO%2B-dHAv2AszT4faczJAEwNP4tKFAGFsBxkeAtW0L8mKcwsDIGGsVdZgPYJJJyCEfa8COlAVwzleA30vkxHAgDCDAL3lAsO5hFCwDwZPO0dp9633vjHahB9K4gFTunTOTochWTmF3Bed9k4l04WQxOEca59BEe6Ru6AkAt3kG3KAEtdQ8J4J3fOPdJFRUHsPdRY9NHTxkrrL%2BZptz0Pwe6Neu8t6IR3hvUhK8E5H2HsYrc24L7mOvlAgRVcH5P2YfHN%2BQEfyf1zmuBe25f7-xtEQkhoCrjgK0pAhxvkYGUPgPAjYiD4nIP2MANBEtMHYPQrgzRhDeTEIwmY2%2BFDLD%2BNDrQqpCdOYCjcCIy2Isxa6wAAYABIcCMmZAPNk3wWmuHYH0gZDtCAjJnqwLpjTV6uCiPIYAaAYa600oRUGJVIbQzWfaBZoc6nxyiAhdWddknkNGcck2oyREDyHhLQggcrBtKtoQG2s9en9KZFMkZThBTjJ%2BYMnk0z7CzPmVAm5vk6AoDwl4-kAK3DQu8SAY5hcaTmyUP4jFfRqGFx5umGqrAIzEkGHANuG1YQGixMaM%2B5pRjCCAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[Comment.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgMowoxJwC%2BcAZlBCHAERSoYsDcAsAFChIsOAFkkAE2Ap6jZmw4wAtACMIEGIRhQUYAPRjJKbv0HR4eADLAAdgGsaMpq3boljfJSiLxTYwPBmcACCAG4UKFCOcgB00bqxumhMkNZI1hq6oeFQfqbCeCLQSAAijGA%2BAO7WDgxOLAkJSQGp6YT6RaUQ5RBVuQHCmgCeADZIhFGsDXFDo20AwkwgaTDRIBDi%2BKPRaISEfULmBMRz%2BFDs6QCqxJG0tTFxjRDpSAAeGSdny1dIUAvPb-tAngUC9gBBCMhxrdZJMHnEdMBdCCwYRikg6ChNhpAcIFiAlukAKKSGAAMWgzDuk10eIJMGJwDJFL8-H4SWsmjgtOWcAAvHAABRgMqEACUfIAfLh%2BHA4OzOTgZbK4MKIHRgKMAPrAcSYJWy1XqrVgYAYU5IPV8ZVwHqpKCW61oAAWKGsAHMJJqKA7lU06ZrKG8fbKdcG4MQYAAFcFYfXhpAwbmtH20fmqsCEXhWuVPTkAbUITp6DKZUBA2AjJCLFRL5LLAF0%2BUdSORKAKMcNiKKs7L5fA0KdzjBvpF%2BUQkB8hyOBd2lX24MBCJrbT8mwPPpdrgB%2BaLjqDWFBLPm8-krqA9nMc%2BAu6ziUZo0aUJsoQiDaxoQXi3lSxXZ2VaQZpT-ZUUAqFBGTgZFwUhaJxCQR8kAFAADRJFmWNoABIcB1ahdCQ2dgNlCNo00AUhXYEISJgL8pQFX9rWtdhCCxQgAC44DzOMGKA7juNiaJhSQSiY2iJiWLzAAGesw14nN8XQzUknwdJ2ME4TNFEsZxKk7Y0NaRSIGU%2BBFDgABGGSGOoCzZWkriaFFAjuIjJMNDItSXLFSVBXo3j%2BPcvSNGsuAxOGDRVIojzNOY0LCGiI1PDIv1lhouS6WiHU4AAQhPBdxFFCzqAci9ZVoNAKGdQUfigcU8GoJVqAvdgYFOaoBTjAAeCU7Pap1Il0LrCLgdqDCkAbZPaqw7DgGAIF5HAUMNDUxl0LDFq1HCkOoMbZKGrJyEiQgoDQOa1qQTUTTNdhaH6uzZXa3RJtsbbuOGiQpGiAAhdZALQYYX0IAA5Q8kF5FgUGGYA3WsRRiGGOhFDQZZVxAYZFAAJhYZ7ePawgwFdOU-t2IGljmmYxmiAB5Kofi2nAz2oe7cddLGXqZ6pfv%2B4mQZwMnYuKCgkFp51XQ9cQvRgBndDZlmGJ56tawpOAt0FW6GPalyFbLVXuJ1OacO1hjTu1cQTsYI0zv1wbZKS9IA1eGA5ptmA7beOqrd406AEkQBQD1TbVJbztNZqroN61nICwhSYTDy3Z2hjK3lkk6xAaOYCrYtk4pOP47gG73dlcV2LagvlXasAJRwJ2XYl%2B6K4N0Uc5e-Q3pQT7vpl2VsKXM84AAMj7rLC0zxkU-7weS-j4aOjKSprDDuAbzvJASzmmcvMTkfSxAAUtHwJBG4Xpf73ghNuePkpT8oJvePz2TD8G%2B6RpQLH7u2giGv4V4DjgOCMSxLkAUuBAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[CommentCreateForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgMowoxJwC%2BcAZlBCHAERSoYsDcAsAFChIsXHAAywAHYBrGvUbM2HGAFpG%2BSlGUATJt36Do8AGLRmDJq3boVAIwgQYhGFBRgA9Cagg9A8IbgAkhJg6gDiamByForWynYOTi7uQSEw4RD4YD4Gwk4AngA2SIRRCgB0ZW4VbvlFhG4AwkwgSBIwDVaUAKJawDCeIGUgEFr4RWVohITZfsIAggBuFChQpazV1WhMkBKtjm6Ly1AzQvB4KAAewBCEyCW05uWV1a7AbpfXhAAiSHQoY44fPx%2BHR8BIMNcJHAmiAWm0OqhKAMABRgRhgQgASlw-DgcC2EicIi2sL2SC0AH0IBIKZAnNhiDAAAo3LBwRkwuGObBoiB0YBFJnADD4dg8xj8ooU4BaWQAXjgvIxvD4eIJRIA2iSuRTKBc2RzqZQ2gBdOAKoikciUZEsFiYlW4-HUokACxQEi0RQa7okAHMqArkUgFntsXKAHw41V49lIdpGvbB0NtMrkKABmBlJYFfBIB1O6iOmPq%2BC%2Br2kfA2EB9c1wFCEPLguDJsPmqM4J14kN7MponttH5-AHIgsxvHOPLR2Ox0siLTLeX1gDuKFrHxudz7rNtbm1e3qLGwnfHM%2BdpLauqQ%2BswXbP%2B7a5KpNLpWDveOoY7PcYTF8cyNRdgFk5A9wyjZET2-PEKj7ICQLaQhb1PGd2EIAFCAALjgDUF3IbAYP7YDmgPMpUPQk0kO-T8vzPRkWScADCPomAwJbSCoLIgpHCwjV3zPdioNjAigOY0jinQjUAAYKL478H0cCktjBGAsKY1kxLQrjCCkk0JmIhDFIyNo4AAajgABGSjBJoKzvxk5CaExGiZ0NR82lte0VRnWg0AoNBXRbJAoCgbEBNjNw3GdQkIHGAoID9YNgucmhCy8uB2BgUUoWRO8AB4BnxAoG0IAA5FAWjlFgQBUAAmFg4GpEgqxrGA5Rwcsiia6s%2BmoCM%2BPy0wynSTI%2BocvFcpSMIIlG6y4Fy8RpDgGAIDagADNxeUlYo3AAEhwTaBSQaUtGoVbetks9csOdN2SgNA2oOwVhUy9haDcGbrNytwFqkD7BIGrwyiaNpGAKC6ZzQIqpjKiqcFqYoygGahwdjMAirQJBXRirQgsqkAp3kmCWBRvEG0qvV01QYmxrPHM8za%2BSr31ZGaZnakfQ9AM2o6pAOf9JAWdmvFGGXQg2pqwXrPei6vsmtJpv6jxBuGsA-tjXKbHUZaJAuyHiphpA1r2%2BHCDKAAhLXqVoGwYChLQ4jitAZBAAplH%2BZazuBGnekIFAbCKLQ2oAQkZim0ygUBRxZi6YDyMBDZYNDupganvzVmd4JgRXNZgbW1a%2BgYPrHFnr1OOAceHLjoX09pOiQAYuCAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[CommentEditForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgMowoxJwC%2BcAZlBCHAERSoYsDcAsAFChIsOADFozBk1bt0MALQAjCBBiEYUFGAD0YqCG79B0eHhQAPYBELJCNeo2YsAdE60utm4B4tWAIkjoUfAAbVQMBcGM4NQBPYKRbSUd3d1j4wi0AYSYQJAA7GEyZSgBRABNgGF0QJxAIMpCkJzRCQnD%2Bfjp8PIxLPLhskFyC8srqgAowRjBCAEpcfjg4NAg8tVw4YDLsFaH8mAB9SjMsaKQYEgALCAB3UarxbGJCnP3bWgBeOCmIGd4%2BJYrNbwADadHE2QK%2Bye52qkMoBQAunAvkRSORKONdsNDscYLN-otlqt1pcUHkyvFMmS8gBzKhfcZIABu%2B3mHwAfAsAUszg89PD9kzWQUnOQoPSYE5mShgvgkASidRCTygaTyZTSPgFCBKii4ChCDEenBhWyUVycESliz9k4praCv5AiEYONFTyluoYtzebyUDcUHrzJZrAl7fg3QADLTYt5aAAkOC21C0UewVs9fuJewKRyQJwAXPQIasEVL1KB3ZhrbzqB7s3zBjjCONJuxmc23uyueNM42li57R2uwVCDWs372IRXYRiw7O68x05p7Papo23GCj3fQOluwYPgoP0t1KtiiPl8trW9wB%2BXd7v1D08Tx-Z0-5oslgVlu2VkDVjej5oDS9JlAcFDFiweS3Cwr5vjQQGNsWp7-Hu9bwX69YNtmzxXLc9wTIEwTEDhSy0GgFAgaaSBQFA8z9tmWhaMSawQPETjBBAtJMnRZGITyyodDyB5Hv04y1gAPNUcCrCQ2q6jAHw4DSmryTqlTUByQHSeITgAOKMPgYDLMEhqEAAciguQfCwUxyAAjCw2mTryul6E48KMMESG8mgZmtFZNk4Gk4bVNQvlLIatl4igMgsJFcAynKSDKeCP5QgUEWuX6qzUuS9LKapVKgUg2VvowNyEMpABM5UDloLmNpJOh6YZEDGU12aSRUzKmeZQWpSweJyFAwC0pcMDOb5kkKJGMCrIl-kDdZqUhTAcThgAQvNqz1XueXBMAaAANbKe6Fp8vhdwVPyAHEaR%2B0DhtYBDXNMALXkCU5XAXV7pk5JoEgPk-S172fX93Xg4tP2AgFlmrcpoWEE4O0fXtiUVIQKAKPEZTKQAhB%2BeJimNAGzE9jYvUNM4aVNvmQ42JAoKyM1aNDeSM3ALW9ZDLXVF1HrZcJBZCPAZQBEEoQDEuMCEeIXBAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[LogInForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQokscASgKYIDGMANHAN5wCuajAMowEMRnAC%2BWHHnxRmbMlRrR4AQQA2jOtlwF5rGAFoARhAgw0MKAjAB6TdphLq4VXABCvGDAgA7aT05BWMzCysbey8ffxcVOgBhCA1A2QM2U3NLa1s7JI04t0T-EWA-bVT9EMzwnPskv1LyqELaeAAxaDxdNOqw7Mi7TqgQVvd6CAB3SuDDGoHcicmxuh4AGTKAa05%2BRgAJYCtoAE9JGfTjHG9tIwATXBdlIvgeXcFGGATeKHlGgFUBFAzj0CAA6UF2cF2FglRhISx5b6-GAA7QNMTwlbwEwwPzCY5aDAg-BQqFWAmMNB2aK%2BPygkAQW68LSglhoEgUVxtODkwkzUkQ3mUuyCYAAcz8fzAawgYoAkn5hiB6YzmYxWeysYgwGB8XziQKHDqVUyWWyOU9ua8BExbsB5GxgTIwRCoQALcybKm7W32xiKTnxF48j4AFQgm0YflDoEpInATqChu8wA03pgqYtlCoVEwvD8bFQARl8sVXQAFABKbhUOBwGF%2BKwhz5IqMowFwAC8fAE7xbPzbqKgVc5dZ9jDtDpg5fwGllYonCvwlc5tfr-ibAG056WACKiBCcAQwEsK-ciAC6XZ7QhEYnLXDXY8BfgQIEYAC4CPh2E%2B4GAEHZSZoFuL98B-NcJBXNcGyba1tFfd9OAAoCQLObsdzPA9R3XRt4E3bQcCgNAjw%2BABRH5oDQK9uzeO9GAfKCcNg%2BA3UOXwoFOWiBAOI5OJHHNKDrFi4DdBA-FuLRBF4EwQGAeBu0A44CzgctGAANzbatOwAPhrIS6zgDS21BMB5E0xpd0YTAEGZadoIMutrFOR9HMMkSeFuA90MQSYEHkxAUHQUz0GnfA7FuAArIx5CsIxbJgN07B3Mo7B-OBML8c8EAcwzDOPL4B3%2BQFyy8kRQV2KBcry5tw0jaNYysN8wFKg9qryti%2BOOUExQgDxWE2AS3KkFhRBYN1VMI6tXJq5sKKItA1J%2BUFYsgRtGAAflBMqcpwusJEg1cDJEsSJK0BJToXa81IsmBtL0mb8o%2BU8soPB8-zrcFQUy7LfzcusCNu0ERCgBcYFBRDGAvL9jMaYGEFBj5QXUhANF4Rg-rypjDsEut5Bgb4AnLP8AB4lnrDRALQAA5N9GE7LghTQUElgkHSPrgEn8gpqnaffTt8BAY54u8CA4BAJARd8f8jAABhlkBbiMAAmfBxduBmADY2Y5usuZKfzmh59k%2BfprgAAMABIuFsXUYApZn0TbKQwCMAAWOBzZ17N-pqkm3QARmNmm6YZpnQT2Zhbm0NmSzgBUSbsQP2Z92a8pJpU4H8aTZPkhnTskoQZLkmBvd1v2lVBABxK4wFw6xkjlDX8EqyH8BTtO04zrpQTWBATEYFIWEpk3Q-wJW-H8Rh26HSHE8rvuB40DvO4rnv0RwDRy87%2B2wHp-AMWcbe07ASmWEYD0NGjqABdnun8GP2bIYF1v78fmrh950PGftwlQQVMA3gDq%2B1XnAFGaMzav3fMA0Bs1-AXXEgufO4lC4IL8AuGBsC6x2BXqA%2BePca4QF4GAXBq8uCESohVF8dMtogFsOWcs752QIAXJwYAtwkD3VUu-PWjg6CRmOAzdhSApAoygMAcSMABZ%2BSgH4MoYp248MMlwJhaAWGMEwVgxOfCYCkM7pWSswD37dxGNXWu9dN5NwFihNAwEoC3EUSAruC9%2B6D2DqbAWE8p7twAApUzsbcfBpjF6Dz0avExyoN7JCUU5Y4e9rH%2BJAg-JxndT6sAvska%2BAs-GoXsckrBeVn74BsQE-JBThIjxDvzH%2BDt-5%2BEAaXGJYDUbowZiUkCmiCnwMumbAu50emdNATg4xQwCG1zCbNchlFiKmUSfY2h9DGGUjUawuAwiuHExSX7HRcABFCI4aIhGEjGjSIRnI9Bjjyl1hUcs9RgzwkOC0LACZNUDFGK2XrGk-glGf1HtUq2XAcR4l-pSUEXy-BSGtkCvUoKADq7CNFwChbiGFzMPDiLFG6UuXslG733mgYu8kymgJebNOOCoRngtJcoihMzJ5%2BAAPqYGAIPW4DLaVoAWS1JZzDVnrK7HpTZ5SSY7L2VwYRhzxGSNObI%2BRatflVP3iAYwABmS5Vybm8o0Uo7RTzdHvzebjB5SoU7l0TuiQ22gXn60aJaoECqPEW2VUYFVSKbY6lRaCJ2jQJBe1NVskmGw-CbHcd-cOQbNhSF8ALOwaBxR%2BGIeq0Bu5-AAHJWIIE0ogAIrAYT5ngMcD4G1OZoAAn4HSooJRwClInUt4lqWJwjf6zu5qDZlCtRzVty9SZ2CWCvBy7yqBwm5NHGydk4AvSVJyIAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[SignUpForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQokscASgKYIDGMANHAN5wCuajAMowEMRnAC%2BWHHnxRmbMlRrR4AQQA2jOtlwF5rGAFoARhAgw0MKAjAB6TdphLq4VXABCvGDAgA7aT05BWMzCysbey8ffxcVOgBhCA1A2QM2U3NLa1s7JI04t0T-EWA-bVT9EMzwnPskv1LyqELaeAAxaDxdNOqw7Mi7TqgQVvd6CAB3SuDDGoHcicmxuh4AGTKAa05%2BRgAJYCtoAE9JGfTjHG9tIwATXBdlIvgTGD9hY60MHoIAOl%2B7P87FZPow0HZor4-L8QBBbrwtL8WGgSBRXG04CCvjMgUCsWC7IJgABzPwAVTAawgxIAkn5hiAYXCEYwkSiVvBbGAPtifvhcQC1GAwEz4YjkainhieLsmLdgPI2Gc%2BQK7AALcybcGyxjyxXONFUKgsfxWOBE0kUhlwAC8cAAFABKW0APm4VDgfAEcoVjDY9vwGmpxN1dPwjrRnpNfjNAG00CTyWAACKiBCcAQwC1J1MiAC6tq9QhEYntXA9nqLUD8CBAjAAXAR8OwK56wAgUZNoLcAIyN-DN1twdud7sAJn7%2BArEgjFejZplAmrtcYnBHaC7UF7a47G-HZztCctKbTkbg8-gse0OCgaAzjBgAFEoDe0AW7bthKJGGWZ2eL3AaqHL4UCnB%2BAgHEcoFOoalBRqa8Bqggfi3FoCRIX4IaFvajAAG6MI0zo2m65ZwZWmbZhSuYIGWQ6ev8vxHjmaYtmRlZwFe%2BGNL8IhQCGMC-DWdZ5o2eEEQJvH8b8uEIBovCrkOf7TrB8ExohyGoUIvAmCAwDwHaHbHH4LAOmJhGuu6bFwGZAlgPIXEwMmjCYAgCIwDBQ7WKcpHsZ6CCTAgemICg6C-JAVgBnYtwAFZGPIVhGK5MBqnY8jEsBNgwKgfh2M2mKJlRaazlZnpAVBxxhfwaqRUG6V%2BOGZ6elILCiCwaqmS%2Bzo%2Bb5mbPq%2BOEvr88WQDGjAAPy-LcRWNZIylGmR8gwLw1YOkOAA8Sznhou4AHIrjaXD4mgvxLBILp0XAa35Ftu37fgIDHIl3gQHAIBIE9vjDo9Y7DkYIC3EYY74K9twHQAbGdF2eldJSBc0N0ontdYHQABgAJFwXI8mCvwNGIjRSGARgACxwCjkOUFDlZrWqPYI2gSOMAdR2-HszC3NoZ3ZnAFJreqPbnZTJW%2BWt1r%2BII2m6TAB0YZpEs6XpFNU%2BxotdL8ADiVxgPTjM2vdJhGAAzMD0bWMkNKg-guzLnW%2BCC75DvUwyvxrAgJiMCkLDbYjd0A34-iMHbZJLkJjB887rvuxo9uOw7qsjLjJQ4BoyuOzAxxgEz%2BBiEgzipw7od69bodTsLseejJclM1wxcrhI%2Be%2BWA20sIwGoaBzUB68H2glw37Fe7dyOHenXy-HSYDePXZfl-46HISGMsaWhGEhlP5e%2BXYMfr%2BHauaxAvBgFv5dcNe0DHbXdYTSAtj2vadYoggIacMAtxIERbr2n3l2OHQMlQMAyFpb4ACtWMoxJgabEYMcA6L8kAU3Xg7Lg980CP0YGvBB0MHBaFgEfWOjpHRTwbvHRke8D46zuiAA2xtzxJ3Npbdcm5ex2y-sQl2bsPbkORvgP2Ac7YAAVdyMJ3gnSOHtcHl1YXjZOX9PTp0znrBh3ZS4YPYoXfAiitw9mUSoiusl5IHQ0b2dBOim6sFbskDuesBGji3NonRA8fZDxZuPSeMi4CzxXtXWWy955oK-pvIhQxd5a3EYg0%2Bt4wqCO7D2K%2BN875ghQU-OAsD36rWnnHH%2B8BIHQK4LAqQf8AGND1iAvwYDmHpMdkghJqDjEIL5pk0Jvl8GEIqdDZ2pDtYOIZhQqhJtaEaAtgoqJW4gaNLjhHdhntvbdK4Tw8odsGiYAVHgQxwjGSiOjiw52UjkhuLkVnQxdiVFqMMUDNxld9FcFObUjBpiW5t0sfgRZyzhzDNuEcjBXTdbD1BMdFxMAbkII8b4xeKEfGYT8a0ysASoVrI1iEhuJ8Xxn0iTY24Y5YlgFvsg1Bz9X6pM-lC6GmS4DZJga-fJCB-6AOKVS0pmFyk6M9FUh%2Bq8WFYKcGMyszT5oYLWpCfwX99l6zQJLPSHzy5fP2lwdGXBXjvBHjjAVfgpAY3ldjY6AB1F%2BaC4BqreBq34Hh-7EjVAC8mDcuXsW5hSQJyqrXcHCcdf2fgAD6SyPa3FdU6zF2LqlJJSRZQlOi1okrJbkilcACk0uAXSspnCs4gGMMbB17EWWJMhSGjlOCG48qFtvIJIxBZUz5njOG2hGkw0aOWqACbUZJqNnqzGwpDV43EhIcmxaKlrQ2H4TYdafmj17ZsKQvg9Z2FqmURlCDNAGFuKcJC%2BFEABFYCaXgjQxqXTQO2PwLoqTEjgHSPm27kJcr5sOrtsdS2wzKBWi617NlWT5ksGOxUJCwSoIwJAGIOYuTcuaAqYAGRoiAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[ReportCreateForm.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgMowoxLZFICiAZvUhnAL5z1QQhwBEUqDLwDcAWABQE0JFi4CxABLBCMaAE82HLj36CYAWi75KUfQBNuIqeGjw8NAAoooKEIU2dufAegNGT5pZikuLStnAAggA2SLKeOj4Y%2BgBGEBAwKi5gAPTRsTBWoTayAELGqgB2Wl66vilpGTBZ2WUwlYXWMvAAYtA88d569emZKDm9UCCFYbITIADCEBVNEFHVCUOpI01j2XOLy1xR08U9fQDiRmDrg3Vbjc1zlxD4YCddcHMAMijJSGsDWpJe6jcZ9H5-Y7BTrhBAQADuNyBBhBOxycPh73CiwB2luwIaoOyOKxsgO5GAFViSMSKMJaOJSwpVKgHSKHzwKAAHsAIIRkABHDx43gAOlF2XF2TGwGlPL5ABEkPQUPgohk2TN4Co1DF3ICpVKdXrsg4%2BTB5j5KLQzMAYHNRSAIGY1UhRWhCIRSfBkjAKmRdUh9SLDRLjUGWuUlo7na73Z7vXAxmAA3qkaHcmAwDGXTF417oezwvZiMhbQIWOwDRKpQALNIAa0I2RoZeAFYKhYk9HwFQwvKqyC6ltQlDmAAoAJS4CQSODyJBtjvj3hRCAAc3XSDMAHljLxJ4X52glio4ABtWJcKCEbDEGC0KDXwgAXTgAF4F2QKEhxzhWIes7iMep7wLWyiqFAGifjQSgqOoU5HnAJ4VGeeDAGYmgwcQTguG4iFASBqHwOeAhdAqFAoHeSAwEOtgUeQb7YaQ5CUH%2Bc7znAkAqAA%2BhhABcfC8JgHHztxMA8TAdoxIJvDCaJXHmpJSBcjAsnycBnHiXxIAoFu6kiZp84%2BIQSwGQpKlgFEKAVBQA7mZpAFITQDBMBg45Th%2BAB8M5GchoFJqksDkkcMRQB%2BcBUoiERBRaTKhbEBF%2BShZ6EMA662Wsn6-LYIWrGFoppRlKBRMEnH%2BcRcC1jZZgxAAsi8ywRSghBqH2cCee%2BPk4Ap85NBoPV%2BeVKV2HAZiUVhSbwigdpJvK-JIAKopbjA44AAbZOJzYACQ4BhrBrdgeBFZlbCAUNnEjYpvEYRFYDOMQACSyzrbt43kKK%2B1red5XDQF2lSTAMQRWtb2UaKgMxAdZW-URZ4Ayp8CfqDODvSgooI6p0O9Zd-1KaAelICDYMfQTW7YyEsPzvedGwAxKAeWR9GUdOXUdYNVOceKopM3TlGGZzYn42YgnaRhAuCwD0lIKLSmQ1QOPlZjanXRJlCqRLnNi7p%2BmqzphOa1TJlmXAAAMhuw5Z1m2VJJtyRbnEAedOPsGgFBoLWHVXtOHNU9k2QVaZeZruu47ezD5WsAprAR1VNX1Y1q0-ZxAgwPgUBVJ13U4zlwXxflsSirnSexzHHGsNg54YS%2BzuaVd1UVLVSDzA3W4RWHABuSDLKz2eU5xwD0F7XfLBDzgraKtkgET76z3AADkxsVPPPuEb9V0VPgIDIC1Sx3Q9SDPatSAjzAY9QBPHclfgSC17DNNIORlGM4-zPkL37OK3A3O8zA9MO-OS8p9z4TynkgF8glN7b1QKZCohkXaTknGvec7B-jEDgIPYe3cz7kAvjRSergZ5z3nlbGydklgr18jjB%2BT9yAv1oSgD%2B7ELrzh-q-Pm5AAEXhPtgkB%2BCwEQLgDw0euDL7XwVv3SOiDkFsDXmXfu9d46kHwMkEAs1sqtXap3bBH9fbzmEWfMAAhT5KhVGqEuMj%2BpUIuigaas1uS8gWktcSK5siECIGAYAaBeREGyMJOAv96Z31%2BrYma8AHF8kFBjd2tZ1qbXNDtHAgTwZizMKwbIh05C-23IJJoN8zpIXKuBeCUEMZEFiRtb6hTNBuxgB7L2T5V6SM4v7QOqw3QhzDo06p85MFdKgDzIMkBUJIAAPyFVYkQOAABCOeAAWU2ABGJpnN7yPmfP0wZhBhnEHGWjZOkcZFR37vIjiqd06ZxkQAHgxF5HGVycTIWsp6AAcoQ98vAQBcn0KqVQXE1D6AAExcX0KbEFIAzBAt4HclhcAHlMhmiyL%2Bx5nmEDedPd8OA1rIsFri3ayZUxBlFOSbB7BdrhkIMShFlJYjHNxfSqmkL6AxC5BwFl%2BgTxRC3lUAAVkQKS9AAUoUoMsDl2DqTqwMGgcVUAcUMvnGtOlVMYU4quXMOASwSAqLUTATFDcm5atUXaVgKrYXlTVRcK4pr5Vwu%2BL8f4VUYAgCiBMD5S9oU71gVcvY4J7VRGtfKi1kw8pRDlSEwgHziAxCEGG8qzhgAoH0NZSEHySD-GYPAJeHBoABPYVJCo65eCxs4mAt1MClhFrNVTK%2BXKkCYuSR9JeSqbVLBbjZLceqlFtoLUgZt8qMJlt3hUStNqYU2vnFciAYBbZVBrTfD5pteBjWVKqdUY1lC-BiGYLyDgYgtSJlGjNSZc1Du9VOmdY7x2TunQOOAc6628EWdCy4YxwJoDvbyGIfYkBnpvUsS9Nrr0zrveIj5gLoW0C5FZLxs1iBcnwCVCqIqYC-ovcWid57b33o%2BQAZmhWm%2BDJVgAAC9yFVAgEPNRFRoCEFQwOADgbMN72w7wOZ0LnrePzeuOOTRtx0f-ehuFTHZ2gd4AAVgg32F4Lh1yUm4%2B4mDZgiY5qjfQfQ1VJj8YqAxhlQGsOiYAGzQoiG0JA4AuNwD%2BUpzgqozBaZ0-SvTzHRMAHZjNmC7rAZQcmMFRBiOuRDRjYwYFo9kYTDncVOZE7Wj5AAOaFJRrLkCaieMAagoDpVrPASknA5NmewfZwTUWQMxd4AATmhYJ%2BcO4YC1mpMQDLLx3BZv0FxPd6ClOEDQBlv4RWwt-u08W71%2Bx87%2BpkZzYblqXhgAi79HAV4aPjKXuM3SYAPLT09AbDBZguRMKG3kWQV8Ms2V1bwaaGc5NLobEgNQmKMJchNYJnAG3CCEz7ZF3IYUYCzfKog4542qZBpAM8V4AbdN2shI651rreCkJtgOCDUHrZkcm5MCE-wweOZG4cVYgmWofMlc4VAI7x1cHhBGnAcz3v0tLbDpHZCZ0k5tdhpJeb6aijh2R6nuLW2tzrTgfVMRu3k0EwOunVkGcI%2BLdkTHE2fWTBBzNsN82nyLY5-T%2BHSwVtjHW0GV7W5sD3b21W81B34BHYTcsD552KiXbgNd27e0duPZN3Nl7b2huffyD9zif2gJhqua0Soxa0CovRfzlGvp-QwEDJSoPSwyU4Cj4SuPtaDrc6pq2qIXiGyYqzlVCC6hloQBKOgBsU4M-lR9%2BVeYNlpWhtd96%2BPg3mkTebyHsP7ysW7WTzHvUopm%2BJ977HgfafFXFpj2AB97ijUFDDdXziI4fwB8jG0ATrffqo5AKar%2B3rySItiA5vfqwGPetuWvc6pyQiWXCNZ1d8BaYWitEgOYwQgA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[SuspiciousPage.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDGMA0cDecCuAzkgKIBmZSG2RSAyjCjEnAL5xlQQhwBEUqDLwDcAWABQoSLDgAhfDBgQAdhy49%2BgmAFoARhAgxCMKCjAB6eYpUiJU6PADCKKABM13PgPQ79h46YWzm624nbgDrhwKAAewBCEyACO2LHxiUiEbB4aAHS55vnmZsDFcQkAIkhkKPgANkah9jJ1EADmEDl8RUUohMRG5q0duWDKbU0RMsh9KjOuSFBdvD0FaNyQykjKgzOEc6gLUJPS8MYAnnWZy6vmF1eE5nREYMBo8UQACihtSLkgEFc9T%2BaH6oXCpyitGQrmAAgw2U4nhWBSKAAsDABrR7QpCw%2BEwE6RPC0Rz4KACHYAVWIS3YSLyqLWKmYMUGZIp2xgNMWjhZSDZRJkJOIAAlgMZoOdEeovFptFwFIttK5uOCwuIyPhlBh4qpnoRXu8IF8fkgABQASlwEgkcAIxBhcKoMHNvGGv1cAHkFLxLWJxPb1spjHA0OTKdzaXAALwOpAcyM8qBWgNBlShtESpRQaVx2jiyW51O2wNwYBkODmgCE4c51NpuQlAH1jCgKNacHb7XAs0XzqMiGi3eY-Wm2KX0yH4ABtASnQjYAbIBcAXVj8YYTAteAEhHqRgAXHAZ%2BvWP7J-HyJQMOarbGAHw2stT0MofSwPk7Lh1K5LONbAA7nAACCH4wF%2BJgQL%2Biwli%2BYYZmcwBtMoKB1Bu74OJBP5-rkhDIahdQBt29rmAAVGRJH2mRcAAGJIDAaBotcK6RMA04oDqmRUWR5hUcGoaUIxaKsbAWRxn05w6lW1oxk%2BXbwfaJjSgpPZqQh05RK4TAoNkEmASgwDwGkCTJLkvyurwdwvG8HyELw2B4PhKFoWwF6KT2y5IAu5raYw7lUfa7BoEwTFVosUCdoFPbmOYGn7FcuTDOaEXuepE7waw472kJTGiUYcFqQIMDkqo95yc%2B6WYZ%2BLI4YsuTVa6aU9ll3asNgp4BWWAnwGinGuFcVRXMwGGEFJaAyY%2BlU9sp01qSgBlGdE5QZIQuQLMNFoAAbmJAxiPAAJDg84OGte4HoQM4AAyrqMCQwM2wCuKw5hbc182LcZK3IGtG0Mdt1mGrZJqHcd3mnbk50NJdN1Ns9r3vT2gHsaqgFJRAIUwHqkNIK0KCuIVLVhqFaLhRSUUebF8XQX8yWpdlGVBcR3WIb2-VXCBYBgFwABuLASWN0nlfJVGzap6kLYZX3pGZYAk%2Ba0X2jte2DEdJ1iTj%2B7Q9dt0q498NbZgitROrzCuMeNR1MQ2BtAI2zNnU2Z4seJj4CwrDRYj9qS0tJmretuP-eaO37kDxpEOYavgxrUNGDrcMvW9DP2sjyio%2BjmPYwIeME4jwUk2TkVzTFcUCTT6NtCl5MMx7ZatRq9rFaVVZUQAPA%2B0VgwumsXUl2xtDApMAPwtw36VwK3wSuB3HlqZPLjuGgdR9IQAByKAgEgMY4PcmS5FPrAz%2BP6mt4wuhXEfx8nyYl9X9faIPnsKit%2BYg%2B33fPan9Pxt363T-KPMRYP8P7eH2MoVe%2BAQDb1NmdTIF146gJULXD%2B49zDvxQS-GA39Z7j0wVAdBV9T74OAelU%2BD8SAxDAMvVCWNn6vwfiQ6%2B08u4Q1jjDW6AoqGcSYHqVgmDsEoPtHgghpDX7vgvsAl%2BU8RGfynmGZe-R16b23rvNaB8ZFz2ILqFQ8iV5KK3jvGAlw95kCuDEWQEAYiH0YUIsgyFyRIA0ePFhMc4Ha1hnrUAZo4AjwVjg3%2BoA2g2PHoQKAaBoHRyMD3dxut7qPRAGaZBgiqoNBjLwBkcBTZ4jgCrXgwT0pLz0RvAxqicanDxJ8e6ABJBJvwknJNIk49K1pjx%2BIaZ-QJ%2BT1KhPCbwNEigwCEEPLFLhaAkAYjqK4XI6xzAAGYrpXRiAAJgWUPVkMAYyrwgAAahqWaPJ-iP5oQ2ek2UWT3C5K6WpQpijikqKMQ8MpDgKnVNqUgepDS0FdMtB83%2B5g7FtAcTPYJrcXBYyXiwG5a87mGOMbA8prhKnGAACoChgLRYAuNXCEGsYc0haIACsD4XFRLYfHPWWMYBXD4eYQlTST5onwS-Rl9K55gGJTA6JccPFxPWTS9lILiiwDeBIvFE87guj1E4qRC9pVyKhfo7eW0jqlIPnAFVDyTFmIsVYrauKMFWCUKoHmLhgCcROfuNAYywRwBUI4R2aBMTbz6mnDmXNebvIfJzbmEA%2BYv0NSoelrcA3GtNeatJ2lxiLF4La5Q9q3hOpwC6gaSAhr-UPmm5g-qFBGuleYaRkj5UKOhconAyrYWPLVRquFeEiB8m1DAVgeqg0CrFUI3QHLImwK1lEq44xB40o7XAUORo7I5PulkJQmSkA80xYBRhL9W1-ILTgmVbhgUeRaaPY27dJGBOHWE7ewwIDsGOWk49ManppOUCoJA2gL1wC%2BYc1uYByyuGvbe7Q6zeAPgAJooHONgG9g92JtHLFkEdwMiCZOQv0uAN7AKLpkS-DdzSPkoe7F1eupZOGRAWDUA8cADSjpBt8X4AYgA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[utils.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAKwO4wCIFMDGEAm64BmUEIcARMjALR7Z5kDcAsAFCiSxwDecAhgB7AIAZwBK6AI5wAvoWKkyAOkUB6XmGBrBIjAV4BXADYxhjVuZbp%2BHeNgB2w%2BAXQxMACwCy0dKl4xecAC8fMIAnnaYcAAUUOjCEPpQmOgANHDCLuLxickAlEEAfNyscHAwUKHFLKWl9o7ccDh%2BAbLBvEi8wPACQmKSigDmLjFxCUnoinZWMLnM1TUZMFljyVFRYLEAbss56PmBRVFcJTWlyoob6Nujuyknp1P8MABcjc2T03fzp7HCRiavJr%2BRS-f7CEHoHD6VZRXiYTBpTCJfZFY7fU5wWIwRJ2PjwxTxEDoNZwzBZf4ovFkuL-RTAHBBQLBJFQOk4XL3DGlAD8VM5XNeAG1zqTEYkALpzLnSNKXa7ZcYQv7GYS5L6naS5WYnWSYPzuaLoKBQfI8aSsaRzVhWGxwOpOCCGQwQJAACXQhjARqC0Q2EAIwEMqTthmAmAA1pCAArEANBtIER3OpDAOwDAD69MpaNKWJxcD9cYm9MZzNDEejscDxZwnN5KhUcAAKm5gMI4G2ym58IXq3AAJIhsORhkQOzqmoNuD6MBA-BdduJp0uo3t7D6OzdOwMxYdkyEJMu1MDDu19E5jHnXvx-kH5dIVfp9eb17XiZL5OP5-wADUcAAjBOpwfkeaaZjgQEyJyr5VkGdLCOmLpTFAt71o2Ladp2MDdgWsH4P6Xb4M6AxDAyqbThkKHoqUU4znOe6LoeKZpnaCSbrePBXnhCZMceT5sS8uH%2BtWiggcxGbfnAf7-lB1FwK8U7YZh7Z2BA8DYT2eGERR3qYOWI5wGOhlQNpb63opOH6JRhlIA4aTxIgVnwHmUC4l004RG4vBppCt5vnMloWDa0C2GO9QbmJ7qet6wTrNxQ4VjgMbCUG2YnC5uJvmypYJSOyVFmydZwFOGHtlhOFvgOuWQoZ46crRs5%2BPO%2B5iaurEbluO4uAxd7Jsep6chepxcSlqS3q1UAId%2BMGjaJTFfgJcBUABkGlGJfH0q8dhGIYkHmuiM0FW2iG2UaqHFehrZle2GlCUWhkENpxGkR2uJWWdckNfRC69aBJ7fhxcAjUWPH3nx013SJ61gZJy0yftAoXV2ylwKp6kVVpt3vSZenDjVRnQKZeHmY2WPWUhwj2RAjn1Ble4ee43mkX5eEBValjWCFrEOPAixNhAkZ2E2oBxP44A%2BlEQK8Gl8z2pi6BEHEbj84LwtEo4vDi8ElAYHQxJS9yEKK8IbjpjAAvoHYuSKDaUpwM6eqGAAyubUC8EMBIuP2MDoCAURkLExvKxbQsixr4BkGkge-MHqth2LYDaiwgUc7acsmwkhg4OIQcq5bEsy7mLj5gAhCXDu8M7rvuxMQwwN7vv%2B9HSt56H6sJ2QScp8FnBy7EIAQJs6Ct2roua2ABeFFUpQV1X0A1xCA9Dw3fsBwrMcj-H4%2Bd2zQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[useRedirect.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQokscA3nAK5oCmAoppqwMbwC%2BWHHnxRWCPmSo1o8Ri1YAJYGhjQAnnEHZcBMRJgBaHExisoUyqyS14PCADtVzNgCVWAE2Bi%2BcALxwABQKUACCpgAWAMowCDAsAJT%2BAHwMVHBw9k7wESpqUJoBCsqqGoEJFJQZCpzcfIHlKWlVGZmOzhEIDh4ANqwAshBMDvABCGjqDjxBSX6p9OmtGTAFzUtLCADuCMDwROgAdJCqgfgA9B4AVsasqoYIkWdqANasDmdi2LcRZ-gVi%2Bs4GcznBgJgXOZQRgehAAOawzyghwAGjgMAirDaHkxACNWDDNnBNsAej04FBhgD1mCgiFwuiYnEWP4-AF8DD4Z4AJIOP5rQGtXKlApHFgRU6-f4tQH8KkZQQ8OI8CJBcxQJILaXrYGg8EhKFwBwQeAchEeJGo9GY%2BzYuB4glEklkikOOWtGnBNhhSKM%2BIYVls02eADypj5moFgryGlFaHF5z%2BlUjsq18qp-CTgq6vQGQxG5Uz-FRAG0hfl1Ki6T7Yn6ALpSjNAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[App.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAYQgOxgQ2MgplOAzKCEOAIiizQGMYBaAIwghgGcYo0wB6JVDbKEgG4AsAChQkWHADecAEoQArjCwAaOAGUA7sBiUAFnAC%2B%2BQsTIVqNQspw0AJkSFixE6PBIA6Th2A%2BAHsAQzAAiWHhoigA2LM7i4O5wAHJoAG4AQmi4BESk3pREkNiozJwpGVlxblIAMhAA5gCSyABi0MQ55t5gaPVYpZEw%2Bpx1Ta3tJK4JUhrA9cgAqmBtUB1meZw9fQPKw7PzSysgVdPwAArBMAjkaCpHprlem739m5elF6zXFHcTIvGSeByLCA763LD3TobLavciA0rA0E3X6rE6AuCfGBnF4PLrPbZvVgfS7YvpoxKsACeUX6uI2AEEwGBPCAIPZolhPJRmMxyVJMcxSVg6U8YaVIETOAKhXz4LJFMwsAhFFByKgForcCYoU8CqgsP4WNwVWqYBqcDwVIbZRjLgBRey6SHrUUvcXvKX2x0wI42s6EPDAGlCkXdN2bANB17%2BiCB4MvG3mqDINAgCHtUP415gSM00pJlNp33-arwJPYnlaaD2Z2PMMEnOxqP5zUV5hVqA1v5TdExuNYB1OjM6%2BvZ3PR8eDn3dgGJJJMNqKZD2TMFBLFI3z6dL%2Bw2jQKsDAShBBUhkdZ0pw9ylffMQ-HpSChP-FyiPBL6hBZBwRlgAAUACUMhiHAcB6qwYEmlg6qanAAC8cAKkqUEwTggH-KB4HwI2-YAPrACuCGUChZqagA-J4OFRvhK4AD60aQcQgXA5AwCq35-sxoEADyOqkYFRGgPIpGmcHSFSeaeL%2BRgAHxcaBcDceUmS4JwcmiPJPGWnwOACUJzAiVgYkSf0ngALJ8LJmkKdx2i6AY6kKU5NkKLY1nOXABpUNhtz6HBJCcJMogeR5ar2DgYmAfBMlwJxwUhR53HSjiaY8i8-nzix-TRCw%2BBKMung-vYABWCrwEMwqKlkBhwAA1lglIdvYngkHAanuc5AFGB1oHtRp8UJdxrkqD1CledQcA9EM-mcHgEBRFEEBaFgu6jaBYURdIUVwTFcUJYlyV9Gtzmpcw6UkJl5DMDlzB5TuhX0iVZVwBVcBVVANX1Y11ZwNAeULUtcBoIhmotcdTlxioUBiQABkt-C4bhc0A8tUDMIj8M4IjVE0nBAAk0g41gNFGAAZDD3UDftvWOdTcBdaNfWjUNSgjVTCXjT500BVEwD1at7MhRt0NbUBO2xeDimHVgkugad52XdlMS3XN91FaVEGve9n0NU1v24Lz9VA5Nlxg4L1OQ5tMOG-0GNaAjuFE-jhPjiTpPVjgmD1HBNA2%2BjuEgGg4W4bc5OU3TCl9RHDPm5HtODcNMux05nPHVNfk8w0mBBRHwuRWLMXcaMzT3Gp4f7VH%2B0s25ydjf43lp75M3MHMyCKGAOd03novRYp%2ByLMsGZl4z8chdXbMR6ntegenM0SkalDIlgnfU9322F5iYIosQw%2B15XCes0nk-19Qjfc4SRoAFwEYFx1rwXUskjiu-U-vY%2BJ8dU8R7PAXz6U1-2E4CtXQK99r317klL0Q5VhtRkuXBKb9Eof2np5E%2BMAz4Z04FeWAnAAGgISuA8WQ0QTuC3umGBL8K6jyQYfT%2BaCMFz3HP-Ai%2BChbQXCiLdeUtxwhkoQg6hzlx5Hzpl-OmP8IxNjzLgm%2BwCYCcCQsmVMy877sM2lw7iBYlGlzgSPZmyDj4NxQeIomzDAGyOeJWasrDQqqM4Q-DRrZ9JNW0fAkKiDBH6JEfQoxTdf5MOkWY701jnKEI3pOb0LjdG1yEXQwx39fGcGuneI8J5eQqOXGo%2Bxt57ypN4Tove6k9GHyyhkuxECtyLmXLAkw7ieKcDsnofQAjuLcBQOgTAOBR4tL4rTAC-xKavgNOicKEQco-iZP8IAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[index.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFElkWJgBEB5AWTm1wKPRgFoAJrjJUa0eAG84AIRwB3AM5IoCCAFcYyuCgWJ1mqHAC%2BHHHkIM%2BODcsHCKlUeHFwpAYTVQiAOxgBVJSgABRwAN2ABLRNOcwA6AHo0CF8kAA8YBXiPLyRfAOU3ZM10kWpnOgBBMDBTLnwEqrBSsTp6%2BOBvSNTYtAUFZvL4IloYAHUkACMANWAYFAAbXRiCBOHxcenZhf6HFsk4EIhMYHmkRhQ5w-DIw2izFcSitIz4w%2BPT87nClJKHKipkLwWKxYj4bgAKKhwOAAHlUNigAD4odDYdkfP5AlcIspkZRUaiYW8TmcLihsTc8QSCTDGnB4lTqTDXjh3qTLmEcUiUdDmejcpjlBTcSjmfCDIiADQooRoNQgAWxADmSBgAFFTgrfNIAJ4ASQE4MIEAgMHwAEoqOa-o5KGtYBsZnNFuDrVQgA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[CurrentUserContext.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQokscA3nAMZQCmCMrAwhAHadIYAGjgBXNNz4DhYiQFFMmVkxnjWAWVYgIItQGUYHVnAC%2BWHHnxsEKslRrR4jNQAlgaGNACep87gLWKgC0OKKcUEEAJrh2lPbgjgyIKOgASqwAjiJEaawYZtj%2B%2BAB0xQD0CGDAFSloACKsmAiiADYwJBTUCXSMbNoAbqwAKhAA1qy8Q6B5huAiaAAWEK2R6dh5CyPjvL6FlqVlYcAtaIcwxx1UV5SsSLTwTHwecFyiUGz8AKoSUDz8t-AALzMaycP7SAAUAEpOrd7swnvA9KwYK93hMYN9WL8pAC4MCWOwwbjBNDOlQ4YlHrxnmo0R9MT98XBofiAHyyST-Un0jFYnHcmAwil3KmIznI1FvBn85mswEcukkmAQyW8r4-cEA4VxG6iujU57qxnYgAKOH6wEi2LljCYC2OkQ%2Bpih7IYVDgCJp8AA2kxpXyfvMUcb%2BQBdZn6QycCG8VotHWew3wB0ebyRiRuNNQLxk65J8ULBC8SItDTLfjMhBoLy8Jgs10K92UT2emA55ut1vJpKRDgIXzAhAAdwQwHgOTQ6TQxQA5iiIfhIgArEIzILNGALQ4-Mr4RNduASKXojXYiF9wwHz1mJgce0s7FQV30D2HsplL1oCBl4otCCzhCT7XqYb4mOSLacgoSgqBC8ocq%2BkGekWJZluoFYqgeJgiD6YY6m%2BaiaNocGNgh%2BatpO6QZMUwD-FATCsGAnhQDObAZKIMzFGoEJvl21a1vWELUpgwCzqRnaHp6wCYCyizLC0qyNGwixbBM0IvrxklwO2PiIVph4jmOE61MUkAeIuZQrmuHgbmE26eNsZRsOsix7iBkm3veCyPu8GlIfpR4hgGZ5QHBYBsP0oY-OJekBV20ksuFrCRcFJrPhJcVdqmzFeKZ4gLBZ-6zrR%2B6dJlrYmJpcVsDAbw7HGLQtGVmUmO5Wl9BAgyqZM0weAg4B5v5%2Bk1XVXoibOzX6ZVQ0VVVrYjVAOzCaJk0VUIc1Ab5bqxZJC07OauDuKwxRsMuygqsBq03pp%2BH%2BZReQ0XRDFMdArF5JANLHdxc0fnAACSMm8BAcBPtA8w0C0Ph7XAykfRIG2w08rDiYjn3rTN-F1j56VNjth4JZtUAne9SMAPzFH1tUYICNNwAALAADAAjH5cU6RlAW-UMHbOcpDq8LO2ljBMc2SYZ47JMQpnoCq%2BCWauykwLZW5lA5ExOUpGxuVdh6eTAD6E6zmXHlF55JSlp5pdtotaQT5um%2BlePlb96SRMAbAqELR6ibwQS0XAYAIPONv6dl3h5YshUASVbVTSH76fnoPtwMsMDx120MNU16cujru1aJ1wzCz1IAzP1YCDXF01xb9cglnAtHhM9zHx9Dk6E8Uy1iXnoEzZ60MHSAR3E2dsGXXN1etrdN44WHOZ4RB-coqNPH%2BQAPA7WqCMUB2WtaUBwP0CAtBxgL0P6lv8iYbJzWvaqpfyW8wDvFpWjaR8n6wZ8mw-PzXzb58HQKQ%2BJPLsa8yj30vpqZUL9OpvygDfdeZRN4wN3vAxBnodTgSAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[ProfileDataContext.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAbzgYygUwIYzQYQgO2wA8YAaOAVwGdcDizKaBlGLNOAXzgDMoIQ4AInQZkMQQG4AsAChQkWIjgYiwCFQBKaKpx58BggHSGA9BjDAzq9QBE03DBQA2MKpNnzo8JNwhOnEADuABJoTmBoUOQU%2BL7%2BQaHhkbq8-ELGJhQwwE5Umdm57jKyssgEVPAACnzcOWg2WBh4hGgkcAC8KCLYzfQAFACU0jJl%2BBVwTGgw1RC1TvWNva3wnaiYPXTLg8MlMq0K8KPj1GgzcwusHXCDHQB8jLQtJH1ndQ2sSyRDsvteKOXwE6TaY1N6NK43dr3E6fGB9YGvebvJqbL7DX6KI5VUFIxozABuwAAJslOn0kMgABY5InofCcAZ3RCyOD-MbwADaYBxFww5BoINmYNYAF0rkDWNhySzWXAwBgAOanHkALiU6Cozlcao5Yo4pBlHG%2BxRkrKxcEpGHwRPmADE-AFAlcMFQAJ74ZDXZBOYDIADWaCJiLQjKhzNNspgUFd4dlsvNSCJ4K4nQwgQwwHgKjUmm0hkgFT6ghMcUdgZMgnICBlcdZpaCgYA%2BmssNA1d7fQGgzzDMSDRG40bhrW4ALg8i%2Bn1uWh8Sw2KH7tKB7XjPn0LPJWh%2ByPWfKlcG1dXlyONVqqGrpxu2PnFcqhfNDKeXFRDCBzJPufeQ3cazu6w6EjCCIoCnHlyA7f1A2Dcgk1YXsiQGX8RwGbcd31JCGWNQcUCwKlrkiKBGSPEcTBMNkqD8NBDACBU%2BgIrDZQ4Q0dgjc1LWteYAFVYgAp1UzdD0vR9SDuy-BdY0jaMJLjNMMyzaxcxfEl5ilAADEtePLAASBAIK7YNDHrQJG2JDgTFUhi4zHHkJ1Amc52wcSlz-VdLwcrcMN3W8D2kncn21OV13cm99x7fyXzfMAPx5BdPNrGIjMSYDQK-cDhP0mK4tZFC4vQ49MOHRicJgPC6KgQjfNZUjyMo6iIFo%2BjCtZJiIw4FjWXQGAKCgek%2Bl-AAecdFlRGBDAJYlknxDAnAoNB2gQT9zmRDhbgw-qERs4anlG8aSSgOKppmuaECQayv2Rch2JtNB7XiQJLqta7uKMzgWpHVb8tZXTqScWk0HwN7a36kwNvOrb6DGvhCT2j642BoaPhGyGIGhyJYbgY02qAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[Asset.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFEljgGUxgA7ZpKObXAo9GAWgBGECDADOMKCjAB6RizZQyVGtHgSAngBskYzjjz4AdEZmadYmQEExYpDCMgIAEwCuOo2lvLKVKmghmCTgbO3gAXjgACgBvODEmVnYAGnioNFSQXTEUAHMkOABfAEo4cIA%2BOBiqODgiGFcoZmia2rgAHmdgADc4NC0UWwA5FCzwmIADABIY810jUPtCuDB%2BABYJwvLWtqqEhXY4ADIjjvkkjhRmUBQYYEDw-GEoZ3Z8OBlywp222fTj07tUC5NJocZidLLFBaGDjLK2PJIZafb6UXa1GLwnL5AEdMB9AbDUZIR4gARrfDlTHZRGFdoyMBfH70rrdbZouDFCiUQrcvyUJAAD1o8FemBQ7ngixgpCAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[Avatar.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKCtEljgGcYBPAGyQbm1wIDpeA9EzYcBAQQBuKGCii8QEACYBXdrzQMGZKjspoIAOyZxJ02XAC8cABQBvRlDQAaOAAskwAOav4VgCwArC4wSAAe8AC%2BAJSWAHxwtlRwcEQwylAGNknJcAA8DGAoBrHZOXmgnqVlcGisKJoAciggSBa2wuwMvKYyUBFVZQyObUNo-ZTVOe5ePm3T3jDjk8kA7sCKMK5zHgtLyyisMBb4KFK9%2BANwAiUT1bYh4XvJuUKFxdlRFJQRX7phdPBFEhMChVPAerJSEA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[MoreDropdown.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFEljgBEcwATCAdwDs5tcCj0YAWgBGECDADOMKCjAB6RhBbsOZKjWjwpATwA2SCdxx58AOlNyd%2BiXICy0JIuWdTICMwCu%2B02gkS11OCacADecB4SSAASwFLQ2nAAvka8hMRCOB4wSFABVFRycnAAKgAWSNzQbChQzMiYcLGNQbAoHDAAhB0FRU6snHAcSEjMhuhoBoYwEHAw5QwA8raD7hXAXNDMObMzkBLAMMAQXHMVtkgcHlRox1IlpUSO4oYAvIjppphVNXVImAAU-zCxwAwrpgGgANZJAA0cCImAAlHAXgA%2BOD-KhwOAAHmAWOxcDQuhQfgAcigQEgXvhMKTuChBEhdOCwPsJIIAG74AnYhEvEIIxK8uCg8FQgX-JDItGhEXYpCmMBETkXGD0P4oLwwf6IiiUQmEsUQyFSvUixLCg1wOSoqiI82UJAAD1o8BuHDu9iIfRUKIxYVKbWY%2BgAoswDnCgxwQ45mUhskkZeiQgSiDAPFAuJjrdicb6BsTSRIKVSaSBdIItdN8HBmEwafpMDB8Hbc4T80x%2BhxTMUIABzfv6OCkgVlR70Z7JW3y3EFnvnS6z7FF8mU6n4bLOoQTdo5Hntw2QMBgHIg46YYD9gVhKQybL97QALgIl%2BdI1rltnbcNhs7Sm7UwAElshAZdCVXEt1wFKwDFMecQKQEArV-X9jQlEJo1jcMDhQ1DCRqYBGRJYRmRpEYDgPfC4B-ajcWAIkSTXMtaXpOkmQjFsbVo1CcQULsVGA0CeN-f9nB7RCwMPX9INLakQlgiR4IEzhJLw6j0MhAUsP0DV9GydT8MI4iUFI3QaS2fSkCo-CRN4hjZOg1jDHY6RSVKKtdC4mdpLzfiAMEyS7NxfzxNMRcPBEvj51ox1En1KgXTdIlbngAAFHBLzDTj539IFGmYJMURTAkPTuUpYmmKAEjeCJokq%2BJdX1PkE0zbMRTE7tGOLOSBQAAwrKssl2Z1BAAZjgAASBSYD0OCAEFhAkCBdCyJBEj65J6yURs-hbYLOsEvtB2HUcQnHYZJ0kacDvncKLki8DDpcSTwOxTTJWTOAKriaqlQiUp-j6uRlQgLKDDkabgGYRI5AomA%2BsRQzUOMwQSLI-B4cEUHwZs1Dgr-BymKgli6Rcxl4drW04HhuAceAfQntCwCgqeu7Xt8o0ODBE1PuK76Gr%2BsAAaBkHMoZiGoZhuHOLkOqs3XRHkd-VH0fMzHOMEeWOHXPHfwJjsiZ6py6SgBlBGhwQ0B%2BKmDZXaN%2BwqbX1yZ9nhLZlSJNAt7RW58UtJCXV%2BZ%2BqrtH%2BiRAeB%2BnrEhkJodh%2BGQeLNhNiVn3VdMjGsbAZPNj1w07fo7rmI3MnzchJBtFtn20Adioc78FPaldz2hKQg7mcEiKos7zhYv1eKgA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[NavBar.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQokscASgKYIDG82uBUzbZVN0eAGEIAOxgJgoxlCw48%2BbqxgBaAEYQIMNDCgIwAehHjJ0qH2rhBcAHIIAbnM6KeqjVp17Dd%2BxYF0fNQRZDgUlNnVNbV19A0Dgvys6AG9bBwAZKQBrOABfJzDXFRwAVxgZFQATXAt%2BJPgAGwgAcwgCggA6DoMENDRGbQMm1o6wUWbE2ngAQXsECRD5ToNZ%2BYSKSym4VJL%2BoRKobnEAVX6oABo4XcYAZQH9w8YTs7z2-C6DFjFypEGHo5gpxkxh%2BMEm1h0AE8GowMKFOt0oTC0HEHAAhYIdEAQSolGEdFh9cEpODcbH2RgAFQgWSelNAsIk4Fe8Pe3TKwAaKI5XNqlCoX1EOjS9gxsgAvHAABQASjg4oAfNsqHA4ILhSwDgCgRKrnstU9AWdZRtVer4P0YP9DTr5XrbvcDc8ZCaqCq1WJhQALBCiSow9ItADyZTtvUhohY0rliuVlFVqt0kLjCYTCAA7pJ4ER0KN0DApfhKgArYqMlQIMpeoYtCBlAz4GWm1NwS3W51QKWiPENJvu1NkiAU6m00T0kCMhDgV3xhP5FjzFhe6UyKBy5L9hMGAweoUQfHDKWrvuz1W5d25Dbu81wYbNRiVEMwHx2gA8Cs3r58mVEOUYSGUOAYAgcV8AMNBgGabswHwNUGl6NA7AncVkiRWEOm-bJ8mUYAKSEeC%2BiQxgULQtAOmmNhcMYXIP1PBNX2AOCEKI0DMAQFQ0H3YBKiwdjrigFQwAaXZ8AVV8DGABUbkg0Q4GOMBP1RewfyyWjUy-DJsjgf9AOA0Ca2aKRYJYAjEKnYjUJgaF0Mw39sMovDTJYyzrLIiiYComjN1VBimMI8zWPYziGm43iqk0ASIDAJ5RPEyTA2aOAAElREU2zVPdcSFSvWcbzvB8UpfSV30-dLtIAtggJAsDIB0FEWCUcpjKcgKXORDDNLsxAHMYfDmNa0jyJ6ry6J8xiTP65D8DYjiuJ4mawAQGEYCasSJIVIRGsYOAAAV8zSzqMrojTlK0nTKr0sCQtpSpmsmizBvS%2ByPMc%2B6SKs9r3M8tSW18ib-KmmbgtCma2JYRgOJATlGFi9bMhug7Tt-H6fLK874EugxMH3Jp0wfO6AYej6bMO56qL6wn3tcoaXuolH6PGlrAaCuawv4kg1skgAxHGIDxypEZU2jN2STVHg7AB%2BDpgDQAB9HQEEwTA4AAMhV7y4BOlTyt06rwN2MBgBYVARL8szkLakmkayMnXspy23OG%2Bn1MZt7ppZkL5vY3RgF9ZoYRUf8JpAeZUFEWHJJuA2jZNtANfE9L6fPfljrRiqMZA5IAAMDDAHBMGhlEABJRadI0ZClvOIALmFZe43Is-nJmiepp7utpinzZbz6nfj13Kfd2bPbC42oBMiH%2BIjhUdvz6HBeyemta0zHYLEfCjayFCfT9ANgzKJu3odjrrZGltNf7rvAqHkH2OqaAVBM9B8c5hUErgJ95%2BRt1jtWBZWzHlCYttRnErrPWuhs2AHGokBf8MBAFlx1FLfiohzL5C9IwSCXo4HJAACwAAZ8gGB%2BllHKqpuAwAOLJKUpUHBBFkP9S%2BR8fBinyP%2BRafpQIgFulgYASAHygWAjBZ2msQSmBkMLUa9F4hQA6GiPQfphEuxAIlNAADkjDAgNhBocD8AaNgugzBOiACMeC8GwSIRrHySk6GyPkZUCRZ9Ua0MxNSZo-ttrBF9g-b4OAuSgSCBBFgKgUH2DocEhw5jFGa2kR0EQDR4JgH6HAbi-jehG3CaE4IGTRKWKkQ4M2LF8AgDQBWMobRQQcQWGCBxjj1Jp11vpAmjDHqk3buTZuVMe601PrU36F9ClA1ZjNf2EA1AwxfjtEoagQpRi5owB8uT1JKSFt-XpCZS7i3LrICWt4Wj3kqIVfJAAuXZbiHxPh8MnRZmslJRITs4mRcSEn9BqUs0RUhxGIzoT9E8l5v5UDYdYSojA2J4ngMw4IpAgA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[NotFound.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgIilQ3wG4BYAKFEljgDkJkBnAVwBsZm5tcCA6fgHoUzZki5CAdhAC0RNp2b8wUgOZkqNaPGYwAnuyTdeefIKF7DxoYxgAxCKykATfiAguOSfmjGbqcB04AEExCR4cM2Ew8RgAqio0CCk9BggHJ1c4AF44AAoASlyAPjgAbyo4OCIYVigpAqrquAAeF2AANzg0dlFmehQQJBzyqyNlO0dnFwBfEuaWttiJRaW4Zig0UcYWDi5ZtaXhsRQ1EfKAAwBlaCh9ABo4GAALJDgwM-f9JwByIjg7AgEAA1sB1DxoHAXBBjFJfvAkAAPYB6S6HSjrOBCBaYlqtIQdTq46qFCiUWbkxKUZG0eAuJCYFD7dKZGakIA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[ReasonReader.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=GYVwdgxgLglg9mABAJQKYEMDOC3oCaoBOAFAN6KEbZgByIAtogL4CUipAsAFDeKIA2qKBSoIAKqgAeUANzdeiTAHcYUCAAtExAA7pCmVAEkwUYpSwI69Fm05c%2BfCFlSIAjAC4FDkRbATpiAC8iABEAOKE6NrqMBCIAG7wgpCoIXL23ogARuYA1uneTgaIAEyeGd7m1P7CwSEAopLa-LGqilIg6PyIEAhQqCZpXg45GPnDRS4AzOWZPtVStaEAyh1dMABe6LAIiHDAiPQwYHD6QxUjeQUOk4gALLOZVeKLQaHGEKrHAOaI6tuUPDnOajdDjC63ACsj0qoj8rzq9UgcBAkW%2BP0UIFaBD2hHa-GAAFp-oR6MDMqDwYVnIgAGwwhzPeEBOoAQSg-Xo2lgYF%2BUDgiAIwEiICB128lPFPRpAHYGXwmTU3iFWXh4kRYJgMTB%2BIJvl1ENpCHA8CBoJhyRKrhMaQAOeXzF4s0IAIX423QJh6cG0AE9CDBvuphMdhT9UPQBlBLZcxlLbgBOB2KhGhADyUHURHaAZRmEdYBjfElwyF6BA-CgybhSrquGoiGO-W%2B2d6FbwiBOwiyLibRCNQlQYoUTHkGUoUFRSBT0nSTHSY6k2lOwjLFeE9ZwGAIhHSQA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)

[axiosDefaults.js](https://typescript-eslint.io/play/#ts=5.6.2&fileType=.js&code=JYWwDg9gTgLgBAQwB7AgZzgMyhEcBEyqa%2BA3ALABQVR6AdACYCmmCArgDYxp0BGCaJgFUASgBk4AXgIALGDDBoAXAHoVCME1gIAtBuA6mAFgCMAJl4B2AMZmEZkyboytEANZsNYOtdwqyNCj0zKyc3M5MCMxQPJBoMADa%2BADCEAB2MEwZOgAqAJ6a%2BAC6UgQgYcBgCLAqmNAgOgwIMAgBlLQ8IexcPADuwDAyyVBMzBnACBwY0jBQbEwU1JRqcCMAjvPxcABkq0xokGmCcMAZWtZMYDDQaFRMSJCwcL5H8B0iTGulHT4jzUwACgAlIt7o94C8tu99t8gjxrH9MsDFkA&eslintrc=N4KABGBEBOCuA2BTAzpAXGYBfEWg&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)


### Amend 'follow' suffixes in utils.js

The issue of various permutations of the word follow surfaced again. Looking across the files `Profile.js`, `ProfilePage.js`, `utils.js`, and `App.js` here, and `profiles/serializers.py` and `profiles/views.py` on my back end, I considered whether the various forms of the word follow were correct in all these locations. I decided that `utils.js` was the most likely to be wrong, because it was the only file in which the variant "following" appeared. I decided that cases of following with `_id` appended should be **follow** (the ID of the Follow instance) and that cases with `_count` appended should be **follows** (the number of people a person follows).

![solving the follow issue](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732569163/solving_follow_z1kvgw.jpg)

### Full Manual Testing

I'm now going to manually test all the features of my site. I've worked out an order in which to do them that should be most efficient. Some will be confirmation that previously tested functionality has not been broken, and some will be newly tested.

![manual tests chart](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732647519/full_manual_testing_ndd5e1.png)

Signup and login tests

![signup and login tests](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732649388/mt_signup_login_zpwpcm.png)

Username change test

![username change test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732649855/mt_uname_qgukyd.png)

Password change test

![password change test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732650208/mt_password_jdnzwl.png)

Profile picture change test

![profile picture change test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732651373/mt_pfp_l5c73a.png)

Text posts creation test

![text posts creation test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732655058/mt_create_posts_wqrehy.png)

Post text edit test

![post text edit test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732655900/mt_edit_post_text_atogca.png)

Post delete test

![post delete test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732656074/mt_delete_post_ctym8m.png)

Image post creation test

![image post creation test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732656775/mt_image_post_wry2pw.png)

Image change test

![image change test](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732657274/mt_image_change_bmolep.png)

Profile page inspection

![profile page inspection](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732657485/mt_profile_page_qreofw.png)

Comments tests

![comments tests](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732659893/mt_comments_hncauy.jpg)

Liking tests

![liking tests](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732660400/mt_liking_wedysi.png)

Following tests

![following tests](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732718328/mt_following_pvpast.jpg)

### Fix unchanged image preview in ProfileEditForm

The profile picture successfully changed but without the preview having changed before clicking Save. I've fixed this by changing "image" to "profile_picture" at about line 142 of `ProfileEditForm.js`.

I've also added cleanup to the `useEffect` method.

### New Gitpod Workspace

My Gitpod workspace became corrupted, probably through no fault of mine, and would not open, perpetually claiming to be in the process of opening. I made a new workspace from my GitHub repo and changed production Aperta API's Heroku config var CLIENT_ORIGIN_DEV to match development Aperta's server URL.

### Fix Suspicious page image, condition, and cleanup

My placeholder image was failing to appear on an imageless report. Adding `.value` to make `{reports.results[0].post_image.value ? (` appears to have fixed it.

![placeholder present](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732725767/placeholder_fixed_ihbdk3.png)

I put my staff status check inside another `useEffect`, to get rid of a full-screen warning about sometimes not being able to access the value.

I ditched Abort Controller here and replaced it with the `isMounted` approach to cleanup. However, this may have been before sorting out the staff issue, so perhaps was not necessary.

I also got rid of another error message by inserting `<tbody>` between `<table>` and `<tr>`.

### Lighthouse

I ran some Lighthouse tests. As you can see, the accessibility scores were good (90+) and the scores overall were reasonable (70+).

![Lighthouse statistics](https://res.cloudinary.com/dlqwhxbeh/image/upload/v1732735302/lighthouse_r8ovpk.png)

## Credit

- My project has been significantly based on my previous codealong work from Code Institute's Moments walkthrough project, but with additional functionality (including a new model), a few stylistic differences, and other miscellaneous adjustments. More of my CSS than originally intended had to be lifted from Moments, to save time. Likewise, the 'nothing found' and 'upload' graphics.

- My Aperta logo was created using Adobe Express' free [logo maker](https://www.adobe.com/express/create/logo).

- The favicon and apple-touch-icon versions were produced with [Free Convert](https://www.freeconvert.com/png-to-ico) and [Resize Image](https://resizeimage.net/), respectively.

- My Code Institute mentor, Gareth McGirr, suggested the convenient inclusion of the 'reported' attribute in my API's Post model, and provided general support with clarifying my ideas and priorities for the project.

- Code Institute tutors Rebecca and Holly assisted with fixing problems with my `handleUnfollow` method and with post filtering for my 'Followed' page, as described above.

- The 'No Image' placeholder on the Suspicious page uses https://placehold.co.

- To avoid wasting time inventing post text from imaginary users, I asked ChatGPT to write posts based on prompts I gave it.

- My demo posts include a screenshot I took of the video game Cocoon, a photo I took at a zoo, and a photo of an eye I drew.

- Responsiveness mockup at the top here made with https://ui.dev/amiresponsive

- Font Awesome icons are of course used in the navbar.
