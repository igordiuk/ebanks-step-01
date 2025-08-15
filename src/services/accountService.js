const accountRepository = require('../repositories/acountRepository');

function resetState() {
	accountRepository.reset();
}

function getBalance(accountId) {
	const account = accountRepository.getAccount(accountId);
	return account ? account.balance : null;
}

function deposit(destinationId, amount) {
	const account = accountRepository.getAccount(destinationId) || { id: destinationId, balance: 0 };	
	account.balance += amount;
	accountRepository.saveAccount(account);
	return account.balance;
}

function withdraw(originId, amount) {
	const account = accountRepository.getAccount(originId);	
	if (!account) return null;
	account.balance -= amount;
	accountRepository.saveAccount(account);
	return account;
}

function transfer(originId, destinationId, amount) {
	const origin = accountRepository.getAccount(originId);
	if (!origin) return null;
	
	origin.balance -= amount;
	accountRepository.saveAccount(origin);
	
	const destination = accountRepository.getAccount(destinationId) || { id: destinationId, balance: 0 };
	destination.balance += amount;
	accountRepository.saveAccount(destination);
	
	return { origin, destination };
}

module.exports = { resetState, getBalance, deposit, withdraw, transfer };