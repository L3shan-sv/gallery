const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let upload = require('./upload');
let Image = require('../models/images');

// GET / - list all photos
router.get('/', async (req, res) => {
    try {
        const images = await Image.find({});
        res.render('index', { images, msg: req.query.msg });
    } catch (err) {
        console.error('Error fetching images:', err);
        res.status(500).send('Internal Server Error');
    }
});

// POST /upload - upload a new image
router.post('/upload', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.redirect(`/?msg=${err}`);
        }
        if (!req.file) {
            return res.redirect('/?msg=Error: No file selected!');
        }

        try {
            const newImage = new Image({
                name: req.file.filename,
                size: req.file.size,
                path: 'images/' + req.file.filename,
            });

            await newImage.save();
            res.redirect('/?msg=File uploaded successfully');
        } catch (saveErr) {
            console.error('Error saving image:', saveErr);
            res.redirect('/?msg=Error saving image');
        }
    });
});

module.exports = router;
