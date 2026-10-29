import "dotenv/config";

export function requireWriteKey(req, res, next) {
  const authorization = req.get("Authorization");
  const expectedKey = process.env.API_WRITE_KEY;

  if (!expectedKey) {
    return res.status(500).json({
      error: "La autenticación no está configurada",
    });
  }

  if (authorization !== `Bearer ${expectedKey}`) {
    return res.status(401).json({
      error: "No autorizado",
    });
  }

  next();
}
