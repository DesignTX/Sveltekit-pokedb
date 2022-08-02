//src/**/*.svelte means to remove anything that isnt a svelte file
module.export = {
	mode: 'jit',
	purge: ['./src/**/*.svelte']
};
