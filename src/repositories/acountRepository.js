// Bank account in memory to test
const accounts = new Map();

function reset() {
	accounts.clear();
}

function getAccount(id) {
	return accounts.get(id) || null;
}

function saveAccount(account) {
	accounts.set(account.id, account);
}

module.exports = { reset, getAccount, saveAccount };