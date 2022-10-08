export default function Handler(req, res) {
  
  const id = req.query.id;

  res.status(200).json({
    id: id,
    name: `aaa ${id}`,
  });

}