
const app = require("./index");

const Connectdb = require("./configs/db");

app.listen(5000, () =>
{
    try
    {
        Connectdb();

        console.log("listening on port 5000");
    }
    catch(error)
    {
        console.log("error : ", error);
    }
});