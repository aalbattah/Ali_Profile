// Email obfuscation utility to protect against spam bots

/**
 * Encodes an email address using base64 and character entity encoding
 */
export const encodeEmail = (email: string): string => {
  // First encode with base64
  const base64 = btoa(email);
  // Then reverse the string for extra obfuscation
  return base64.split('').reverse().join('');
};

/**
 * Decodes an obfuscated email address
 */
export const decodeEmail = (encoded: string): string => {
  try {
    // Reverse the string back
    const reversed = encoded.split('').reverse().join('');
    // Decode from base64
    return atob(reversed);
  } catch (error) {
    console.error('Error decoding email:', error);
    return '';
  }
};

// For use in components - decodes email on client side
export const getDecodedEmail = (encodedEmail: string): string => {
  if (typeof window === 'undefined') {
    // Server-side: use Node.js Buffer if available, otherwise return empty
    try {
      const reversed = encodedEmail.split('').reverse().join('');
      return Buffer.from(reversed, 'base64').toString();
    } catch {
      return '';
    }
  }
  return decodeEmail(encodedEmail);
};

