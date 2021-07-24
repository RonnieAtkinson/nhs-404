exports.get404 = (req, res, next) => {
    res.status(404).render('./error/404', {
        metaTitle: 'Page not found' + res.locals.metaTitleSuffix
    });
};