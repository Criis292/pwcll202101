const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola soy del ITGAM',
  });
};

const about = (req, res) => {
  res.render('home/about', { appVersion: '0.0.1' });
};
export default {
  index,
  greeting,
  about,
};
