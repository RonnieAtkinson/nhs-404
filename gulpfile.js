const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));

const logMessage = (message) => {
    console.log(message);
}

const compileSass = (style, cb) => {
    return src('./src/stylesheets/main.scss')
        .pipe(sass({ outputStyle: style }).on('error', sass.logError))
        .pipe(dest('./public/css'))
};

exports.compileSass = () => {
    watch('./src/**/*.scss', compileSass('nested'));
}

// const build = series()

// exports.build = series(
//     async () => compileSass('compressed')
// );

exports.build = async () => {
    await logMessage('Starting compileSass...');
    await compileSass('compressed');
}