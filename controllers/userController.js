let users = [
  { id: 1, name: "Neha" },
  { id: 2, name: "Vinayak" }
];

// GET all users
const getUsers = (req, res) => {
  res.json(users);
};

// CREATE user
const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  createUser
};