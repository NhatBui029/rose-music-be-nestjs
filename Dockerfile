FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app/nestjs

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Tạo Prisma Client
RUN npx prisma generate

# Tạo entrypoint script để chạy migration và sau đó khởi động server
COPY ./entrypoint.sh /app/nestjs/entrypoint.sh
RUN chmod +x /app/nestjs/entrypoint.sh

# Chạy entrypoint script
ENTRYPOINT ["/app/nestjs/entrypoint.sh"]
