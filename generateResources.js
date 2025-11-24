const fs = require('fs');
const path = require('path');

const resourcesDir = path.join(__dirname, 'public', 'resources');
const outputFile = path.join(resourcesDir, 'resources.json');

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  else return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Scan a folder (category) and return resource objects
function scanFolder(folderPath, type) {
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath).filter(f => !f.startsWith('.'));
  return files.map(f => {
    const filePath = path.join(folderPath, f);
    const stats = fs.statSync(filePath);
    return {
      name: f,
      link: path.join('/resources', path.relative(resourcesDir, folderPath), f).replace(/\\/g, '/'),
      type: type,
      size: formatSize(stats.size),
      downloads: 0
    };
  });
}

function generateResources() {
  const subjects = fs.readdirSync(resourcesDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

  const finalData = {};

  subjects.forEach(subject => {
    const subjectPath = path.join(resourcesDir, subject);
    const entries = fs.readdirSync(subjectPath, { withFileTypes: true });

    finalData[subject] = {};

    entries.forEach(entry => {
      const entryPath = path.join(subjectPath, entry.name);
      if (entry.isDirectory()) {
        // This is a category folder
        finalData[subject][entry.name] = scanFolder(entryPath, entry.name);
      } else if (entry.isFile()) {
        // File directly under subject folder → put under "general"
        if (!finalData[subject]['general']) finalData[subject]['general'] = [];
        finalData[subject]['general'].push({
          name: entry.name,
          link: path.join('/resources', path.relative(resourcesDir, subjectPath), entry.name).replace(/\\/g, '/'),
          type: 'general',
          size: formatSize(fs.statSync(entryPath).size),
          downloads: 0
        });
      }
    });
  });

  fs.writeFileSync(outputFile, JSON.stringify(finalData, null, 2));
  console.log('✅ resources.json generated successfully!');
}

generateResources();
