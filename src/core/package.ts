import * as path from 'path';

export interface IPackageConfiguration {
	name: string;
	version: string;
}

export const rootPath: string = process.env['APP_ROOT'];
export const packageJsonPath = path.join(rootPath, 'package.json');

// Use node require.
export const pkg = global['require'](packageJsonPath) as IPackageConfiguration;