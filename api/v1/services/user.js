

const getUserbyId = async (userId) => {
        const user = await fetch(`/user/${userId}`);
        return user;
}
module.exports= {getUserbyId}