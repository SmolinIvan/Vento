import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import path from 'path';

export default defineConfig(
    // Базовые recommended правила для всех файлов
    eslint.configs.recommended,

    // Игнорируем ненужные файлы и папки
    {
        ignores: ['dist/**', '*.js', 'node_modules/**', '*.config.*', 'webpack.*', 'eslint.config.*'],
    },

    // Конфигурация для TypeScript файлов с type information
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        extends: [tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: path.resolve(import.meta.dirname),
            },
        },
        rules: {
            // Правила для точек с запятой
            semi: ['error', 'always'], // Требует точки с запятой

            // Правила для пробелов в конце строки
            'eol-last': ['error', 'always'], // Требует пробел в конце файла
            'no-trailing-spaces': 'error', // Запрещает пробелы в конце строк
            // Дополнительные полезные правила для форматирования
            quotes: ['error', 'single'], // Одинарные кавычки
            'comma-dangle': ['error', 'always-multiline'], // Висящие запятые
        },
    },
    // Конфигурация для JavaScript файлов (без type checking)
    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
    }
);
