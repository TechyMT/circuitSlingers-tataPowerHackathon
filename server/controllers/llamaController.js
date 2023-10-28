const client = require('../db/connect');
const axios = require('axios');

exports.llamaController = async (req, res) =>
{
    try
    {
        //http://e169-35-222-231-104.ngrok-free.app/get/<querry>

        const query = req.query.query;
        console.log(query);

        const options = {
            method: 'GET',
            url: `http://dbb1-35-222-231-104.ngrok-free.app/get/${query}`,
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420",
            }
        };

        const responsellama = await axios(options);
        console.log(responsellama.data);

        const { rows: response } = await client.query("INSERT INTO llama_query (query, response, created_at, updated_at) VALUES ($1, $2,$3, $4) RETURNING *", [user_query, Response, new Date(), new Date()]);

        res.status(200).json({
            status: "success",
            data: Response
        });

    }
    catch (err)
    {
        console.log(err);

        return res.status(400).json({
            status: "fail",
            message: err.message

        });
    }
};


