# Online Communities UI

A Next.js (App Router) scaffold for a community platform with TailwindCSS, Framer Motion, and GitHub Actions CI. Includes a Facebook-style Home page design and placeholder routes for Groups, Shop, Blog, Affiliates, Subscription, Messages, User Profile suite, and Admin dashboard, plus a mock API layer.

## Getting Started

1) Install dependencies
```
npm install
```

2) Run dev server
```
npm run dev
```
Open http://localhost:3000

## Push to GitHub

Use SSH (recommended) or HTTPS. Replace placeholders with your GitHub username and repo name.

### Option A: SSH

1) Create a new GitHub repository (empty) named `online-communities-ui`.
2) Initialize git and make the first commit:
```
git init
git add .
git commit -m "feat(ui): initial scaffold with pages and mock API"
```
3) Ensure you have an SSH key added to GitHub (skip if already configured):
```
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept defaults, then:
cat ~/.ssh/id_ed25519.pub
# Copy the key and add it at https://github.com/settings/ssh/new
ssh -T git@github.com
```
4) Set remote and push:
```
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/online-communities-ui.git
git push -u origin main
```

### Option B: HTTPS
```
git init
git add .
git commit -m "feat(ui): initial scaffold with pages and mock API"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/online-communities-ui.git
git push -u origin main
```

## CI

GitHub Actions workflow is included at `.github/workflows/ci.yml` and runs lint + build on pushes and PRs to `main`.

## Project Structure (key paths)

- `app/page.tsx` — Home
- `components/home/*` — Home widgets
- `components/layout/SideRail.tsx` — Desktop side navigation
- `app/groups` — Groups list and detail
- `app/shop` — Shop and mock checkout
- `app/blog`, `app/affiliates`, `app/subscription` — Placeholder pages
- `app/messages` — Messaging placeholder
- `app/user/*` — Profile suite
- `app/admin/*` — Admin dashboard pages
- `app/api/posts`, `app/api/updates` — Mock API routes
- `lib/mock.ts` — Mock data

## Next Steps

- Add authentication with next-auth and role-based access
- Wire data fetching from API routes to pages
- Implement composer, comments, reactions
- Real-time features and payments integration