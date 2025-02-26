import chalk from 'chalk';
import figlet from 'figlet';
import crypto from 'crypto';
import inquirer from 'inquirer';

class CryptoAlgorithms {
	constructor() {
		// Define lowercase and uppercase alphabet arrays
		this.arr_lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
		this.arr_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	}

	shift_encrypt(text, shift) {
		shift = shift % 26;
		return text.split('').map(char => {
			if (this.arr_lower.includes(char)) {
				return this.arr_lower[(this.arr_lower.indexOf(char) + shift) % 26];
			} else if (this.arr_upper.includes(char)) {
				return this.arr_upper[(this.arr_upper.indexOf(char) + shift) % 26];
			}
			return char;
		}).join('');
	}

	shift_decrypt(text, shift) {
		shift = shift % 26;
		return text.split('').map(char => {
			if (this.arr_lower.includes(char)) {
				return this.arr_lower[(this.arr_lower.indexOf(char) - shift + 26) % 26];
			} else if (this.arr_upper.includes(char)) {
				return this.arr_upper[(this.arr_upper.indexOf(char) - shift + 26) % 26];
			}
			return char;
		}).join('');
	}

	async shift(text, operation) {
		const { shift } = await inquirer.prompt({
			type: 'number',
			name: 'shift',
			message: 'Enter shift value:'
		});

		if (operation === 'encrypt') {
			return this.shift_encrypt(text, shift);
		} else if (operation === 'decrypt') {
			return this.shift_decrypt(text, shift);
		}
	}

	static vigenere(text, key, operation) {
		key = key.toUpperCase().replace(/[^A-Z]/g, '');
		let keyIndex = 0;
		return text.split('').map(char => {
			const code = char.charCodeAt(0);
			if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
				const base = code <= 90 ? 65 : 97;
				const keyShift = key.charCodeAt(keyIndex % key.length) - 65;
				keyIndex++;
				const offset = operation === 'encrypt' ? keyShift : -keyShift;
				return String.fromCharCode((code - base + offset + 26) % 26 + base);
			}
			return char;
		}).join('');
	}

	static oneTimePad(text, key, operation) {
		if (text.length !== key.length) {
			throw new Error('Text and key must be the same length');
		}
		return text.split('').map((char, i) => {
			return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i));
		}).join('');
	}

	static des(text, key, operation) {
		const cipher = crypto.createCipheriv('des-ecb', Buffer.from(key.slice(0, 8)), null);
		const decipher = crypto.createDecipheriv('des-ecb', Buffer.from(key.slice(0, 8)), null);

		if (operation === 'encrypt') {
			return Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]).toString('hex');
		}
		return Buffer.concat([decipher.update(Buffer.from(text, 'hex')), decipher.final()]).toString();
	}
}

// ================= USER INTERFACE =================
async function showMainMenu() {
	console.log(chalk.green(
		figlet.textSync('Crypto CLI', { horizontalLayout: 'full' })
	));

	const { operation } = await inquirer.prompt({
		type: 'list',
		name: 'operation',
		message: 'Choose operation:',
		choices: ['encrypt', 'decrypt', 'exit']
	});

	if (operation === 'exit') process.exit(0);

	const { algorithm } = await inquirer.prompt({
		type: 'list',
		name: 'algorithm',
		message: 'Select algorithm:',
		choices: ['shift', 'vigenere', 'oneTimePad', 'des']
	});

	const { text } = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: `Enter text to ${operation}:`
	});

	console.log(chalk.yellow('\nAlgorithm:'), algorithm);
	console.log(chalk.yellow('Operation:'), operation);
	console.log(chalk.yellow('Text:'), text);

	let result;
	const cryptoInstance = new CryptoAlgorithms();

	switch (algorithm) {
		case 'shift':
			console.log(chalk.yellow('\nShift Cipher'));
			result = await cryptoInstance.shift(text, operation);
			break;
		case 'vigenere':
			const { key: vigKey } = await inquirer.prompt({
				type: 'input',
				name: 'key',
				message: 'Enter key for Vigenere Cipher:'
			});
			result = CryptoAlgorithms.vigenere(text, vigKey, operation);
			break;
		case 'oneTimePad':
			const { key: otpKey } = await inquirer.prompt({
				type: 'input',
				name: 'key',
				message: 'Enter key (must be same length as text) for One-Time Pad:'
			});
			if (otpKey.length !== text.length) {
				console.log(chalk.red('Key length must match text length.'));
				return showMainMenu();
			}
			result = CryptoAlgorithms.oneTimePad(text, otpKey, operation);
			break;
		case 'des':
			const { key: desKey } = await inquirer.prompt({
				type: 'input',
				name: 'key',
				message: 'Enter 8-character key for DES:'
			});
			if (desKey.length < 8) {
				console.log(chalk.red('DES key must be at least 8 characters long.'));
				return showMainMenu();
			}
			result = CryptoAlgorithms.des(text, desKey, operation);
			break;
		default:
			throw new Error('Algorithm not implemented');
	}

	console.log(chalk.yellow('\nResult:'), result);
	await showMainMenu();
}

// ================= INITIALIZATION =================
console.clear();
showMainMenu().catch(error => {
	console.error(chalk.red('Fatal error:'), error);
	process.exit(1);
});
