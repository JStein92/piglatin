
    The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
        Example Input: 3
        Example Output: 3

    The program adds "ay" to single-letter words beginning with a vowel.
        Example Input: i
        Example Output: iay

For words beginning with a vowel, add "way" to the end.
				Example Input: Out
        Example Output: Outway

For words beginning with "y", treat "y" as a consonant.
				Example Input: Yes
        Example Output: esyay

For words beginning with one or more consonants, the program moves all of the first consecutive consonants to the end, and adds "ay".
				Example Input: That
        Example Output: atthay
        
