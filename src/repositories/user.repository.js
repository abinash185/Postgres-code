const pool = require('../config/db');

const createUser = async ({ name, email }) => {
  const sql = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at`;
  const values = [name, email];
  const { rows } = await pool.query(sql, values);
  return rows[0];
};

const getAllUsers = async () => {
  const { rows } = await pool.query('SELECT id, name, email, created_at FROM users ORDER BY id');
  return rows;
};

const getUserById = async (id) => {
  const { rows } = await pool.query('SELECT id, name, email, created_at FROM users WHERE id = $1', [id]);
  return rows[0];
};

const updateUser = async (id, { name, email }) => {
  const sql = `
    UPDATE users SET name = $1, email = $2
    WHERE id = $3
    RETURNING id, name, email, created_at
  `;
  const values = [name, email, id];
  const { rows } = await pool.query(sql, values);
  return rows[0];
};

const deleteUser = async (id) => {
  const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
  return rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
