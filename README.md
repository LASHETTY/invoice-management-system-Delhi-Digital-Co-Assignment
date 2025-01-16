# Invoice Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing invoices with user authentication.

## Repository
- GitHub: [https://github.com/LASHETTY/invoice-management-system.git](https://github.com/LASHETTY/invoice-management-system.git)

## Live Demo
- Frontend (Vercel): [Coming Soon]
- Backend (Render): [Coming Soon]

## Features

- 👤 User Authentication
  - Secure Login/Register system
  - JWT-based authentication
  - Protected routes

- 📝 Invoice Management
  - Create new invoices
  - View all invoices in a list
  - Update existing invoices
  - Delete invoices
  - Invoice fields include:
    - Invoice Number
    - Client Name
    - Date
    - Amount
    - Status (Paid/Unpaid/Pending)

- 🔍 Advanced Features
  - Sort invoices by different fields
  - Filter invoices by status
  - Search invoices by client name or invoice number
  - Responsive design for mobile and desktop

## Tech Stack

### Frontend
- React.js 18.2.0
- React Router Dom 6.9.0
- Material-UI (MUI) 5.11.11
- Axios for API requests
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file in server directory with:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Start server
npm run dev
```

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file in client directory with:
REACT_APP_API_URL=http://localhost:5000/api

# Start React app
npm start

# For production build
npm run build
```

## API Endpoints

### Authentication
```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
```

### Invoices
```
GET /api/invoices - Get all invoices
POST /api/invoices - Create new invoice
PUT /api/invoices/:id - Update invoice
DELETE /api/invoices/:id - Delete invoice
```

## Project Structure
```
invoice-management-system/
├── client/                 # Frontend React application
│   ├── public/            # Public assets
│   └── src/
│       ├── components/    # Reusable components
│       ├── contexts/      # Context providers
│       ├── pages/         # Page components
│       └── services/      # API services
└── server/                # Backend Express application
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    └── middleware/       # Custom middleware
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment

### Frontend (Vercel)
- Connect to GitHub repository
- Set environment variables in Vercel dashboard
- Set Root Directory as 'client'
- Deploy

### Backend (Render)
- Connect to GitHub repository
- Set environment variables in Render dashboard
- Set Root Directory as 'server'
- Deploy

## Testing the Application

1. Register a new user
2. Login with credentials
3. Create a new invoice
4. View invoice list
5. Try filtering and sorting
6. Update an invoice
7. Delete an invoice

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
LASHETTY

## Acknowledgments
- [React Documentation](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
