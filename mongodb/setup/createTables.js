[
  'users',
  'subscribers'
].forEach((collection) => {
  db.createCollection(collection)
})
