import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const today = new Date();
  let day = today.getDay();

  //   console.log(day);

  let type = 'a weekday';
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = 'the weekend';
    adv = "it's time to rest";
  }

  res.render('index.ejs', {
    dayType: type,
    advice: adv,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
