FROM python:3.8

# Create app directory
WORKDIR /usr/src/models

# Copy the requirements file
COPY requirements.txt .

# Install app dependencies
RUN pip install -r requirements.txt

# Copy the whole folder inside the Image filesystem
COPY . .

# Expose port 5000
EXPOSE 5000
