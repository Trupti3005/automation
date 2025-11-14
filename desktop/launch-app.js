const { exec } = require('child_process');
exec('"C:\\Users\\Ethics\\Downloads\\gt-pos Setup 1.0.0.exe"', (err) => {
  if (err) console.error('Failed to launch app:', err);
});
