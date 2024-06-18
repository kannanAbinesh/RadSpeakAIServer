const bcrypt = require('bcrypt');
const { createAuthToken } = require('../../helpers/createAuthToken');
const { getDB } = require('../../../config');

module.exports = {
    login: async (req, res) => {
        console.log('dfsfsfsdf')
        const emailId = req?.body?.emailId;
        const password = req?.body?.password;
        if (!emailId || !password) return res.status(400).json({ status: 400, message: "Required data has't send. " })

        let db = await getDB();

        const getUserData = await db.collection('User').findOne({ emailId });
        if (!getUserData) return res.status(400).json({ status: 400, message: "The eneterd EmailId doesn't matches with our data." });

        const passwordCheck = await bcrypt.compareSync(password, getUserData?.password);
        if (!passwordCheck) return res.status(400).json({ status: 400, message: 'The enetered password is incorrect' });

        let token = await createAuthToken({ emailId });

        if (token) return res.status(200).json({ status: 200, token });
        else return res.status(400).json({ status: 400, message: 'Something went wrong please login again.' });
    }
};