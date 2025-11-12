const ok = (res, data) => res.json({ success: true, data });
const created = (res, data) => res.status(201).json({ success: true, data });
const error = (res, status, message) => res.status(status).json({ success: false, message });

module.exports = { ok, created, error };
