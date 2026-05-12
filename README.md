# Event Management Dashboard

A modern and responsive Event Management Dashboard built using ReactJS.  
This application allows users to manage events and participants efficiently with dynamic dashboard analytics and CRUD functionality.

---

# Features

### Dashboard
- Total Events
- Upcoming Events
- Completed Events
- Total Participants

### Events Module
- Add new events
- Delete events
- Toggle event completion status
- Dynamic event cards

### Participants Module
- Add participants
- Delete participants
- Participant management system

### Analytics
- Total events
- Total participants
- Completion percentage

### UI Features
- Responsive design
- Sidebar navigation
- Navbar and Footer
- Modern card-based layout
- Hover animations and transitions

### Data Persistence
- localStorage support
- Data remains after page refresh



---

# Tech Stack

- ReactJS
- React Router DOM
- JavaScript
- CSS
- Vite

---

# Folder Structure

```plaintext
src/
│
├── components/
│     ├── Navbar.jsx
│     ├── Sidebar.jsx
│     ├── Footer.jsx
│     ├── StatsCard.jsx
│     ├── EventCard.jsx
│     ├── EventForm.jsx
│     ├── ParticipantCard.jsx
│     └── ParticipantForm.jsx
│
├── pages/
│     ├── Dashboard.jsx
│     ├── Events.jsx
│     ├── Participants.jsx
│     ├── Analytics.jsx
│     └── Settings.jsx
│
├── styles/
│     └── main.css
│
├── App.jsx
└── main.jsx


```

# Installation

1. Clone the repository:
   ```
   git clone https://github.com/the-piyushgoel/Event-management-app-React.git
   ```
2. Navigate to the project directory:
   ```
    cd Event-management-app-React
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Open your browser and navigate to `http://localhost:5173` to view the application.
