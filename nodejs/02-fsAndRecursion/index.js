const fs = require('fs').promises; // Node's File System lib
const path = require('path');

async function readdir(root, prefix = '') {
    root = root || path.resolve(__dirname); // This would get the previous folder if we used './' instead
    try {
        const files = await fs.readdir(root); // Reads all content only from the current path, creating an array with each item
        await readfiles(files, root, prefix); // Reads through each child
    }
    catch (e) {
        console.log(e);
    }
}

async function readfiles(files, root, prefix) { // This represents a full loop for a single folder/file
    for (let [index, file] of files.entries()) { // Each folder/file inside a parent will be enumerated based on the array length (if the parent got 4 folders and 1 file, we'll have an array from 0 to 4)
        const fullPath = path.join(root, file);
        const stats = await fs.stat(fullPath); // We'll use this to check if the current child will need to go through readdir() again by recursion

        const isLast = index === files.length - 1;
        const connector = isLast ? '└── ' : '├── ';

        console.log(`${prefix}${connector}${file}`);
        // └ E.g       '| '   +  '└── '   +  Filename
        // The prefix gets longer for each iteration as:
        // - 1st iteration: '|  └──'
        // - 2nd iteration: '|  |   └──'
        // - 3rd iteration: '|  |   |   └──'
        // and so on

        if (stats.isDirectory() && !(file.includes('git') || file.includes('node_modules'))) {
            const newPrefix = prefix + (isLast ? '  ' : '|  '); // If the current item is a folder, this means we'll have to visually "push" the log a bit more to the right to the next loop
            await readdir(fullPath, newPrefix); // Reads all content from the parent and its childs, then go back to the start of the "for" loop
        }
    }
}

readdir(path.resolve('../', 'web-studies'));