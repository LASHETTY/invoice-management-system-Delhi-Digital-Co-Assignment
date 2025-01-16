# Invoice Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing invoices with user authentication.

## Live Demo

- Frontend: [Vercel Link - Coming Soon]
- Backend: [Render Link - Coming Soon]

## Features

- 👤 User Authentication (Login/Register)
- 📝 Create, Read, Update, and Delete Invoices
- 📊 Invoice listing with sorting and filtering capabilities
- 🎨 Modern and Responsive Material-UI design
- ✅ Form validation
- 🔒 Secure authentication using JWT
- 💾 Data persistence using MongoDB

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Material-UI for design components
- Axios for API requests
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Bcrypt for password hashing

## Project Structure

```
invoice-management-system/
├── client/                 # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── pages/
│       └── services/
└── server/                 # Backend Express application
    ├── models/
    ├── routes/
    └── middleware/
```

## Local Development Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the client directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Invoices
- GET /api/invoices - Get all invoices
- POST /api/invoices - Create new invoice
- PUT /api/invoices/:id - Update invoice
- DELETE /api/invoices/:id - Delete invoice

## Features in Detail

### User Authentication
- Secure registration and login system
- JWT-based authentication
- Protected routes for authenticated users

### Invoice Management
- Create new invoices with details like invoice number, client name, amount, and status
- View list of all invoices with sorting and filtering options
- Update existing invoices
- Delete invoices
- Status tracking (Paid, Unpaid, Pending)

### UI/UX Features
- Responsive design that works on desktop and mobile
- Material-UI components for a modern look
- Form validation and error handling
- Loading states and error messages
- Clean and intuitive navigation

## Deployment

### Frontend (Vercel)
- Automated deployment through GitHub integration
- Environment variables configured in Vercel dashboard

### Backend (Render)
- Continuous deployment from GitHub
- Environment variables set in Render dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
