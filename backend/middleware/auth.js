const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized' });
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'change-me');
    req.admin = payload;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

exports.requireRole = (roles = []) => (req, res, next) => {
  if (!req.admin) return res.status(401).json({ error: 'Unauthorized' });
  if (!Array.isArray(roles)) roles = [roles];
  if (roles.length && !roles.includes(req.admin.role)) return res.status(403).json({ error: 'Forbidden' });
  next();
};