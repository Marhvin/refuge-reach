# Urban Refuge - Developer Onboarding Guide

**GitHub Repository:** https://github.com/Marhvin/refuge-reach

## Table of Contents

1. [Prerequisites Installation](#prerequisites-installation)
   - [Node.js](#1-nodejs)
   - [Visual Studio Code](#2-visual-studio-code)
   - [Docker Desktop](#3-docker-desktop)
   - [Yarn](#4-yarn)
   - [Git](#5-git)
2. [First Time Setup](#first-time-setup)
3. [Daily Development Workflow](#daily-development-workflow)

---

## Prerequisites Installation

### 1. Node.js

#### Mac Installation (via nvm):

1. **Install nvm using the install script:**
   - Visit: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
   - Copy and run the curl script in your terminal:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   ```

2. **Install XCode Developer tools if prompted:**
   - Follow the instructions in the terminal if XCode tools are required
   - Skip this step if not prompted

3. **Add nvm to your shell profile (ONE TIME ONLY):**
   ```bash
   echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
   echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.zshrc
   ```

4. **Restart your terminal or run:**
   ```bash
   source ~/.zshrc
   ```

5. **Verify nvm installation:**
   ```bash
   nvm --version
   ```
   You should see a version number printed.

6. **Install Node.js:**
   ```bash
   nvm install node
   ```

7. **Verify Node.js installation:**
   ```bash
   node -v
   ```
   You should see a version number printed.

#### Windows Installation:
1. **Download Node.js directly from:** https://nodejs.org/en/download
2. **Run the installer and follow the setup wizard**
3. **Verify installation in Command Prompt or PowerShell:**
   ```cmd
   node -v
   npm -v
   ```

### 2. Visual Studio Code

**Download and install from:** https://code.visualstudio.com/download

### 3. Docker Desktop

1. **Download from:** https://www.docker.com/products/docker-desktop/
2. **Choose your operating system and install**
3. **Make sure Docker Desktop is running before proceeding with database setup**

### 4. Yarn

1. **Open a terminal window** (Mac Terminal, VS Code terminal, or Windows PowerShell)

2. **Install Yarn globally:**
   ```bash
   npm install -g yarn
   ```

3. **If you get permission errors on Mac:**
   ```bash
   sudo npm install -g yarn
   ```

4. **For Windows, run PowerShell as Administrator if you get permission errors**

### 5. Git

**Download and install from:** https://git-scm.com/downloads

---

## First Time Setup

> [!NOTE]  
> This section only needs to be completed once.

### 1. Navigate to your desired directory

**Mac and Linux:**
```bash
cd ~/Desktop
```

**Windows (PowerShell):**
```powershell
cd ~/Desktop
```

### 2. Clone the repository

```bash
git clone https://github.com/Marhvin/refuge-reach.git
```

### 3. Setup environment files

**Mac and Linux:**
```bash
cd refuge-reach
cp src/backend/.env.example src/backend/.env
cp src/frontend/.env.example src/frontend/.env
```

**Windows (PowerShell):**
```powershell
cd refuge-reach
Copy-Item src/backend/.env.example src/backend/.env
Copy-Item src/frontend/.env.example src/frontend/.env
```

**Windows (Command Prompt):**
```cmd
cd refuge-reach
copy src\backend\.env.example src\backend\.env
copy src\frontend\.env.example src\frontend\.env
```

### 4. Ensure Docker Desktop is running

- Open Docker Desktop application
- Make sure it shows as running/started

### 5. Install project dependencies

```bash
yarn install
```

### 6. Create and setup the database

Run these three commands in sequence:

```bash
docker run --name urban-refuge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

```bash
docker exec -ti urban-refuge psql -U postgres -c "CREATE DATABASE urban_refuge;"
```

```bash
yarn prisma:reset
```

### 7. Configure environment variables

1. **Open the `.env` files in both folders:**
   - `src/backend/.env`
   - `src/frontend/.env`

2. **Get the required credentials from a team member with access**

3. **Populate all missing configuration values**

### 8. Start the development server

```bash
yarn start
```

Your application should now be running locally!

---

## Daily Development Workflow

**Use these steps for subsequent development sessions:**

### 1. Ensure the database is running

1. **Open Docker Desktop**
2. **Check that the `urban-refuge` container is running**
   - If it shows as stopped, click the play button to start it

### 2. Start the development server

```bash
cd refuge-reach
yarn start
```

---

## Troubleshooting

### Common Issues

- **Database connection errors:** Make sure Docker Desktop is running and the `urban-refuge` container is started
- **Permission errors during installation:** Use `sudo` on Mac/Linux or run terminal as Administrator on Windows
- **Port already in use:** Make sure no other applications are using the same ports, or restart your computer
- **Environment variable errors:** Double-check that all values in your `.env` files are properly configured

### Getting Help

- Check the project's GitHub repository for additional documentation
- Ask a team member for assistance with environment variable configuration

---

**Happy coding! 🚀**