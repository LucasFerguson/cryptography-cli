---
date-created: 2025-02-25T12:21:19
date-modified: 2025-02-26T00:06:13
last-edited-by: laptop
title: Assignment 2 CS 458
aliases: 
tags: 
---
Class:: [[CS458 Information Security]]

# Assignment
CS 458
Spring 2025: Assignment 2
Due in Canvas Assignment Tuesday, Feb 25th, 2025 by 11:59 pm
## Task 1: True/False Questions
1. Cryptanalysis is the process of creating secret messages to protect information. (True / **False**)
2. A symmetric cryptosystem uses the same key for both encryption and decryption.(**True** / False)
3. Kerckhoffs' Principle states that the security of a cryptosystem should rely on the secrecy of the algorithm rather than the key. (True / **False**)
4. In a transposition cipher, letters in the plaintext are replaced by other letters. (True / **False**)
5. A known plaintext attack requires the attacker to have access to both plaintext and corresponding ciphertext pairs. (**True** / False)
6. The Vigenère cipher is a polyalphabetic substitution cipher. (**True** / False)
7. The one-time pad provides perfect secrecy if the key is truly random and used only once. (**True** / False)
8. A brute-force attack on a cipher involves trying all possible keys until the correct one is found. (**True** / False)
9. Frequency analysis is ineffective against monoalphabetic substitution ciphers. (True / **False**)
10. A block cipher encrypts one bit at a time, similar to a stream cipher. (True / **False**)
11. The main weakness of the one-time pad is that it requires the key to be the same length as the message. (**True** / False)
12. A chosen ciphertext attack allows an attacker to select ciphertexts and obtain their corresponding plaintexts. (**True** / False)
13. The shift cipher is a type of transposition cipher. (**True** / False)
14. Computationally secure encryption means that an attacker cannot break the encryption within a practical time frame. (**True** / False)
15. The Vernam cipher is another name for the Vigenère cipher. (True / **False**)



## Task 2: Multiple Choice Questions
1. What is the primary goal of cryptography?
	a) To create unbreakable ciphers
	b) **To enable secure communication over insecure channels**
	c) To make cryptanalysis easier
	d) To prevent all types of cyber attacks
2. Which of the following is NOT a type of classical cryptographic cipher?
	a) Substitution Cipher
	b) Transposition Cipher
	c) **Hashing Cipher**
	d) Product Cipher
3. Which of the following statements about asymmetric cryptography is true?
	a) It uses the same key for encryption and decryption
	b) It is also known as private-key cryptography
	c) **It requires a pair of public and private keys**
	d) It is faster than symmetric cryptography
4. In a Caesar cipher with a right shift of 3, what does ‘D’ become in ciphertext?
	a) A
	b) E
	c) **G**
	d) F
5. Which of the following is an example of a polyalphabetic cipher?
	a) Caesar Cipher
	b) Transposition Cipher
	c) **Vigenère Cipher**
	d) XOR Cipher
6. In a known plaintext attack, the attacker has access to:
	a) Only ciphertext
	b) Only plaintext
	c) **Pairs of plaintext and corresponding ciphertext**
	d) The encryption key
7. What does a brute-force attack on a cipher involve?
	a) Exploiting weaknesses in the encryption algorithm
	b) **Trying all possible keys until the correct one is found**
	c) Using statistical analysis of letter frequencies
	d) Obtaining plaintexts through social engineering
8. Which of the following best describes Kerckhoffs' Principle?
	a) The security of a cryptosystem should depend on keeping the algorithm secret
	b) **The security of a cryptosystem should depend only on the secrecy of the key**
	c) Cryptographic keys should be changed frequently
	d) A strong cipher is one that no one can understand
9. Which attack scenario is the most powerful?
	a) Ciphertext-only attack
	b) Known plaintext attack
	c) Chosen plaintext attack
	d) **Adaptive chosen ciphertext attack**
10. What property of a cipher ensures that changing one letter in the plaintext affects many letters in the ciphertext?
	a) Confusion
	b) **Diffusion**
	c) Substitution
	d) Permutation
11. Which cryptographic technique involves rearranging the order of plaintext characters?
	a) Substitution
	b) **Transposition**
	c) Polygraphic substitution
	d) Homophonic encryption
12. What is the main disadvantage of the one-time pad?
	a) It is not secure
	b) It requires the use of prime numbers
	c) **The key must be as long as the message**
	d) It can only be used with block ciphers
13. Which of the following statements about frequency analysis is FALSE?
	a) **It is effective against polyalphabetic ciphers**
	b) It exploits the statistical properties of language
	c) It can be used to break monoalphabetic ciphers
	d) It is ineffective against the one-time pad
14. Which cryptosystem is theoretically unbreakable if implemented correctly?
	a) Caesar Cipher
	b) Vigenère Cipher
	c) **One-time pad**
	d) DES
15. What does an adaptive chosen plaintext attack allow an attacker to do?
	a) Obtain plaintexts corresponding to arbitrary ciphertexts
	**b) Choose plaintexts one at a time and analyze their ciphertexts**
	c) Modify ciphertexts to change their meaning
	d) Recover encryption keys instantly

## Task3: Coding
Objective: The objective of this assignment is to implement a command-line program in a language of
your choice that allows users to perform encryption and decryption using various techniques, including
substitution ciphers, transposition ciphers, different encryption algorithms, and modes.
Program Features:
Submission:
Submit one single .zip file to Canvas, including:
1. Source code of your program for Task 3.
2. One single .pdf file containing:
- Your answers to Task 1 and Task 2.
- And a brief report for Task 3, describing:
- Functionality of the program.
- Usage instructions.
- Observations or challenges encountered during the implementation.
- Screenshots demonstrating the encryption and decryption processes using different techniques.


# My notes

Task3: Coding a CLI for encryption
- Languages I could use
	- C#
		- Haven't used in a long time
	- [[JavaScript]]
		- Kinda silly to make a CLI, altho it would be fun to have it run in the browser
	- [[C++]]
		- This would probably make the most sense, but I surprisingly haven't done it b4
	- [[Python]]
		- i have build some [[Python]] clis

Algorithms
- Substitution Cipher
	- Shift Cipher
	- Permutation Cipher
- Transposition Cipher
	- Simple Transposition
	- Double Transposition
- Vigenere Cipher
