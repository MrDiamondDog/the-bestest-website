import type { UserConfig } from 'vite'

export default {
    server: {
        host: true,
        port: 80,
    },
    preview: {
        host: true,
        port: 80,
    }
} satisfies UserConfig;