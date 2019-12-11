import App from './App.svelte';
import data from './data'
console.log({props: {...data}})
const app = new App({
	target: document.body,
	props: {...data}
});

export default app;