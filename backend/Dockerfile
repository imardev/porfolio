
FROM node:22-bookworm-slim AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY prisma ./prisma
COPY prisma7.config.ts ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm exec prisma generate --config prisma7.config.ts

FROM node:22-bookworm-slim AS production

WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable

COPY --from=build /app /app

EXPOSE 4444

CMD ["pnpm", "start"]
