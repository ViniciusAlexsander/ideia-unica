export default (req, res) => {
  res.status(200).json({ date: dynamicDate.toGMTString() })
}
