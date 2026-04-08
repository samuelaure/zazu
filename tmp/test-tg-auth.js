const crypto = require('crypto');

function validateTelegramInitData(initData, botToken) {
  if (!initData || !botToken) return false;

  const urlParams = new URLSearchParams(initData);
  const hash = urlParams.get('hash');
  urlParams.delete('hash');

  const dataCheckString = Array.from(urlParams.keys())
    .sort()
    .map((key) => `${key}=${urlParams.get(key)}`)
    .join('\n');

  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  const calculatedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  console.log('Data Check String:', dataCheckString);
  console.log('Calculated Hash:', calculatedHash);
  console.log('Provided Hash:', hash);

  return calculatedHash === hash;
}

// Mock Test
const mockBotToken = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
const mockData = 'auth_date=1616617000\nquery_id=AAHdF6IQAAAAAN0XohD944Dj\nuser={"id":123456789,"first_name":"Test","last_name":"User","username":"testuser","language_code":"en"}';
const sortedData = mockData.split('\n').sort().join('\n');

const secretKey = crypto.createHmac('sha256', 'WebAppData').update(mockBotToken).digest();
const hash = crypto.createHmac('sha256', secretKey).update(sortedData).digest('hex');

const fullInitData = sortedData.split('\n').join('&') + '&hash=' + hash;

console.log('--- TESTING VALIDATION ---');
const result = validateTelegramInitData(fullInitData, mockBotToken);
console.log('Result:', result ? '✅ PASS' : '❌ FAIL');

if (!result) process.exit(1);
