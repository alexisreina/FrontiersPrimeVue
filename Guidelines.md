# Developer Guidelines

This document provides essential guidelines for developers working on the Frontiers PrimeVue project, including git subtree management, development workflows, and best practices.

## 📋 Table of Contents

- [Git Subtree Management](#git-subtree-management)
- [Development Workflow](#development-workflow)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

## 🌳 Git Subtree Management

### Overview

The `apps/showcase` directory is managed as a [git subtree](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html) from a forked PrimeVue repository. This approach allows us to:

- Maintain our custom theme and modifications
- Stay synchronized with upstream PrimeVue updates
- Keep a clean project history

**Source Repository:** `git@github.com:alexisreina/primevue.git`

### Initial Subtree Setup

> **Note:** This section is for reference only. The subtree has already been configured.

The subtree was initially set up with the following commands:

1. **Add the remote repository:**
   ```bash
   git remote add primevue git@github.com:alexisreina/primevue.git -t showcase
   ```

2. **Add the subtree:**
   ```bash
   git subtree add --prefix apps/showcase primevue showcase --squash
   ```

3. **Apply local customizations:**
   - Custom theme integration
   - Build configuration adjustments
   - Project-specific modifications

### Updating the Showcase

Follow these steps to update the showcase with the latest changes from the upstream PrimeVue repository:

#### Prerequisites

- Ensure you have push access to the forked repository
- Verify you're on a clean working directory
- Create a backup branch if working on important changes

#### Step 1: Update the Fork

Navigate to your local fork of the PrimeVue repository and update it:

```bash
# In your primevue fork directory
git checkout master
git pull upstream master
git push origin master

# Create/update the showcase branch
git subtree split --prefix apps/showcase --branch showcase
git push origin showcase
```

#### Step 2: Update This Repository

In the Frontiers PrimeVue project:

1. **Create a new feature branch:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b update/showcase-$(date +%Y%m%d)
   ```

2. **Pull the latest changes:**
   ```bash
   git subtree pull --prefix apps/showcase primevue showcase --squash
   ```

3. **Test the integration:**
   ```bash
   pnpm install
   pnpm dev
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: update showcase from upstream PrimeVue

   - Updates showcase to latest PrimeVue version
   - Maintains custom theme integration
   - Resolves any merge conflicts"
   
   git push origin update/showcase-$(date +%Y%m%d)
   ```

## 🔄 Development Workflow

### Branch Naming Convention

Use descriptive branch names following this pattern:

- `feature/component-name` - New features or components
- `fix/issue-description` - Bug fixes
- `update/showcase-YYYYMMDD` - Showcase updates
- `refactor/area-name` - Code refactoring
- `docs/section-name` - Documentation updates

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```bash
git commit -m "feat(theme): add dark mode support for custom components"
git commit -m "fix(showcase): resolve responsive layout issues on mobile"
git commit -m "docs(guidelines): update git subtree management instructions"
```

### Pull Request Guidelines

When creating pull requests:

1. **Use a descriptive title** following the commit message format
2. **Provide context** in the description about what changes were made and why
3. **Link related issues** using `Fixes #123` or `Closes #123`
4. **Test thoroughly** across different themes and screen sizes
5. **Update documentation** if necessary

## ⚡ Best Practices

### Code Quality

- **Follow Vue.js style guide** and established patterns in the codebase
- **Use TypeScript** where applicable for better type safety
- **Test components** across all available themes
- **Ensure responsive design** works on mobile, tablet, and desktop
- **Optimize performance** by lazy-loading components where appropriate

### Theme Management

- **Preserve custom modifications** when updating the showcase
- **Test theme switching** functionality after updates
- **Maintain consistency** with the Frontiers design system
- **Document theme customizations** for future reference

### Git Best Practices

- **Keep commits atomic** - one logical change per commit
- **Write meaningful commit messages** that explain the "why"
- **Use interactive rebase** to clean up commit history before merging
- **Always test** before pushing to shared branches

## 🔧 Troubleshooting

### Common Issues

#### Merge Conflicts During Subtree Update

If you encounter merge conflicts:

1. **Resolve conflicts manually:**
   ```bash
   # Edit conflicted files
   git add <resolved-files>
   git commit -m "resolve: merge conflicts from showcase update"
   ```

2. **Test the resolution:**
   ```bash
   pnpm dev
   ```

#### Build Errors After Update

1. **Clean and reinstall dependencies:**
   ```bash
   pnpm clean
   pnpm install
   ```

2. **Check for breaking changes** in the PrimeVue changelog
3. **Update custom theme configurations** if necessary

#### Remote Repository Access Issues

Ensure you have proper SSH key access to the forked repository:

```bash
ssh -T git@github.com
git remote -v
```

### Getting Help

- **Check the PrimeVue changelog** for breaking changes
- **Review the showcase documentation** for component-specific issues
- **Consult the team** for project-specific questions
- **Create an issue** for bugs or feature requests

## 📚 Additional Resources

### Git Subtree Documentation

- **[Git Subtree Manual](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html)** - Official documentation
- **[Git Subtree Basics](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202)** - Comprehensive tutorial
- **[Forking a Single Package in a Monorepo](https://gist.github.com/alfredringstad/ac0f7a1e081e9ee485e653b6a8351212)** - Advanced patterns
- **[Adding Existing Repo to Monorepo](https://jaysherby.com/how-to-add-an-existing-git-repo-to-a-monorepo/)** - Integration strategies

### PrimeVue Resources

- **[PrimeVue Documentation](https://primevue.org/)** - Official component documentation
- **[PrimeVue GitHub](https://github.com/primefaces/primevue)** - Source code and issues
- **[PrimeVue Changelog](https://github.com/primefaces/primevue/blob/master/CHANGELOG.md)** - Version updates and breaking changes

### Development Tools

- **[Conventional Commits](https://www.conventionalcommits.org/)** - Commit message specification
- **[Vue.js Style Guide](https://vuejs.org/style-guide/)** - Official Vue.js coding standards
- **[Nuxt.js Documentation](https://nuxt.com/)** - Framework-specific guidance

---

**💡 Remember:** When in doubt, ask questions early and often. It's better to clarify requirements and processes upfront than to fix issues later.
