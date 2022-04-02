
const app = require("./index");

const Connectdb = require("./configs/db");

app.listen(5200, () =>
{
    try
    {
        Connectdb();

        console.log("listening on port 5200");
    }
    catch(error)
    {
        console.log("error : ", error);
    }
});