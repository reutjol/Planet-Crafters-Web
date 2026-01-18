Planet Crafters – Landing Page

A React landing page for the Planet Crafters game, including a live feedback system integrated with AWS.

▶️ Run
npm install
npm start

📌 Required assignment pages:
ex1:
- Home / Content Page: HomeScreen (Game overview + sections)
- Form Page: CommentForm (shown instead of Comments section)
- API Page: UsersComments (loads comments from AWS API)

ex2:
Context (Global State)
    I use ProfileContext to manage a global “logged-in user” state across the app.
    It stores a user object (name, email) and exposes functions such as update() (to update user details) and logout() (to clear the user).
    The context is used in multiple places:
        - Profile page: the user can edit and save their details, which updates the global context.
        - Comments form: the comment form automatically pre-fills the user’s name and email from the context.
        - Header: when a user exists in context, a visual “connected” indicator (checkmark) is shown next to the profile icon.

Routes (React Router)
    The app uses React Router for navigation between pages:
        / → Home page (includes internal sections such as Title, About, and Overview, with navigation that scrolls to each section)
        /comments → Comments page (displays user comments and a button to add a new comment)
        /comments/new → Add Comment page (a dedicated form page for submitting a new comment)
        /profile → Profile page (connect/edit user details stored in context)
        * → Not Found page (shows “404 – Page not found” for unknown routes)

ex3: 
Part 1 – Custom Hook: useLocalStorage
    Implemented a custom hook useLocalStorage(key, initialValue).
    Reads initial value from localStorage and saves updates automatically.
    Used for a real feature: theme (dark/light mode).
    Used in two components: App and Header.

Part 2 – Custom Hook: useApi / useFetch
    Created reusable hooks for API calls.
    useApi manages data, loading, and error.
    useFetch supports automatic fetching and refetch().
    API logic is not duplicated inside components.
    Used in two pages: UsersComments (GET) and CommentForm (POST).

Part 3 – Redux Toolkit (Profile / User State)
    Added Redux Toolkit for global user (profile) state.
    Created a Redux store and a user slice using createSlice.
    Slice includes:
    State fields: user, isLoggedIn
    Actions: login, updateProfile, logout
    Bonus – User data is loaded from localStorage to initialize the Redux state (Redux persistence).

Part 4 – Using Redux in the UI
    useSelector is used in multiple components (Header, ProfileScreen, CommentForm).
    useDispatch is used in multiple components (Login, Connect).
    Redux state directly affects visible UI behavior.

Part 5 – Replace Context
    Replaced ProfileContext with Redux for user management.
    Removed all usage of Context related to user state.