const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const fs = require('fs');
const app = express();
const port = 3001;

// Настройка multer для сохранения файла
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

// Токен вашего бота и ID чата
const telegramToken = '6948404678:AAGwfQN5Hh7QAmv8K4W22zmcVnAFpJvmtnw';
const chatId = '-4109110854';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint для отправки данных формы и файла в Telegram
app.post('/send-to-telegram', upload.single('file'), async (req, res) => {
  const { email, phone, name } = req.body;
  const file = req.file;

  // Отправляем текстовое сообщение в Telegram
  const message = `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;
  await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  });

  // Отправляем файл, если он есть
  if (file) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('document', fs.createReadStream(file.path), file.originalname);

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendDocument`, {
      method: 'POST',
      body: formData
    });
  }

  res.send('Форма и файл (если есть) отправлены в Telegram');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
