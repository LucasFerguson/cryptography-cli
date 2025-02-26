import string
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad, unpad

# ===== Caesar Cipher =====
def caesar_cipher(plaintext: str, shift_amount: int, operation: str = 'encrypt') -> str:
	processed_chars = []
	for character in plaintext:
		if character.isupper():
			base_ordinal = ord('A')
		elif character.islower():
			base_ordinal = ord('a')
		else:
			processed_chars.append(character)
			continue
	
		shift_direction = shift_amount if operation == 'encrypt' else -shift_amount
		
		new_position = (ord(character) - base_ordinal + shift_direction) % 26
		
		shifted_char = chr(new_position + base_ordinal)
		processed_chars.append(shifted_char)
	return ''.join(processed_chars)

# ===== Vigenère Cipher =====
def vigenere_cipher(message: str, cipher_key: str, operation: str = 'encrypt') -> str:
	normalized_key = cipher_key.upper()
	key_length = len(normalized_key)
	processed_chars = []
	current_key_index = 0
	
	for original_char in message:
		if not original_char.isalpha():
			processed_chars.append(original_char)
			continue
			
		key_shift_value = ord(normalized_key[current_key_index % key_length]) - ord('A')
		if operation == 'decrypt':
			key_shift_value = -key_shift_value
			
		processed_char = caesar_cipher(original_char, key_shift_value, operation)
		processed_chars.append(processed_char)
		current_key_index += 1
		
	return ''.join(processed_chars)

# ===== One-Time Pad (XOR version) =====
def one_time_pad_encrypt(plaintext: str, encryption_key: str) -> str:
	if len(encryption_key) != len(plaintext):
		raise ValueError("Encryption key must match plaintext length")
	return ''.join(chr(ord(plaintext_char) ^ ord(key_char)) 
				 for plaintext_char, key_char in zip(plaintext, encryption_key))

# ===== DES Encryption =====
def des_encrypt(plaintext: str, des_key: str) -> bytes:
	des_cipher = DES.new(des_key.encode(), DES.MODE_ECB)
	padded_data = pad(plaintext.encode(), DES.block_size)
	return des_cipher.encrypt(padded_data)

def des_decrypt(ciphertext: bytes, des_key: str) -> str:
	des_cipher = DES.new(des_key.encode(), DES.MODE_ECB)
	decrypted_data = des_cipher.decrypt(ciphertext)
	return unpad(decrypted_data, DES.block_size).decode()

# ===== User Interface =====
if __name__ == "__main__":
	while True:
		print("\nSelect Encryption Method:")
		print("1. Caesar Cipher\n2. Vigenère Cipher\n3. One-Time Pad\n4. DES\n5. Exit")
		user_choice = input("Enter your selection: ")
		
		if user_choice == '1':
			input_text = input("Enter text to process: ")
			shift_value = int(input("Enter shift value (0-25): "))
			operation_mode = input("Choose operation [encrypt/decrypt]: ").lower()[0]
			processed_text = caesar_cipher(input_text, shift_value, 
										 'decrypt' if operation_mode == 'd' else 'encrypt')
			
		elif user_choice == '2':
			input_text = input("Enter text to process: ")
			cipher_key = input("Enter encryption key: ")
			operation_mode = input("Choose operation [encrypt/decrypt]: ").lower()[0]
			processed_text = vigenere_cipher(input_text, cipher_key, 
										   'decrypt' if operation_mode == 'd' else 'encrypt')
			
		elif user_choice == '3':
			input_text = input("Enter text to encrypt: ")
			pad_key = input("Enter one-time key (exact length required): ")
			encrypted_text = one_time_pad_encrypt(input_text, pad_key)
			print(f"Encrypted Result: {encrypted_text}")
			print(f"Decryption Test: {one_time_pad_encrypt(encrypted_text, pad_key)}")
			continue
			
		elif user_choice == '4':
			input_text = input("Enter text: ")
			des_key = input("8-character DES key: ").ljust(8)[:8]
			operation_mode = input("Choose operation [encrypt/decrypt]: ").lower()[0]
			
			if operation_mode == 'e':
				encryption_result = des_encrypt(input_text, des_key).hex()
			else:
				ciphertext_hex = input_text
				decryption_result = des_decrypt(bytes.fromhex(ciphertext_hex), des_key)
				processed_text = decryption_result
				
		elif user_choice == '5':
			print("Exiting program...")
			break
			
		else:
			print("Invalid selection, please try again")
			continue
			
		print(f"\nProcessing Result: {processed_text}")
