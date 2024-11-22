# Chirp

A Twitter / X like React App currently in development by Enoch Whitaker.

## Elevator Pitch

Chirp is a Twitter/X-inspired social app where users can share quick thoughts limited to 250 characters and reply and interact with others in a feed style format. Interaction include reply to a 'chirp' or simplying 'liking' it. It takes what Twitter/X does well at its core, and removes all of the unecessary baggage.

## Contributors

Enoch Whitaker

## Features

- User Authentication: Users can sign up, log in, and log out securly
- Profile: Users can personalize their profile with a bio, profile picture, and display name
- Feed Display: Users can see tweets from anyone or just the poeple they follow
- Chirps: Users can create, edit, and delete a 'chirp'
  - Users can reply or like other 'chirps'
- Follow: Users can follow and unfollow other users
- Real-Time Updates: Users can get the newest 'chirps' without refreshing (maybe)
- Error handling: Errors in the API calls or other actions won't crash site
- Search: Users can search for a specific user or 'chirp'

## Pages

- [x] Home Feed
- [x] Profile
- [ ] Edit Profile
- [x] Post Chirp
- [x] View single chirp
- [x] Search Results
- [ ] User Page
- [x] Login / Register
- [ ] Settings
- [ ] 404 Page

## New Things

- Websockets for real time updates

## Timeline

### Nov 6

- [x] Begin planning and building project scope, aiming for larger scale than Inventory Management (30 pts)
- [x] Implement authentication and user account support (10 pts)

### Nov 9

- [X] Use TypeScript effectively (5 pts)
- [X] Set up CI/CD pipeline (5 pts)
- [X] Implement linting in the pipeline (5 pts)

A retrospective of what you (individually) worked on this last cycle and how it went
-   This period, I was able to get all of my services for the user in the backend fully fleshed out. I also got the those service and corresponding types to work in the front end. I was able to get all of the users from the database to appear on the frontend both locally and in kubernetes. After I had ahcieved that, I focused on getting a user to be automatically added to the database if it was their first time logging in. I did this using the onSignInCallback method, and I used the users id_token and put that it the corresponding table for the user. This will be good for the future because I won't have to worry if a user has been added to the database, as well as I have something to authorize them with. Lasty, I was able to get the frontend home page mostly set up style wise, but with no actual data getting pulled from the database.

A rough plan of how you expect to implement the next cycle
-   As of today, I should have most of what is due next cycle already done. This does not mean that I will be taking any time off though, but I will be fleshing out ore of my network calls. I will actually create an admin page that will give me the ability to test my read and write calls for the users and possible even more of my tables. I will also get farther ahead on my styles too, not just focusing on the backend.

If you are in a group, comment on how your experience has been working with your group members
- Not in a group

An evaluation of how well this project is going
- This projet has been going great and I have been enjoying working on it alot. I have been interested in this enough where I find myself wanting to spend more time on it that I usually a lot for this class. I am excited to keep going an happy to say that I haven't run into any major speed bumps (yet). I am trying to keep myself strict on the line limit because in the past projects, if I have to refactor them to be smaller, I often get stuck. So I am trying my best to not let that happen now.


### Nov 13

- [x] Implement network calls for reading and writing data (5 pts)
- [x] Use local storage (5 pts)
- [x] Implement client-side state management (5 pts)

A retrospective of what you (individually) worked on this last cycle and how it went
-   This period, I was able to get all of the backend and frontend implementation of getting posts done. On my current home page, I am currently able to get all of the posts in a feed style format. Also in this spirnt I got all of the posts formatted in their own cards how I had originally planned them to be. I also made my second page, which is the post page. This post page allows the user to make a new 'chirp' and validates them on the length of the message. It shouldn't allow you to post a chirp if you are not logged in, but as of now you are able to still view this page if you are not logged in. I also got local storage added to my project. I am using the local storage to handle the users choice of wanting the app to be in dark or light mode. I have the styles done for each mode that look okay. I also have the client side state managment done, but that was not necessarily done in this cycle. 

