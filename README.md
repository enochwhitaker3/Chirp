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

- Home Feed
- Profile
- Edit Profile
- Post Chirp
- View single chirp
- Search Results
- User Page
- Login / Register
- Settings
- 404 Page

## New Things

- Websockets for real time updates

## Timeline

### Nov 6

- [ x ] Begin planning and building project scope, aiming for larger scale than Inventory Management (30 pts)
- [ x ] Implement authentication and user account support (10 pts)

### Nov 9

- [ X ] Use TypeScript effectively (5 pts)
- [ X ] Set up CI/CD pipeline (5 pts)
- [ X ] Implement linting in the pipeline (5 pts)

A retrospective of what you (individually) worked on this last cycle and how it went
-   This period, I was able to get all of my services for the user in the backend fully fleshed out. I also got the those service and corresponding types to work in the front end. I was able to get all of the users from the database to appear on the frontend both locally and in kubernetes. After I had ahcieved that, I focused on getting a user to be automatically added to the database if it was their first time logging in. I did this using the onSignInCallback method, and I used the users id_token and put that it the corresponding table for the user. This will be good for the future because I won't have to worry if a user has been added to the database, as well as I have something to authorize them with. Lasty, I was able to get the frontend home page mostly set up style wise, but with no actual data getting pulled from the database.

A rough plan of how you expect to implement the next cycle
-   As of today, I should have most of what is due next cycle already done. This does not mean that I will be taking any time off though, but I will be fleshing out ore of my network calls. I will actually create an admin page that will give me the ability to test my read and write calls for the users and possible even more of my tables. I will also get farther ahead on my styles too, not just focusing on the backend.

If you are in a group, comment on how your experience has been working with your group members
- Not in a group

An evaluation of how well this project is going
- This projet has been going great and I have been enjoying working on it alot. I have been interested in this enough where I find myself wanting to spend more time on it that I usually a lot for this class. I am excited to keep going an happy to say that I haven't run into any major speed bumps (yet). I am trying to keep myself strict on the line limit because in the past projects, if I have to refactor them to be smaller, I often get stuck. So I am trying my best to not let that happen now.


### Nov 13

- [ ] Implement network calls for reading and writing data (5 pts)
- [ ] Use local storage (5 pts)
- [ ] Implement client-side state management (5 pts)

### Nov 16

- [ ] Implement error handling for API requests and render errors (5 pts)
- [ ] Begin developing 4+ generic layout components (12 pts)

### Nov 20

- [ ] Build out at least 5 pages or views (5 pts)
- [ ] Create 3+ generic form input components (9 pts)
- [ ] Integrate toasts or global notifications (5 pts)

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
