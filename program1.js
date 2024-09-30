def roman_to_int(s: str) -> int:
    # Mapping of Roman numerals to their integer values
    roman_map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    total = 0
    length = len(s)
    
    for i in range(length):
        value = roman_map[s[i]]
        
        # If this is not the last character and the next character is larger, we subtract
        if i < length - 1 and roman_map[s[i]] < roman_map[s[i + 1]]:
            total -= value
        else:
            total += value
            
    return total