// Example server-side performance monitoring
const start = process.hrtime();
process.on('exit', () => {
  const diff = process.hrtime(start);
  console.log(`Server uptime: ${diff[0]}s ${diff[1] / 1e6}ms`);
});
