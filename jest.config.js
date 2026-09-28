/** Tests unitarios de la lógica de dominio (src/modules/**). */
export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/modules'],
  testMatch: ['**/test/**/*.test.ts'],
  transform: {
    '^.+\.ts$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
          moduleResolution: 'node10',
          ignoreDeprecations: '6.0',
          verbatimModuleSyntax: false,
          isolatedModules: true,
          esModuleInterop: true,
          strict: true,
        },
      },
    ],
  },
};
