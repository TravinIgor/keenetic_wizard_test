import { type FullConfig } from '@playwright/test'
import dotenv from 'dotenv'
import { execSync } from 'child_process'

dotenv.config()

const language = process.env.LANGUAGE
const url = process.env.BASE_URL


function globalSetup(config: FullConfig) {
    execSync(`curl -o ./localizations/locale.${language}.json ${url}/language/locale.${language}.json`)
}

export default globalSetup;