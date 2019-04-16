// const joi = require('joi');

// const envVarsSchema = joi
//   .object({
//     NODE_ENV: joi
//       .string()
//       .valid(['development', 'production', 'test', 'provision'])
//       .required(),
//     PORT: joi.number().required(),
//     LOGGER_LEVEL: joi
//       .string()
//       .valid(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
//       .default('info'),
//     LOGGER_ENABLED: joi
//       .boolean()
//       .truthy('TRUE')
//       .truthy('true')
//       .falsy('FALSE')
//       .falsy('false')
//       .default(true),
//   })
//   .unknown()
//   .required();

// const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }

// const config = {
//   env: envVars.NODE_ENV,
//   isTest: envVars.NODE_ENV === 'test',
//   isDevelopment: envVars.NODE_ENV === 'development',
//   logger: {
//     level: envVars.LOGGER_LEVEL,
//     enabled: envVars.LOGGER_ENABLED,
//   },
//   server: {
//     port: envVars.PORT,
//   },
//   postgres: {
//     development: {
//       host: '127.0.0.1',
//     },
//     test: {
//       host: '1.1.1.1',
//     },
//     production: {
//       host: '1.2.3.4',
//     },
//   },
// };

// module.exports = config;
