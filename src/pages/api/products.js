export default async function handler(req, res) {
  try {
    const r = await fetch("https://fakestoreapi.com/products");
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API error", details: err.message });
  }
}
