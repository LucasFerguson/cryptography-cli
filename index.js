import chalk from 'chalk';
import figlet from 'figlet';
import crypto from 'crypto';
import inquirer from 'inquirer';

class CryptoAlgorithms {

	// Algorithms
	// - Substitution Cipher
	// 	- Shift Cipher
	//  	- Assuming just for 26 characters in the alphabet
	// 	- Permutation Cipher
	// - Transposition Cipher
	// 	- Simple Transposition
	// 	- Double Transposition
	// - Vigenere Cipher

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

		// Process each block
		for (let i = 0; i < textArr.length; i += blockSize) {
			let block = textArr.slice(i, i + blockSize);

			// Pad the block if it's shorter than the block size
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

		// Process each block
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


	// Vigenere Cipher //
	vigenere_encrypt(text, key) {
		let keyIndex = 0;
		return text.split('').map(char => {
			if (this.arr_lower.includes(char)) {
				const result = this.vigenereTable[this.arr_lower.indexOf(char)][this.arr_lower.indexOf(key[keyIndex])];
				keyIndex = (keyIndex + 1) % key.length;
				return result;
			} else if (this.arr_upper.includes(char)) {
				const result = this.vigenereTable[this.arr_upper.indexOf(char)][this.arr_lower.indexOf(key[keyIndex])];
				keyIndex = (keyIndex + 1) % key.length;
				return result;
			}
			return char;
		}).join('');
	}

	vigenere_decrypt(text, key) {
		let keyIndex = 0;
		return text.split('').map(char => {
			if (this.arr_lower.includes(char)) {
				const result = this.vigenereTable[this.arr_lower.indexOf(key[keyIndex])].indexOf(char);
				keyIndex = (keyIndex + 1) % key.length;
				return this.arr_lower[result];
			} else if (this.arr_upper.includes(char)) {
				const result = this.vigenereTable[this.arr_lower.indexOf(key[keyIndex])].indexOf(char);
				keyIndex = (keyIndex + 1) % key.length;
				return this.arr_upper[result];
			}
			return char;
		}).join('');
	}

	async vigenere(text, operation) {
		const { key } = await inquirer.prompt({
			type: 'input',
			name: 'key',
			message: 'Enter key:'
		});

		if (operation === 'encrypt') {
			return this.vigenere_encrypt(text, key);
		} else if (operation === 'decrypt') {
			return this.vigenere_decrypt(text, key);
		}
	}
	// Vigenere Cipher //
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
		choices: ['Shift', 'Permutation', 'Simple Transposition', 'Double Transposition', 'Vigenere']
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
