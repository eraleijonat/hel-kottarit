module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:import/recommended',
		'plugin:import/typescript',
		'eslint:recommended',
		'plugin:svelte/recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	plugins: ['@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				// https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
				'@typescript-eslint/no-unused-vars': 'off',
				// https://github.com/Cweili/svelte-fa/issues/239#issuecomment-1319364670
				'import/no-named-as-default': 'off'
			}
		}
	],
	settings: {
		'import/resolver': {
			typescript: {
				project: 'tsconfig.json'
			}
		}
	},
	rules: {
		'no-console': 'error',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true,
				varsIgnorePattern: '^_',
				argsIgnorePattern: '^_'
			}
		],
		'import/no-restricted-paths': [
			'error',
			{ zones: [{ from: './src/routes/**/*', target: './src/lib/**/*' }] }
		],
		'import/no-unresolved': [2, { caseSensitiveStrict: true }]
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		project: 'tsconfig.json',
		ecmaVersion: 'latest',
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	globals: {
		svelteHTML: true
	}
};
