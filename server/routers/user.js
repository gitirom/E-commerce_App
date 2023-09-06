const User = require("../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
    } = require("./verifyToken");
    
    const router = require("express").Router();
    
    //UPDATE
    router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
        if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
        }
    
        try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
            $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
        } catch (err) {
        res.status(500).json(err);
        }
    });
    
    //DELETE
    router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
        try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
        } catch (err) {
        res.status(500).json(err);
        }
    });
    
    //GET USER
    router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...others } = user._doc;
            res.status(200).json(others);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    //GET All USER
    router.get("/", verifyTokenAndAdmin, async (req, res) => {
        //return just the last new user
        const query = req.query.new;
        try {
            const users = query ? await User.find().sort({_id: -1}).limit(5) :  await User.find(); //using query to get the new users by limit if not return all users
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    });
    //GET USER STATS
    router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); //this give me the last year
        try {
            const data = await User.aggregate([  //aggregate  is a way of processing a large number of documents in a collection
                {$match: { createdAt: { $gte: lastYear }}},
                {
                    $project: {
                        month: { $month: "$createdAt" },   //$month take month number
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },  //this is the return result sum will be increment auto
                    },
                },
            ]);
            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    });

module.exports = router;