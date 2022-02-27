const express = require('express');
const router = express.Router();
const fs = require('fs');

const md = require('markdown-it')()
    .use(require('markdown-it-container'), 'header')
    .use(require('markdown-it-container'), 'post');
    

const blogpath = 'public/blogs/';

async function loadBlog(blogTitle) {
    const result = {};

    const data = fs.readFileSync(blogpath + blogTitle + '.md', 'utf-8');
    if (data != null) result.hasContent = true;
    result.blogpost = md.render(data);

    return result;
}

router.get('/', (req, res, next) => {
    res.render('blog');
});

router.get('/:blogTitle', (req, res, next) => {
    const blogTitle = req.params.blogTitle;
    loadBlog(blogTitle)
        .then((result) => {
            res.render('blog', result);
        }).catch(next);
});

module.exports = router;