const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file statis (HTML, CSS, JS client-side) dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Menyajikan file data soal dari folder 'data'
app.use('/data', express.static(path.join(__dirname, 'data')));


// Rute khusus untuk halaman kuis
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'));
});
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});
app.get('/11', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '11.html'));
});
app.get('/12', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '12.html'));
});
app.get('/13', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '13.html'));
});
app.get('/14', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '14.html'));
});
app.get('/15', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '15.html'));
});
app.get('/16', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '16.html'));
});
app.get('/17', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '17.html'));
});
app.get('/18', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '18.html'));
});
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'info.html'));
});
// Middleware untuk menangani 404 (halaman tidak ditemukan)
app.use((req, res) => {
    res.redirect('/404');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});