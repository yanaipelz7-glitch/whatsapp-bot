const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode =quire('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome-stable',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    }
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
