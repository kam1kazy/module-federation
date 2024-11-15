import { IBuildPaths } from '@packages/build-config'

export const moduleFederationPluginConfig = ({
  path,
  paths,
  packageJson,
}: {
  path: any
  paths: IBuildPaths
  packageJson: any
}) => {
  return {
    name: 'host',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': './src/router/Router.tsx',
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react'],
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom'],
      },
    },
  }
}
