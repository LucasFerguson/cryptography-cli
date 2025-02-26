import chalk from 'chalk';
import figlet from 'figlet';
import crypto from 'crypto';
import inquirer from 'inquirer';
import { console } from 'inspector';

// import fs from 'fs/promises';
// import path from 'path';
// import { exec } from 'child_process';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

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


	arr_lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
	arr_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	shift_encrypt(text, shift) {
		shift = shift % 26;
		return text.split('').map(char => {
			if (arr_lower.includes(char)) {
				return arr_lower[(arr_lower.indexOf(char) + shift) % 26];
			} else if (arr_upper.includes(char)) {
				return arr_upper[(arr_upper.indexOf(char) + shift) % 26];
			}
			return char;
		}).join('');
	}

	shift_decrypt(text, shift) {
		shift = shift % 26;
		return text.split('').map(char => {
			if (arr_lower.includes(char)) {
				return arr_lower[(arr_lower.indexOf(char) - shift + 26) % 26];
			} else if (arr_upper.includes(char)) {
				return arr_upper[(arr_upper.indexOf(char) - shift + 26) % 26];
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
			return shift_encrypt(text, shift);
		} else if (operation === 'decrypt') {
			return shift_decrypt(text, shift);
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
			throw new Error('Text and key must be same length');
		}
		return text.split('').map((char, i) => {
			return String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i));
		}).join('');
	}

	static des(text, key, operation) {
		const cipher = crypto.createCipheriv('des-ecb', key.slice(0, 8), null);
		const decipher = crypto.createDecipheriv('des-ecb', key.slice(0, 8), null);

		if (operation === 'encrypt') {
			return Buffer.concat([cipher.update(text), cipher.final()]).toString('hex');
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

	// if (operation === 'exit') process.exit(0);

	const { algorithm } = await inquirer.prompt({
		type: 'list',
		name: 'algorithm',
		message: 'Select algorithm:',
		choices: ['shift', 'vigenere', 'oneTimePad', 'des']
	});

	// print select algorithm
	await console.log(chalk.yellow('\nAlgorithm:'), algorithm);
	// print select operation
	await console.log(chalk.yellow('Operation:'), operation);
	// print text
	await console.log(chalk.yellow('Text:'), text);


	let result_print;

	const { text } = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: 'Enter text to ' + operation + ':'
	});
	// print select algorithm
	console.log(chalk.yellow('\nAlgorithm:'), algorithm);
	// print select operation
	console.log(chalk.yellow('Operation:'), operation);
	// print text
	console.log(chalk.yellow('Text:'), text);


	switch (algorithm) {
		case 'shift':
			console.log(chalk.yellow('\nShift Cipher'));
			// result_print = await CryptoAlgorithms.shift(text, operation);
			break;
		// case 'vigenere':
		// 	result_print = await CryptoAlgorithms.vigenere(text, key, operation.toLowerCase());
		// 	break;
		// case 'oneTimePad':
		// 	result_print = await CryptoAlgorithms.oneTimePad(text, key, operation.toLowerCase());
		// 	break;
		// case 'des':
		// 	result_print = await CryptoAlgorithms.des(text, key, operation.toLowerCase());
		// 	break;
		default:
			throw new Error('Algorithm not implemented');
	}

	console.log(chalk.yellow('\nResult:'), result_print);
	await showMainMenu();
}

// ================= INITIALIZATION =================
console.clear();
showMainMenu().catch(error => {
	console.error(chalk.red('Fatal error:'), error);
	process.exit(1);
});
