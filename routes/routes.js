var faker = require("faker");

var appRouter = function(app) {
    // anytime there is a GET request to /, print this message
    app.get("/", function(req, res) {
        res.status(200).send("poop to the API");
    });

    // GET /user will return this random faker data
    app.get("/user", function(req, res) {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName: faker.internet.userName(),
            email: faker.internet.email()
        });
        
        // send this data back
        res.status(200).send(data);
    });

    app.get("/users/:num", function(req, res) {
        var users = [];
        // grab the :num parameter
        var num = req.params.num;

        if (isFinite(num) && num > 0) {
            // create num fake users
            for (var i = 0; i <= num-1; i++) {
                users.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    userName: faker.internet.userName(),
                    email: faker.internet.email()
                })
            }
        } else {
            res.status(400).send({ message: "invalid number!" })
        }

        // send these users back
        res.status(200).send(users);
    });


}

module.exports = appRouter;