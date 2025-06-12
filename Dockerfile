# =================================================================
# DOCKERFILE UNTUK PRODUCTION APLIKASI VITE/REACT
# =================================================================

# --- Tahap 1: Build Stage (Builder) ---
# Tahap ini bertugas untuk meng-compile source code menjadi file statis.
# Ia memiliki semua yang dibutuhkan untuk development (npm, node_modules, dll).
FROM node:20-alpine AS build

# Set direktori kerja
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu
# Ini memanfaatkan cache Docker. 'npm install' hanya berjalan jika ada perubahan dependensi.
COPY package*.json ./

# Install semua dependensi
RUN npm install

# Salin semua sisa source code
COPY . .

# Jalankan skrip build untuk membuat folder /app/dist yang berisi file statis teroptimasi
RUN npm run build

# --- Tahap 2: Production Stage (Final Image) ---
# Tahap ini adalah hasil akhirnya. Image yang sangat ringan dan hanya berisi
# apa yang dibutuhkan untuk menjalankan aplikasi.
FROM node:20-alpine

WORKDIR /app

# Install 'serve', sebuah web server statis yang sangat ringan dari Vercel
RUN npm install -g serve

# Salin HANYA folder 'dist' yang sudah di-build dari tahap sebelumnya
# Ini adalah trik yang membuat image production sangat kecil dan aman.
COPY --from=build /app/dist ./dist

# Beri tahu Docker bahwa container akan mendengarkan di port 3000
EXPOSE 3000

# Perintah default untuk menjalankan container.
# Ini akan menjalankan web server untuk menyajikan file dari folder 'dist'.
CMD ["serve", "-s", "dist", "-l", "3000"]