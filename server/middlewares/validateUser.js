const client = require("../db/connect");

/**
 * Validate User Data and check if email alredy exists
 * @param {Object} req - Request Object which contains user Data
 * @param {Object} res - Response Object
 * @param {Object} next - next callback to be called
 */
exports.validateUserData = (req, res, next) =>
{
    if (Object.values(req.body).length < 6)
    {
        return res.status(400).json({ error: "One or more field missing" });
    }
    for (let value of Object.values(req.body))
    {
        if (!value)
        {
            return res.status(400).json({ error: "Field Empty" });
        }
    }
    req.body.year = req.body.year.toUpperCase();
    const { email, mobile_number, password, year } = req.body;
    if (
        validateEmail(email) &&
        validateMobileNumber(mobile_number) &&
        validatePassword(password) &&
        validateYear(year)
    )
    {
        next();
    } else
    {
        res.status(400).json({ error: "Invalid Details" });
    }
};

/**
 * Check if owner of token and user requesting it matches
 * @param {Object} req - Request Object with requesting user and token owner
 * @param {Object} res - Response Object
 * @param {Object} next - next callback to be called
 */

exports.isAuthenticated = async (req, res, next) =>
{
    try
    {
        let query = "select * from user_token where token = $1";
        const token = req.header("Authorization").replace("Bearer ", "");
        let params = [token];
        const data = await client.query(query, params);
        if (data.rowCount < 1)
        {
            return res.status(401).json({ error: "Unauthorized user!" });
        }
        const userId = data.rows[0].fk_user;
        query =
            "SELECT id, first_name, last_name, email, mobile_number, country,city, created_at, updated_at from users where id = $1";
        params = [userId];
        const result = await client.query(query, params);
        if (result.rowCount < 1)
        {
            return res.status(401).json({ error: "Unauthorized user!" });
        }
        req.user = result.rows[0];
        req.token = token;
        next();
    } catch (err)
    {
        return res.status(401).json({ error: "Unauthorized user!" });
    }
};

function validateEmail(email)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return true;
    }
    return false;
}

function validateMobileNumber(mobile_number)
{
    if (mobile_number && mobile_number.length >= 10)
    {
        return true;
    }
    return false;
}

function validatePassword(password)
{
    if (password.length >= 8)
    {
        return true;
    }
    return false;
}

function validateYear(year)
{
    if (year === "FE" || year === "SE" || year === "TE" || year === "BE")
    {
        return true;
    }
    return false;
}
