// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  defaultLanguage: 'pt-BR',
  supportedLanguages: ['en-US', 'pt-BR'],
  moviesApi: 'https://api.themoviedb.org/3',
  moviesApiKey: '65b50491455a01f4a13bc4682717902f'
};