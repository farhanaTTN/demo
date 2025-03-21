
const serviceUSer =require('../services/user')

const getUserName = async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await serviceUSer.getUserbyId(userId);
        console.log("user", user);
        res.status(200).json({Username: user});

    } catch (err) {
        res.status(500).json("error in controler ", err);
    }
}
module.exports = getUserName;