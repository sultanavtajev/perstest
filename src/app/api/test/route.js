// src/app/api/test.js
export default function handler(req, res) {
  res.status(200).json({ message: "API is working!" });
}