# Use a specific version of the Electron base image
FROM electronuserland/builder:14

# Install required system libraries in one RUN command
RUN apt-get update && apt-get install -y \
    libgtk-3-0 \
    libgdk-pixbuf2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libxss1 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package.json /app/

# Install npm dependencies
RUN npm install

COPY . /app/

# Optional: Change ownership if you create a non-root user
# RUN useradd -m electronuser && chown -R electronuser:electronuser /app

# Uncomment to switch to the non-root user
# USER electronuser

CMD ["npm", "start"]
