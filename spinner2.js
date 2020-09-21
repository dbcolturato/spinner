"|/-\\|/-\\|".split("").forEach((ch, i) => 
  setTimeout(
    () => process.stdout.write(`\r${ch}   `),
    i * 200 + 100
  )
);

setTimeout(() => {
  process.stdout.write('\n');
}, 1800);
