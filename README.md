his repository contains my solution for the HMCTS Developer Technical Test.
The project includes:

A Node.js + Express + MongoDB backend

A React frontend

A POST /tasks endpoint that creates a task and returns the created record

The goal was to implement a simple task creation API and user interface demonstrating structure, separation of concerns, and end-to-end functionality.
project-root/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── db.js
│   │   ├── models/Task.js
│   │   ├── controllers/taskController.js
│   │   └── routes/taskRoutes.js
│   └── tests/
│
└── frontend/
    ├── src/App.js
    └── src/App.css
Running the Project

MONGO_URI=your-mongodb-connection-uri
PORT=3000
Install dependencies
cd backend
npm install
START SERVER
npm run dev
Frontend

Install dependencies:

cd frontend
npm install

Start React app:
npm start

API — POST /api/tasks
Request Body
{
  "title": "Example",
  "description": "Optional text",
  "status": "NEW",
  "dueDate": "2025-01-01"
}

Success Response
{
  "message": "Task created successfully",
  "task": { ... }
}

Technical Approach (Short Explanation)

Express + Router used to keep endpoints modular.

Controller handles validation, error handling and DB operations.

Mongoose Model defines schema & enforces structure → demonstrates OOP via class-like modelling.

MongoDB Atlas for easy cloud persistence.

Frontend uses fetch() to POST tasks and display results.

Validation ensures required fields (title) are present.



Working POST /tasks endpoint

Task stored in database

Frontend UI to submit tasks

Success & error messages displayed

Clean file structure

.env protected and excluded from version control


Important

.env file is intentionally not committed.
If secrets were ever pushed, the credentials have been rotated.





PORT=3000
