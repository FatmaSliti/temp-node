const path = require('path');
// console.log(path.sep); //  \

const filePath = path.join('/modules', 'content', 'subfolder', 'text.txt')
// console.log(filePath); // \modules\content\subfolder\text.txt

const base = path.basename(filePath)
// console.log(base);

const absolute = path.resolve(__dirname, 'modules', 'content', 'subfolder', 'text.txt');
console.log(absolute); //D:\LearningNodejs\modules\modules\content\subfolder\text.txt

