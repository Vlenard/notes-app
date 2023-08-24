# Notes-app
Notes app with NextJS & Tailwind & prisma

It's a simple note-taking application, which can contain mistakes or poorly executed parts. This is a simple exercise, learning project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Registrate admin http://localhost:3000/api/auth/admin



## Versions

-----------
 This project made with zero experience. Now it's clear why it's so terrible.
 Theme switching is not working well. I store some data like theme or lang in wrong way, I used cookies instead of 
 localstorage. I made unnecessary step to authorize users in api request.

-----------

### 0.1.8 -> production
 * Fixed theme error
 * Admin page
   - Promote to admin
   - Permission to delete user
 * Error fix in sign in

### 0.1.7
 * Theme switching
 * Lang switching
 * Responsive navbar
 * Design improvements
 * Minimal coockies

### 0.1.6
 * Profile
    - Delete
    - Edit
 * New functions
 * Bug fixes
 * New routes

### 0.1.5
 * Single instance of prisma client
 * Delete note
 * Admin page
 * Admin role
    - Admin has permission to delete user
    - Set new admin

### 0.1.4
 * Home listing notes
 * editor
    - Write new
    - Edit
    - Save

### 0.1.3
 * Sign in page
 * Sign in from database
 * Home (alias notes)

### 0.1.2
 * Registration page & functionality
 * Save users into database
 * Admin & user role

### 0.1.1
* Internatialization
* Theme
* Homepage

### 0.1.0
* Upload
