const accountService = require('../services/accountService');

function reset(req, res) {
	accountService.resetState();
	return res.sendStatus(200);
}

function getBalance(req, res) {
	const { account_id } = req.query;
	const balance = accountService.getBalance(account_id);
	if (balance === null) return res.status(404).send('0');
	return res.status(200).send(balance.toString());
}

function handleEvent(req, res) {
	const { type, origin, destination, amount } = req.body;
	
	if (type === 'deposit') {
		const account = accountService.deposit(destination, amount);
		return res.status(201).json({ destination: { id: destination, balance: account }});
	}

	if (type === 'withdraw') {
		const account = accountService.withdraw(origin, amount);
		if (!account) return res.status(404).send('0');
		return res.status(201).json({ origin: account });
	}
	
	if (type === 'transfer') {
		const result = accountService.transfer(origin, destination, amount);
		if (!result) return res.status(404).send('0');
		return res.status(201).json(result);
	}
	
	return res.status(400).send('Invalid event type');
}

module.exports = { reset, getBalance, handleEvent };