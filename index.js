import chalk from 'chalk';
import figlet from 'figlet';
import crypto from 'crypto';
import inquirer from 'inquirer';

class CryptoAlgorithms {

	// Part 1
	// Algorithms
	// - Substitution Cipher
	// 	- Shift Cipher
	//  	- Assuming just for 26 characters in the alphabet
	// 	- Permutation Cipher
	// - Transposition Cipher
	// 	- Simple Transposition
	// 	- Double Transposition
	// - Vigenere Cipher

	// Part 2
	// Algorithms
	// - AES-128 - Advanced Encryption Standard with a 128-bit key length


	constructor() {
		// Define lowercase and uppercase alphabet arrays
		this.arr_lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
		this.arr_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

		// Vigenere Square table for encryption/decryption
		this.vigenereTable = Array(26).fill().map(() => Array(26));
		for (let i = 0; i < 26; i++) {
			for (let j = 0; j < 26; j++) {
				this.vigenereTable[i][j] = String.fromCharCode(((i + j) % 26) + 65);
			}
		}
	}

	// Shift Cipher //
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
			message: 'Enter shift value:',
			default: 3
		});

		if (operation === 'encrypt') {
			return this.shift_encrypt(text, shift);
		} else if (operation === 'decrypt') {
			return this.shift_decrypt(text, shift);
		}
	}
	// Shift Cipher //

	TRANSPOSITION
	42152

	// Permutation Cipher //
	permutation_encrypt(text, key, blockSize) {
		const keyArr = key.split(' ').map(Number);
		const textArr = text.split('');
		let result = '';

		for (let i = 0; i < textArr.length; i += blockSize) {
			let block = textArr.slice(i, i + blockSize);

			// Pad the block
			while (block.length < blockSize) {
				block.push(' ');
			}

			// Apply the permutation key to the block
			let permutedBlock = new Array(blockSize);
			keyArr.forEach((pos, index) => {
				permutedBlock[index] = block[pos - 1];
			});

			result += permutedBlock.join('');
		}

		return result;
	}

	permutation_decrypt(text, key, blockSize) {
		const keyArr = key.split(' ').map(Number);
		const textArr = text.split('');
		let result = '';

		for (let i = 0; i < textArr.length; i += blockSize) {
			let block = textArr.slice(i, i + blockSize);

			// Apply the inverse permutation to the block
			let permutedBlock = new Array(blockSize);
			keyArr.forEach((pos, index) => {
				permutedBlock[pos - 1] = block[index];
			});

			result += permutedBlock.join('');
		}

		return result;

	}

	async permutation(text, operation) {

		const { blockSize } = await inquirer.prompt({
			type: 'number',
			name: 'blockSize',
			message: 'Enter block size:',
			validate: value => Number.isInteger(value) && value > 0 ? true : 'Block size must be a positive integer.'
		});

		const { key } = await inquirer.prompt({
			type: 'input',
			name: 'key',
			message: `Enter permutation key (space-separated numbers 1 to ${blockSize}):`,
			validate: value => {
				const keyArr = value.split(' ').map(Number);
				const isValidLength = keyArr.length === blockSize;
				const isValidRange = keyArr.every(num => num >= 1 && num <= blockSize);
				const isUnique = new Set(keyArr).size === keyArr.length;
				return isValidLength && isValidRange && isUnique ? true : `Key must consist of ${blockSize} unique numbers between 1 and ${blockSize}.`;
			}
		});

		if (operation === 'encrypt') {
			return this.permutation_encrypt(text, key, blockSize);
		} else if (operation === 'decrypt') {
			return this.permutation_decrypt(text, key, blockSize);
		}
	}
	// Permutation Cipher //



	// Simple Transposition Cipher //
	async simpleTransposition(text, operation) {
		const { key } = await inquirer.prompt({
			type: 'input',
			name: 'key',
			message: `Enter key (transposition order, unique numbers from 1 to ${text.length}):`,
			default: Array.from({ length: text.length }, (_, i) => i + 1).join(' ')
		});

		const keyArr = key.split(' ').map(Number);
		const textArr = text.split('');

		// Validate key: Must be a permutation of 1 to n
		const sortedKey = [...keyArr].sort((a, b) => a - b);
		const expectedKey = Array.from({ length: text.length }, (_, i) => i + 1);

		if (JSON.stringify(sortedKey) !== JSON.stringify(expectedKey)) {
			console.error("Invalid key! It must be a unique permutation of numbers from 1 to", text.length);
			return;
		}

		const result = new Array(text.length);

		if (operation === 'encrypt') {
			keyArr.forEach((pos, i) => {
				result[i] = textArr[pos - 1];
			});
			return result.join('');

		} else if (operation === 'decrypt') {
			keyArr.forEach((pos, i) => {
				result[pos - 1] = textArr[i];
			});
			return result.join('');
		}
	} s
	// Simple Transposition Cipher //


	// Double Transposition Cipher //
	async doubleTransposition(text, operation) {
		const textLength = text.length;

		// Prompt for the first key
		const { key1 } = await inquirer.prompt({
			type: 'input',
			name: 'key1',
			message: `Enter first key (unique numbers from 1 to ${textLength}):`,
			default: Array.from({ length: textLength }, (_, i) => i + 1).join(' ')
		});

		// Prompt for the second key
		const { key2 } = await inquirer.prompt({
			type: 'input',
			name: 'key2',
			message: `Enter second key (unique numbers from 1 to ${textLength}):`,
			default: Array.from({ length: textLength }, (_, i) => i + 1).join(' ')
		});

		// Perform double transposition: encryption = two successive permutation encryptions,
		// decryption = two successive permutation decryptions in reverse order.
		if (operation === 'encrypt') {
			let first = this.permutation_encrypt(text, key1);
			return this.permutation_encrypt(first, key2);
		} else if (operation === 'decrypt') {
			let first = this.permutation_decrypt(text, key2);
			return this.permutation_decrypt(first, key1);
		} else {
			throw new Error("Invalid operation. Use 'encrypt' or 'decrypt'.");
		}
	}
	// Double Transposition Cipher //


	// Vigenère Cipher //
	vigenere_encrypt(text, key) {
		key = key.toUpperCase();
		let result = '';
		let j = 0; // key index counter

		for (let i = 0; i < text.length; i++) {
			let char = text[i];
			if (/[A-Za-z]/.test(char)) {
				let isUpper = (char === char.toUpperCase());
				let base = isUpper ? 65 : 97;
				let textIndex = char.charCodeAt(0) - base;
				let keyIndex = key[j % key.length].charCodeAt(0) - 65;
				let cipherIndex = (textIndex + keyIndex) % 26;
				result += String.fromCharCode(cipherIndex + base);
				j++;
			} else {
				result += char;
			}
		}
		return result;
	}

	vigenere_decrypt(text, key) {
		key = key.toUpperCase();
		let result = '';
		let j = 0; // key index counter

		for (let i = 0; i < text.length; i++) {
			let char = text[i];
			if (/[A-Za-z]/.test(char)) {
				let isUpper = (char === char.toUpperCase());
				let base = isUpper ? 65 : 97;
				let textIndex = char.charCodeAt(0) - base;
				let keyIndex = key[j % key.length].charCodeAt(0) - 65;
				let plainIndex = (textIndex - keyIndex + 26) % 26;
				result += String.fromCharCode(plainIndex + base);
				j++;
			} else {
				result += char;
			}
		}
		return result;
	}

	async vigenere(text, operation) {
		const { key } = await inquirer.prompt({
			type: 'input',
			name: 'key',
			message: 'Enter key (alphabetic characters only):'
		});

		if (operation === 'encrypt') {
			return this.vigenere_encrypt(text, key);
		} else if (operation === 'decrypt') {
			return this.vigenere_decrypt(text, key);
		} else {
			throw new Error("Invalid operation. Use 'encrypt' or 'decrypt'.");
		}
	}
	// Vigenère Cipher //


	// AES-128 //
	aes_encrypt(text, key, mode, iv) {
		const cipher = crypto.createCipheriv(`aes-128-${mode}`, key, iv);
		cipher.setAutoPadding(true);
		let encrypted = cipher.update(text, 'utf8', 'base64');
		encrypted += cipher.final('base64');
		return encrypted;
	}

	aes_decrypt(text, key, mode, iv) {
		const decipher = crypto.createDecipheriv(`aes-128-${mode}`, key, iv);
		decipher.setAutoPadding(true);
		let decrypted = decipher.update(text, 'base64', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	}

	async aes(text, operation) {
		const { mode } = await inquirer.prompt({
			type: 'list',
			name: 'mode',
			message: 'Select AES mode:',
			choices: [
				{ name: 'ECB - Electronic Codebook (Basic)', value: 'ecb' },
				{ name: 'CBC - Cipher Block Chaining (Recommended)', value: 'cbc' },
				{ name: 'CFB - Cipher Feedback', value: 'cfb' },
				{ name: 'OFB - Output Feedback', value: 'ofb' }
			]
		});

		const { key } = await inquirer.prompt({
			type: 'input',
			name: 'key',
			message: 'Enter key (16 characters):',
			validate: value => value.length === 16 ? true : 'Key must be exactly 16 characters long.',
			default: '1234567890123456'
		});

		if (operation === 'encrypt') {

			if (mode === 'ecb') {
				return this.aes_encrypt(text, key, mode, null);
			}

			let iv = crypto.randomBytes(16);

			if (mode === 'cbc' || mode === 'cfb' || mode === 'ofb') {
				return "Random IV = " + iv.toString('hex') + '   Cipher Text = ' + this.aes_encrypt(text, key, mode, iv);
			}

		} else if (operation === 'decrypt') {

			if (mode === 'ecb') {
				return this.aes_decrypt(text, key, mode, null);
			}

			// prompt for IV if not ECB mode
			const { ivHex } = await inquirer.prompt({
				type: 'input',
				name: 'ivHex',
				message: 'Enter IV (hexadecimal string):'
			});

			let iv = Buffer.from(ivHex, 'hex');

			if (mode === 'cbc' || mode === 'cfb' || mode === 'ofb') {
				return this.aes_decrypt(text, key, mode, iv);
			}

		} else {
			throw new Error("Invalid operation. Use 'encrypt' or 'decrypt'.");
		}

	}
	// AES-128 //

}

