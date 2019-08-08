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

        // Save like at databank
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();

        return res.json({ ok: true });
    }
}