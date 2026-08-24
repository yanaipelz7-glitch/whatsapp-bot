const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('סרוק את הברקוד הזה בווטסאפ:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('הבוט מוכן ומחובר בהצלחה!');
});

client.on('message', message => {
    if (message.body === 'היי') {
        message.reply('היי! הבוט עובד מצוין.');
    }
});

client.initialize();
