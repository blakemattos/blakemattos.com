
//to run: `node tree.js` and this will create/update index.html 

const fs = require('fs');
const path = require('path');

// Directory containing project folders
const projectsDir = path.join(__dirname, '../art');
const outputFilePath = path.join(projectsDir, 'index.html');

// Function to extract title from HTML file
function getTitleFromHTML(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    return titleMatch ? titleMatch[1] : 'Untitled';
}

// Generate index.html listing all projects
function generateIndexPage() {
    const projects = fs.readdirSync(projectsDir).filter(dir => {
        return fs.statSync(path.join(projectsDir, dir)).isDirectory();
    });

    let htmlContent = '<!DOCTYPE html><html><head><title>art projects</title></head><body>';
    htmlContent += '<h1>Project Index</h1><ul>';

    projects.forEach(project => {
        const indexPath = path.join(projectsDir, project, 'index.html');
        if (fs.existsSync(indexPath)) {
            const title = getTitleFromHTML(indexPath);
            htmlContent += `<li><a href="${project}/index.html">${title}</a></li>`;
        }
    });

    htmlContent += '</ul></body></html>';
    
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log('Index page created at:', outputFilePath);
}

generateIndexPage();