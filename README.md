# Reso Nest - a hotel management website

### Client-side Live Link: https://reso-nest.web.app/

## Technologies
- Tailwind CSS is used for styling.
- Firebase based authentication.
- MongoDB is used for database.
- AOS is used for scroll animations.

## Features:
- User can view the available rooms and see detailed information about the rooms.
- User can also view if there is any review available for the specific room given by any customer. 
- User can also book any available room by submitting some informations about them and the date when they want to book the room.
- After booking user can update and delete their bookings. But they can only delete 2 days before their booking. 
-  After deleting user's booking the room will be available for other customer again.
- User can view testimonials of the hotel. 
- In about section, user can know about the history and mission of the hotel.
- They can also meet the team members of the hotel.

## To Run Locally
### Client Side
1. Clone the application.
2. Create a .env.local file
3. In this file, you have to add your firebase variables as follows:
   VITE_APIKEY=value of apiKey from your firebase configuration <br/> 
VITE_AUTHDOMAIN=value of authDomain from your firebase configuration <br/>
VITE_PROJECTID=value of projectId from your firebase configuration <br/>
VITE_STORAGEBUCKET=value of storageBucket from your firebase configuration <br/>
VITE_MESSAGINGSENDERID=value of messagingSenderId from your firebase configuration <br/>
VITE_APPID=value of appId from your firebase configuration <br/>
4. In your terminal, run the following command: <br/>
    npm install <br/>
    npm run dev

### Server Side
1. Clone the server from: https://github.com/Orchizakia00/reso-nest-server
2. Create a .env file.
3. In this file, you have to add the followings: <br/>
DB_USER=replace with your username <br/>
DB_PASS=replace with your password <br/>
ACCESS_TOKEN_SECRET=replace with your token <br/>
4. In your terminal, run the following commands: <br/>
    npm install <br/>
    nodemon index.js

