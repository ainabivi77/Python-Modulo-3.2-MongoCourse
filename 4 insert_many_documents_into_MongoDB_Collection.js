db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Avdi Grim"}
        ]
    },
    {
        "name": "The War of Art",
        "publishedDate": new Date(),
        "authors": [
          {"name": "Steven Pressfield"}
        ]
      },
      {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
          {"name": "Malcolm Gladwell"}
        ]
      }
])