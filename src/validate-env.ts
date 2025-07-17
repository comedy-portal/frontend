import * as yup from 'yup'

interface EnvVariables {
    NEXT_PUBLIC_API_BASE_PATH: string
    NEXT_PUBLIC_API_DOMAIN: string
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_APP_NAME: string
    NEXT_PUBLIC_WEBSITE_AUTH_CALLBACK_PATH: string
    NEXT_PUBLIC_WEBSITE_DOMAIN: string
    NEXT_PUBLIC_INTERNAL_API_URL: string
    NODE_ENV: string
    SUPERTOKENS_API_KEY: string
    SUPERTOKENS_CONNECTION_URI: string
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string
}

const defaultValues: EnvVariables = {
    NEXT_PUBLIC_API_BASE_PATH: '/api/v1',
    NEXT_PUBLIC_API_DOMAIN: 'http://localhost:3001',
    NEXT_PUBLIC_API_URL: 'http://localhost:3001/api/v1',
    NEXT_PUBLIC_APP_NAME: 'ComedyPortal',
    NEXT_PUBLIC_WEBSITE_AUTH_CALLBACK_PATH: 'http://localhost:3000/auth/callback',
    NEXT_PUBLIC_WEBSITE_DOMAIN: 'http://localhost:3000',
    NEXT_PUBLIC_INTERNAL_API_URL: 'http://localhost:3000/api',
    NODE_ENV: 'development',
    SUPERTOKENS_API_KEY: 'SHOULD_BE_SET',
    SUPERTOKENS_CONNECTION_URI: 'SHOULD_BE_SET',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: 'SHOULD_BE_SET',
}

const envSchema = yup.object().shape(
    Object.keys(defaultValues).reduce(
        (schema, key) => {
            schema[key as keyof EnvVariables] = yup
                .string()
                .required(`${key} is required. Default: "${defaultValues[key as keyof EnvVariables]}"`)
            return schema
        },
        {} as Record<keyof EnvVariables, yup.StringSchema>,
    ),
)

export default function validateEnv() {
    const bold = '\x1b[1m'
    const red = '\x1b[31m'
    const green = '\x1b[32m'
    const reset = '\x1b[0m'

    try {
        envSchema.validateSync(process.env, { abortEarly: false })
        console.log(` ${bold}${green}✓${reset} Environment variables validation passed`)
    } catch (error) {
        console.error(` ${bold}${red}✗${reset} Environment variables validation failed:`)
        if (error instanceof yup.ValidationError) {
            error.inner.forEach(err => {
                console.error(`   - ${err.message}`)
            })
        }
        console.log(`   Please update the environment variables and relaunch the application.`)
    }
}
