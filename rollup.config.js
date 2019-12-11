import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import puppeteer from 'puppeteer';
import waitOn from 'wait-on';
import { spawn } from 'child_process';
import kill from 'tree-kill';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/build/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
		serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	]
};

function serve() {
	let started = false;
	const cmd = production ? ['run', 'start'] : ['run', 'start', '--', '--dev']
	return {
		writeBundle() {
			if (!started) {
				started = true;
				const child = spawn('npm', cmd, {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
				waitOn({ 
					resources: ['http://localhost:5000/'],
					delay: 1000,
					tcpTimeout: 3000,
					timeout: 3000
				})
				.then(exportPdf)
				.then(_ => {
					if (production) {
						kill(child.pid, 'SIGKILL')
						child.kill();
					}
				})
				.catch(e => console.log('ERROR', e))
			}
		}
	};
}

async function exportPdf () {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto('http://localhost:5000/', { waitUntil: 'networkidle2' });
	await page.pdf({path: 'public/build/cv.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true});
	await browser.close();
}


