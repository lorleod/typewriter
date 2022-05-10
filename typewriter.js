const sentence = "hello there from lighthouse labs";


let accum = 0;
for (const char of sentence) {
  setTimeout(() => {
		process.stdout.write(char);
	}, accum);
  accum += 50;
}
