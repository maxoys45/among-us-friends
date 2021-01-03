const app = require("./app")

const PORT = process.env.PORT || 5000

const listener = app.listen(PORT, () => {
    console.log(
        "Your app is listening on http://localhost:" + listener.address().port
    )
})