A rough plan of how you expect to implement the next cycle
-   My plan for the next cycle is to implement error handling. I believe that I already have the right amount of generic layout components done, so I should be able to hard focus working on the Error Handling for my API Requests. I will do this by looking back at my old projects and looking up online some better ways of doing it if I feel like I could be doing it a better way.

If you are in a group, comment on how your experience has been working with your group members
- Not in a group

An evaluation of how well this project is going
- So far, I am still enjoying this project. Most of the frustations I have while working on this are pretty self inflicted when I am trying to cut corners. I am excited to learn more about websockets in class as this is pretty integral to this project. 

### Nov 16

- [x] Implement error handling for API requests and render errors (5 pts)
- [x] Begin developing 4+ generic layout components (12 pts)

A retrospective of what you (individually) worked on this last cycle and how it went
-   This period, I was able to get a lot done. I first noticed that my dark mode wasn't working as expected with images needing to change, so I was able to get that to work. This makes it so the contour on my header and mobile footer changes appropriately as well as the brand logo. I then spent a good chunk of time making sure that every page looks good in mobile as well as on bigger display. I had wanted to design mobile first but I had gotten distracted, so I know can do mobile first. I then added the feature where if the user is signed in, then it would display that users profile picture rather than the default I had in its place. I then added the error handling for API calls so they no longer crash my site if they occur. Then, I added the ability to see and leave replies to a post. I then had to make sure that when I got all posts, I left out the posts with the boolean of 'isReply' == false.

A rough plan of how you expect to implement the next cycle
-   My plan for the next cycle is to get toasts added when a user leaves a post or a reply to signify a success. I will most likely be using hot-toasts and I really would like them to not look generic but match the overall theme of my site. I then will spend the rest of my time getting more pages and features fleshed out

If you are in a group, comment on how your experience has been working with your group members
- Not in a group

An evaluation of how well this project is going
- As of right now, I am really proud of how this project is coming together. I am trying my best to follow the practiecs of the Refactoring UI book and I can really see just how much the principles taught in that book help. I feel much more confident in myself becuase of that and it has saved me so much time on designing and developing.


### Nov 20

- [x] Build out at least 5 pages or views (5 pts)
- [x] Create 3+ generic form input components (9 pts)
- [x] Integrate toasts or global notifications (5 pts)

A retrospective of what you (individually) worked on this last cycle and how it went
-   This period, I was not able to get as much done as last period, but I still got a good amount of things done. The first thing that I got done was making it so that I could reuse my post chirp component so it could also be used in a modal. This allowed me to reply to other chirps without having to navigate pages. The functionality was pretty easy to use since I had done all the work for making a post, just changing the boolean to true in the reply column. I then started to work on creating more pages for this check in, so I then created the Account page. This shows the user, their pfp, their banner, what day they joined the platform, and their bio. Below that, I made a dropdown input to filter between that user's chirps, what they have replied to, and in the future I will show their likes. After that I created a search page with a basic search bar to bring my page total to 5. Afer that I added toasts to show when a user has succesfully made a post.

A rough plan of how you expect to implement the next cycle
-   My next plan for the next sprint is to really work on getting the authorized and public pages figured out. I think I know how I can do this, so I am not too worried

If you are in a group, comment on how your experience has been working with your group members
- Not in a group

An evaluation of how well this project is going
- This sprint was probably one of the more frustrating as I ran into a lot of little issues that I ended up spendng a lot of time on, only for the issue to be someting really small. I still am pleased with how it is coming along but this was definetly not one of the fun sprints

### Nov 23

- [ ] Complete 4+ generic layout components (12 pts)
- [ ] Implement authorized and public pages (5 pts)

### Nov 26

- [ ] Ensure tests run in the pipeline and abort if they fail (5 pts)
- [ ] Ensure mobile-friendly design for all experiences (5 pts)
- [ ] Implement 3 instances where elements re-order themselves on smaller screens (5 pts)

### Dec 4

- [ ] Finalize and ensure a professional, organized, and smooth experience (20 pts)
- [ ] Review the project for completeness and address any remaining items on the checklist
