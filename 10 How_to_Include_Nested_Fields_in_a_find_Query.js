db.books.find(
    {
        name: "Blink"
    },
    {
        name: 1,
        publisedDate: 1,
        "authors.name": 1
    }
).pretty()