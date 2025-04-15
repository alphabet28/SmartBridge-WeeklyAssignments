const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory user array
let users = [];

// GET /users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map(user => user.id === id ? { ...user, ...req.body } : user);
  res.json({ message: "User updated." });
});

// DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.json({ message: "User deleted." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
