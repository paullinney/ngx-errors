export default {
  entry: 'dist/index.js',
  dest: 'dist/bundle/paullinney-sds.ngxerrors.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ngxerrors',
  globals: {
    'typescript': 'ts'
  }
};
