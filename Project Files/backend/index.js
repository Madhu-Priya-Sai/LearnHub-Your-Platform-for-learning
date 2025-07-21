const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const DBConnection = require('./config/connect')
const path = require("path");

const app = express()
dotenv.config()

//////connection of DB/////////
DBConnection()

const PORT = process.env.PORT 


//////middleware/////////
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


///ROUTES///

app.use('/api/admin', require('./routers/adminRoutes'))
app.use('/api/users', require('./routers/userRoutes'))
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Pretty routes for /register and /login
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.listen(PORT, () => console.log(`running on ${PORT}`))