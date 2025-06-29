#  NoteMaker - Full Stack Note-Taking App

A clean and efficient note-taking app with features like CRUD operations, trash management, sharing, sorting, and previewing. Designed with an intuitive user interface to help users organize and access notes easily.

## 🔧 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS (or your preferred CSS framework)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (or Auth-based)
- **State Management**: React Context API or Redux (optional)
- **API Testing**: Postman, ThunderClient
- **Deployment**: Vercel / Render / Railway / Docker (based on preference)

---

## 📸 UI Overview

- Sidebar/HiddenBar:
  - **All Notes**
  - **Trash**
  - **Profile**
  - **Settings**
    - Dark Mode Toggle
  - **Logout**
  -**Help & Support**
  - **About**

- Main Panel:
  - Note File List
    - Preview
    - File Heading
  - Editor
    - Create New Note
    - Sort
    - Edit/Delete Note
    - Share Note

---

## 🌐 Routes

### 📄 Frontend Pages

| Path                         | Description               |
|-----------------------------|---------------------------|
| `/landingPage`              | Public landing page       |
| `/allnotes`                 | All user notes            |
| `/trash`                    | Deleted notes             |
| `/setting`                  | Settings page             |
| `/allnotes/:noteId`         | View/Edit individual note |
| `/shared/:noteId`           | View shared note          |
| `/login`                    | User login                |
| `/register`                 | User registration         |
| `/logout`                   | Logout                    |
| `/profile`                  | User profile              |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SATYAPRAKASH1419/Note-Maker.git
cd noteapp
