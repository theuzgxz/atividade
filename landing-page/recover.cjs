const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function recover() {
  const logPath = 'C:\\Users\\amara\\.gemini\\antigravity\\brain\\5162a1fd-83be-47d1-b018-cfb4f8bd2e70\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(logPath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const files = {};

  for await (const line of rl) {
    try {
      const entry = JSON.parse(line);
      if (entry.type === 'VIEW_FILE' && entry.status === 'DONE') {
        const content = entry.content;
        const match = content.match(/File Path: `file:\/\/\/(.+?)`/);
        if (match) {
          const filePathStr = decodeURI(match[1]);
          // We want to recover specific files
          if (filePathStr.endsWith('Hero.jsx') || 
              filePathStr.endsWith('Problems.jsx') || 
              filePathStr.endsWith('Benefits.jsx') || 
              filePathStr.endsWith('Pricing.jsx') ||
              filePathStr.endsWith('WhatIsInside.jsx') ||
              filePathStr.endsWith('Testimonials.jsx') ||
              filePathStr.endsWith('Comparison.jsx') ||
              filePathStr.endsWith('Bonuses.jsx') ||
              filePathStr.endsWith('FAQ.jsx') ||
              filePathStr.endsWith('Gallery.jsx') ||
              filePathStr.endsWith('HowItWorks.jsx') ||
              filePathStr.endsWith('FeaturedTestimonial.jsx') ||
              filePathStr.endsWith('Guarantee.jsx') ||
              filePathStr.endsWith('StickyBar.jsx') ||
              filePathStr.endsWith('FinalCTA.jsx') ||
              filePathStr.endsWith('ForWho.jsx') ||
              filePathStr.endsWith('Author.jsx') ||
              filePathStr.endsWith('index.html') ||
              filePathStr.endsWith('App.jsx') ||
              filePathStr.endsWith('config.js')
          ) {
            
            // Extract the actual code block
            // It starts after "should remove the line number, colon, and leading space.\n"
            // and ends before "\nThe above content shows the entire"
            
            const startMarker = 'should remove the line number, colon, and leading space.\n';
            const endMarker = '\nThe above content shows the entire, complete file contents of the requested file.';
            
            let startIndex = content.indexOf(startMarker);
            let endIndex = content.indexOf(endMarker);
            
            if (startIndex !== -1 && endIndex !== -1) {
              const codeBlock = content.substring(startIndex + startMarker.length, endIndex);
              
              // Remove line numbers (e.g. "1: ", "10: ")
              const cleanedCode = codeBlock.split('\n').map(l => {
                const idx = l.indexOf(': ');
                if (idx !== -1 && idx < 10 && !isNaN(parseInt(l.substring(0, idx)))) {
                  return l.substring(idx + 2);
                }
                return l;
              }).join('\n');
              
              files[filePathStr] = cleanedCode;
            }
          }
        }
      }
    } catch (e) {
      // skip
    }
  }

  for (const [filePath, content] of Object.entries(files)) {
    try {
      const writePath = filePath.replace(/\\/g, '/');
      fs.writeFileSync(writePath, content, 'utf8');
      console.log(`Recovered: ${writePath}`);
    } catch (e) {
      console.error(`Error writing ${filePath}:`, e);
    }
  }
}

recover();
