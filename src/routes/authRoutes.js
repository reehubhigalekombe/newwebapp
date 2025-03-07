const express = require("express");
const bcrypt = require(" bcrypt ");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async(req, res) => {
    try {
        const {username, email, password} = req.body

        let user = await User.findOne({email});
        if (user) return res.status(400).json({message: "User already exists"});
        
        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User ({username, email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: "User registered Successfully"});
    } catch (err) { 
        res.status(500).json({message: "Server Eroor"})
    }
} );

router.post("/login", async(req, res) => {
    try {
        const {email, password} = req.body;
    const user = await User.findOne ( {email});

    if (!user) return res.status(400).json({message: "invalid credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: "Invalid Credentials"})

        const token  = jwt.sign({userId: user._id}, "your_secret_key", {expiresIn: "1h"} );
        res.json({token, userId: user._id});

} catch (err) {
    res.status(500).json({message: "Server Error"})
}
    }
)
module.exports = router;
