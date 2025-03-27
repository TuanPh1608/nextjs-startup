# NextJS Startup

Đây là một dự án cho việc học Next.js

## Thiết lập

1. Clone repository về máy.
2. Cài đặt các dependencies:
   ```bash
   npm install
   ```
3. Tạo file `.env.local` trong thư mục gốc và thêm các biến môi trường cũng như giá trị sau:
   ```
   AUTH_SECRET=<your_auth_secret>
   AUTH_GITHUB_ID=<your_github_id>
   AUTH_GITHUB_SECRET=<your_github_secret>
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
   NEXT_PUBLIC_SANITY_DATASET=<your_sanity_dataset>
   SANITY_WRITE_TOKEN=<your_sanity_write_token>
   ```

4. Tạo file `.env.sentry-build-plugin` trong thư mục gốc và thêm biến môi trường và giá trị:
   ```
   SENTRY_AUTH_TOKEN=<your_sentry_auth_token>
   ```


## Chạy dự án
Để chạy dự án trên máy:
```bash
npm run dev
```

## Triển khai

Dự án đã được triển khai tại: [https://nextjs-startup-phi.vercel.app/](https://nextjs-startup-phi.vercel.app/)

