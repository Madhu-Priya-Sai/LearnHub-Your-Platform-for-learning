
📚 LearnHub: Your Center for Skill Enhancement LearnHub is an online learning platform that empowers students, instructors, and administrators to manage, create, and engage with skill-based courses. From course creation to progress tracking and certification, LearnHub makes learning seamless, interactive, and accessible for all.

💡 Features 👤 User Registration & JWT Login

🧑‍🏫 Instructor Dashboard to create and manage courses

🎓 Student Dashboard to enroll and track progress

📁 Upload videos, PDFs, and resources

📊 Progress Tracking & Completion Certificates

💳 Course Enrollment & Payment Integration (optional)

🔐 Role-Based Access (Admin, Instructor, Student)

🗂️ Organized course catalog with filtering

🛠️ Tech Stack Frontend:

React.js

Tailwind CSS / Bootstrap

Axios

React Router DOM

Backend:

Node.js

Express.js

MongoDB + Mongoose

JSON Web Token (JWT)

Bcrypt.js

Others:

Multer / Cloudinary (for file uploads)

EmailJS / Nodemailer (notifications)

Stripe / Razorpay (for payments - optional)

📦 Installation bash Copy code

Clone the repo
git clone https://github.com/yourusername/learnhub.git cd learnhub

Install backend dependencies
cd backend npm install

Start backend server
npm run dev

Install frontend dependencies
cd ../frontend npm install

Start frontend
npm start 📁 Folder Structure pgsql Copy code learnhub/ ├── backend/ │ ├── controllers/ │ ├── routes/ │ ├── models/ │ ├── middleware/ │ └── server.js ├── frontend/ │ ├── public/ │ └── src/ │ ├── components/ │ ├── pages/ │ ├── context/ │ ├── hooks/ │ └── App.js └── README.md

📄 License This project is licensed under the MIT License - see the LICENSE file for details.
