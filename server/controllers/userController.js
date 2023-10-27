const client = require("../db/connect");
const bcrypt = require("bcryptjs");
const generateUserToken = require("../utils/generateUserTokens");
const jwt = require("jsonwebtoken");


/**
 * Save the user data to DB and generate signin token
 * @param {Object} req - Request Object which contains user Data
 * @param {Object} res - Response Object
 */
exports.signUserUp = async (req, res) =>
{
    text =
        "insert INTO users(first_name, last_name, email, mobile_number,country,state,city, year, password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, first_name, last_name, email, mobile_number, college, year, country, created_at, updated_at";
    const timestamp = new Date();
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email.toLowerCase(),
        req.body.mobile_number,
        req.body.country,
        req.body.college,
        req.body.year,
        encryptedPassword,
        timestamp,
        timestamp,
    ];
    try
    {
        const data = await client.query(text, values);
        const token = await generateUserToken(data.rows[0].id);
        const email = data.rows[0].email;
        const name = data.rows[0].first_name + data.rows[0].last_name;
        sendWelcomeMail(name, email);
        res.json({ token: token, user: { ...data.rows[0] } });
    } catch (err)
    {
        console.log(err);
        const duplicateError = err.message.split(" ").pop().replaceAll('"', "");
        if (duplicateError === "users_email_key")
        {
            res.status(409).json({ error: "User with this email already exists" });
        } else if (duplicateError === "users_mobile_number_key")
        {
            res
                .status(409)
                .json({ error: "User with this mobile_number already extsts" });
        } else
        {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};


exports.logUserOut = async (req, res) => {
    try {
      const query = "delete from user_token where token = $1";
      const params = [req.token];
      const data = await client.query(query, params);
      if (data.rowCount === 1) {
        return res.status(200).json({ success: "successfully logged out" });
      } else {
        return res.status(500).json({ error: "Unable to log out" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};
  
