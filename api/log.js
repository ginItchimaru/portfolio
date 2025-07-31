export default function handler(req, res) {
  const now = new Date().toISOString();
  const host = req.headers.host;
  const path = req.url;

  console.log(`[${now}] HIT - Host: ${host} - Path: ${path}`);

  res.status(204).end(); // respond with no content
}
