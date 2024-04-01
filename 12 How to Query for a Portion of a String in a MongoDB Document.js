db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publisedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});


//db.books.findOne({ name: /.*deep work.*/i })