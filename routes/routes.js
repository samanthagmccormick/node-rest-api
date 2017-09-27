var faker = require("faker");

var appRouter = function(app) {
    // anytime there is a GET request to /, print this message
    app.get("/", function(req, res) {
        res.status(200).send("poop to the API");
    });

    app.get("/user", function(req, res) {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(data);
    });

}

module.exports = appRouter;