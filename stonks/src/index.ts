import axios from 'axios';
import cheerio from 'cheerio';

axios
  .get(
    'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1',
  )
  .then(res => {
    const data = res.data;
    const $ = cheerio.load(data);
    const statsTable = $('.statsTableContainer > tr');
    console.log(statsTable.length);
  });