async function showMainMenu() {
	console.log(chalk.green(
		figlet.textSync('Crypto CLI', { horizontalLayout: 'full' })
	));

	console.log(chalk.blue('Created by Lucas.'));
	console.log(chalk.gray('Some fields have Gray default values, press Enter to accept.'));

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
		choices: ['Shift', 'Permutation', 'Simple Transposition', 'Double Transposition', 'Vigenere', 'AES-128']
	});

	const { text } = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: `Enter text to ${operation}:`,
		default: 'abcdefghijklmnopqrstuvwxyz'
	});

	// console.log(chalk.yellow('\nAlgorithm:'), algorithm);
	// console.log(chalk.yellow('Operation:'), operation);
	// console.log(chalk.yellow('Text:'), text);

	let result;
	const cryptoInstance = new CryptoAlgorithms();

	switch (algorithm) {
		case 'Shift':
			// console.log(chalk.yellow('\nShift Cipher'));
			result = await cryptoInstance.shift(text, operation);
			break;
		case 'Permutation':
			// console.log(chalk.yellow('\nPermutation Cipher'));
			result = await cryptoInstance.permutation(text, operation);
			break;
		case 'Simple Transposition':
			// console.log(chalk.yellow('\nSimple Transposition Cipher'));
			result = await cryptoInstance.simpleTransposition(text, operation);
			break;
		case 'Double Transposition':
			// console.log(chalk.yellow('\nDouble Transposition Cipher'));
			result = await cryptoInstance.doubleTransposition(text, operation);
			break;
		case 'Vigenere':
			// console.log(chalk.yellow('\nVigenere Cipher'));
			result = await cryptoInstance.vigenere(text, operation);
			break;
		case 'AES-128':
			// console.log(chalk.yellow('\nAES-128'));
			result = await cryptoInstance.aes(text, operation);
			break;
		default:
			throw new Error('Algorithm not implemented');
	}

	console.log(chalk.yellow('\nResult:'), result);
	console.log('');

	await inquirer.prompt({
		type: 'input',
		name: 'continue',
		message: 'Press Enter to continue...'
	});

	await showMainMenu();
}

console.clear();
showMainMenu().catch(error => {
	// debugging stuff
	console.error(chalk.red('Fatal error:'), error);
});
