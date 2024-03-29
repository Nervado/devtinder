const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {

        const { devId } = req.params;
        const { user } = req.headers;

        // Instancia dos usuarios do banco
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // Bad request
        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' })
        }

        // check if there a like already
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('match')
        }
        // Save like at databank
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json({ ok: true });
    }
}