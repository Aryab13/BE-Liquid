export const createUser = async (req, res) => {
  try {
    const { nama, username, password } = req.body;
    const user = await User.create({ nama, username, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
