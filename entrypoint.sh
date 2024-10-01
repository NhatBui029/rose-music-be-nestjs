#!/bin/sh

# Chạy migrations
npm run prisma:migrations:deploy

# Khởi động ứng dụng
npm run start:dev
