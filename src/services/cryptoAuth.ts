// Minimal Web Crypto helpers: PBKDF2 password hashing + AES-GCM encrypt/decrypt
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function randBytes(len = 16) {
  const b = new Uint8Array(len);
  crypto.getRandomValues(b);
  return b;
}

function bufToBase64(buf: ArrayBuffer | Uint8Array) {
  const bytes = new Uint8Array(buf);
  let str = '';
  for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
  return btoa(str);
}

function base64ToBuf(b64: string) {
  const str = atob(b64);
  const buf = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) buf[i] = str.charCodeAt(i);
  return buf;
}

async function deriveBits(password: string, salt: ArrayBuffer | ArrayBufferView, iterations = 150_000, len = 256) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    keyMaterial,
    len
  );
  return new Uint8Array(bits);
}


function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let res = 0;
  for (let i = 0; i < a.length; i++) res |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return res === 0;
}

export async function createPasswordRecord(password: string) {
  const salt = randBytes(16);
  const hashBytes = await deriveBits(password, salt, 150_000, 256);
  return {
    salt: bufToBase64(salt),
    iterations: 150_000,
    hash: bufToBase64(hashBytes),
  };
}

export async function verifyPassword(password: string, record: { salt: string; iterations: number; hash: string }) {
  const saltBuf = base64ToBuf(record.salt);
  const hashBytes = await deriveBits(password, saltBuf, record.iterations, 256);
  return constantTimeEqual(bufToBase64(hashBytes), record.hash);
}
