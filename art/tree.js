const fs = require('fs');
const path = require('path');

// Directory containing project folders
const projectsDir = path.join(__dirname, '../art');
const outputFilePath = path.join(projectsDir, 'index.html');

// Function to extract title and date from HTML file
function getTitleAndDateFromHTML(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';

    // Extract date
    const dateMatch = content.match(/<time datetime="(.*?)">/);
    const date = dateMatch ? dateMatch[1] : 'No Date';

    return { title, date };
}

// Generate index.html listing all projects with titles and dates
function generateIndexPage() {
    const projects = fs.readdirSync(projectsDir).filter(dir => {
        return fs.statSync(path.join(projectsDir, dir)).isDirectory();
    });

    let htmlContent = '<!DOCTYPE html><html><head><title>art projects</title></head><body>';
    htmlContent += '<h1>art projects</h1><ul>';

    projects.forEach(project => {
        const indexPath = path.join(projectsDir, project, 'index.html');
        if (fs.existsSync(indexPath)) {
            const { title, date } = getTitleAndDateFromHTML(indexPath);
            htmlContent += `<li><a href="${project}/index.html">${title}</a> - ${date}</li>`;
        }
    });

    htmlContent += '</ul></body></html>';
    
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log('Index page created at:', outputFilePath);
}

generateIndexPage();