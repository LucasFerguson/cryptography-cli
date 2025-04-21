---
date-created: 2025-03-21T11:11:15
date-modified: 2025-03-25T19:15:20
last-edited-by: laptop
title: Assignment 3 CS 458
aliases: 
tags:
  - assignment/homework
folder: "[[CS458 Information Security]]"
class: "[[CS458 Information Security]]"
---
Class:: [[CS458 Information Security]]
Started: [[2025-03-21]]
#assignment/homework 

**Fun Assignment Stats** (Out of 10) 
- Difficulty:: 7
- Mood:: 6
- Effort-Level:: 10
- Grade:: %
- Completion-Time:: 3hr 00min
- Value:: 5
- Clarity:: 8
- Relevance:: 4
## Instructions
*HW description provided by professor...*

See PDF

# Final Answers

CS 458
Spring 2025: Assignment 3
Due in Canvas Assignment Tuesday, March 25th, 2025 by 11:59 pm

## Task 1: True/False Questions
1. **True**/False: Symmetric cryptography uses the same key for both encryption and decryption.
2. True/**False**: The security of a symmetric encryption system depends entirely on the secrecy of the encryption algorithm.
3. **True**/False: Stream ciphers encrypt data one bit or byte at a time, while block ciphers encrypt fixed-size blocks of data.
4. True/**False**: In a Feistel cipher, encryption and decryption processes are different.
5. True/**False**: The Advanced Encryption Standard (AES) is based on the Feistel structure.
6. True/**False**: The Electronic Codebook (ECB) mode is the most secure mode of operation for a block cipher.
7. **True**/False: Confusion and diffusion are the two main design principles of a secure block cipher.
8. True/**False**: The Data Encryption Standard (DES) uses a 128-bit key.
9. **True**/False: The Avalanche effect ensures that small changes in input produce large changes in output.
10. **True**/False: The Meet-in-the-Middle attack significantly weakens the security of Double DES.
11. True/**False**: AES uses a fixed number of rounds regardless of key size.
12. **True**/False: The Cipher Block Chaining (CBC) mode requires an initialization vector (IV) for encryption.
13. **True**/False: The Counter (CTR) mode of operation allows block ciphers to behave like stream ciphers.
14. **True**/False: Key distribution is a major challenge in symmetric cryptography.
15. **True**/False: The security of the DES algorithm was criticized due to its short key length of 56 bits.

## Task 2: Multiple Choice Questions

16. Which of the following is NOT a requirement for secure symmetric encryption?
	A) A strong encryption algorithm
	B) Secure key exchange
	**C) A public key infrastructure**
	D) Confidentiality of the secret key

17. What is the primary weakness of the ECB mode?
	A) It encrypts data in multiple rounds
	**B) Identical plaintext blocks produce identical ciphertext blocks**
	C) It requires an additional secret key for each block
	D) It uses XOR for encryption

18. What is the purpose of the initialization vector (IV) in CBC mode?
	**A) To ensure identical plaintexts produce different ciphertexts**
	B) To serve as a secondary encryption key
	C) To perform key expansion
	D) To allow for parallel encryption

19. Which of the following is a feature of stream ciphers?
	A) They encrypt data in fixed-size blocks
	B) They are based on the Feistel network
	**C) They encrypt data bit-by-bit or byte-by-byte**
	D) They use multiple rounds of encryption

20. What is the main advantage of using the Feistel structure in encryption algorithms?
	**A) It allows decryption to use the same structure as encryption**
	B) It increases the speed of key exchange
	C) It eliminates the need for subkeys
	D) It ensures zero information leakage

21. How many rounds does AES-256 use in encryption?
	A) 10
	B) 12
	**C) 14**
	D) 16

22. What is a major disadvantage of DES?
	A) It is too slow for modern applications
	**B) Its key length is too short for strong security**
	C) It requires asymmetric keys
	D) It cannot be used in block cipher modes

23. Which attack is particularly effective against Double DES?
	A) Brute-force attack
	B) Differential cryptanalysis
	**C) Meet-in-the-Middle attack**
	D) Chosen-plaintext attack

24. Why was Triple DES (3DES) developed?
	A) To replace DES with an algorithm that is 3 times faster
	**B) To extend the key length of DES and improve security**
	C) To eliminate the need for key exchange
	D) To make encryption decryption independent

25. What is the primary function of the S-boxes in DES?
	A) They perform bitwise permutations
	**B) They introduce non-linearity to enhance security**
	C) They generate key schedules
	D) They increase the encryption speed

26. Which of the following is a key feature of AES compared to DES?
	A) AES uses a Feistel structure
	B) AES has a fixed key size of 128 bits
	**C) AES allows multiple key sizes and has no known vulnerabilities**
	D) AES uses a single encryption round

27. What is the primary role of the MixColumns step in AES?
	A) It substitutes bytes using an S-box
	**B) It ensures diffusion by mixing input bytes across columns**
	C) It expands the encryption key
	D) It performs permutation-only operations

28. What is the main reason why AES is preferred over DES today?
	A) AES is more computationally expensive
	**B) AES has a significantly larger key space**
	C) AES was developed by IBM
	D) AES is based on the Feistel network

29. Which mode of operation is best suited for encrypting large files while allowing random access to data?
	A) ECB
	B) CBC
	**C) CTR**
	D) OFB

30. What is the primary challenge in symmetric key cryptography?
	A) Encrypting data securely
	B) Generating strong keys
	**C) Distributing the secret key securely**
	D) Preventing key reuse

## Task3: Coding
Objective: The objective of this assignment is to implement a command-line program in a language of
your choice that allows users to perform encryption and decryption using various techniques, including
substitution ciphers, transposition ciphers, different encryption algorithms, and modes.
Program Features:


Task3: Coding Objective: The objective of this assignment is to implement a command-line program in a language of your choice that allows users to perform encryption and decryption using various techniques, including substitution ciphers, transposition ciphers, different encryption algorithms, and modes. 
Program Features:
1. The program should display a list of options for encryption techniques, including:
	1. • Substitution cipher 
		1. — Shift Cipher
		2. — Permutation Cipher 
	2. • Transposition ciphers 
		1. — Simple Transposition 
		2. — Double Transposition 
	3. • Vigenere Cipher
	4. • Different encryption algorithms (e.g., AES-128, DES, 3DES)
		1. [AES Explained (Advanced Encryption Standard) - Computerphile - YouTube](https://www.youtube.com/watch?v=O4xNJsjtN6E)
	5. • Different encryption modes (e.g., ECB, CBC, CFB, OFB) 

2. Based on the user's selection, prompt the user to enter a message (plaintext) to be encrypted. 
3. The size of the message should be greater than the maximum size of the block used by the chosen encryption algorithm. 
4. After entering the message, allow the user to choose whether to enter encryption key or use a default key. 
5. Perform the encryption using the selected technique and encryption key. 
6. Display the encrypted message (ciphertext). 
7. Provide an option for decryption, where the user can input the ciphertext and select the appropriate decryption technique based on the encryption method used. 
8. If decryption is selected, prompt the user to enter the decryption key or use the same key as encryp-tion by default. 
9. Perform decryption using the selected technique and decryption key. 
10. Display the decrypted message (plaintext). 



Submission:
Submit one single .zip file to Canvas, including:
31. Source code of your program for Task 3.
32. One single .pdf file containing:
- Your answers to Task 1 and Task 2.
- And a brief report for Task 3, describing:
- Functionality of the program.
- Usage instructions.
- Observations or challenges encountered during the implementation.
- Screenshots demonstrating the encryption and decryption processes using different techniques.
4