const { verifyAuthToken } = require('../../helpers/verifyAuthToken');

module.exports = {
    checkLoginStatus: async (req, res) => {
        let result;
        if (req?.body?.token) result = await verifyAuthToken(req?.body?.token);

        if (result?.status == 200) return res.status(200).json({ status: 200, data: result?.data })
        else return res.status(400).json({ status: 400 });
    }
}