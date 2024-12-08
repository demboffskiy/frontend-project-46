#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.');

program 
    .version('1.0.0', '-v, --version', 'output the version number');

program 
    .helpOption('-h, --help', 'output usage information');

program.parse(process.argv);