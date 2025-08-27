import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

dotenv.config()

console.log('Environment Variables:', {
  JWT_SECRET: process.env.JWT_SECRET ? 'Present' : 'Missing',
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
})

// Validate environment variables
if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not defined.');
  process.exit(1);
}

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(express.json())

// Initialise user array (in-memory storage)
const users = [];


// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

function extractUsername(req) {
  const { name } = req.body;
  if (typeof name !== 'string' || !name.trim()) {
    return null;
  }
  return name.trim();
}

// Signup route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Log the received data (remove in production)
  console.log('Received signup request:', {
    name,
    email,
    password: '***hidden***'
  });

  try {
    // Validate input presence and types
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !name.trim() || !email.trim() || !password
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedName = name.trim();

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Check if user already exists
    if (users.find(u => u.email === normalizedEmail)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password (guard against unexpected errors)
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (hashError) {
      console.error('Password hash failed:', hashError);
      return res.status(500).json({ message: 'Failed to secure password' });
    }

    // Create new user
    const user = {
      id: users.length + 1,
      name: normalizedName,
      email: normalizedEmail,
      password: hashedPassword
    };

    users.push(user);

    console.log('User created successfully:', { id: user.id, email: user.email });

    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route (update existing route)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Unauthorized" });
    }


    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      accessToken,
      user: { id: user.id, email: user.email, name: user.name }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected routing
app.get('/api/calendar', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to Omni-calendar' });
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

