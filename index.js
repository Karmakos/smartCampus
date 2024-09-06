import express from 'express';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

//setting up the public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directory = path.join(__dirname, 'public');

app.use(express.static(directory));

//configuring the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routes for Handlers
app.get('/', (req, res) =>
	{
		res.render('pages/public/home');
	});
app.get('/about-us', (req, res) =>
{
	res.render("pages/public/about-us");

});
app.get('/privacy-policy', (req, res) =>{
	res.render("pages/public/privacy-policy");

});
app.get('/tou', (req, res) =>
{
	res.render("pages/public/tou");

});
app.get('/donate', (req, res) =>
{
	res.render("pages/public/donate.ejs");
})





app.listen(port, () =>
	{
		console.log(`App running at port ${port}`);
	})
