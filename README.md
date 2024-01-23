# Food Mentor

This project was created using 
[Create React App](https://github.com/facebook/create-react-app). For introduction 
and customization of additional features
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Preparing for work

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) it if necessary.
2. Set the project's base dependencies with the command `npm install`.
3. Start the development mode by executing the command `npm start`.
4. Go to [http://localhost:3000](http://localhost:3000).
   This page will be automatically reloaded after saving the changes in the project files.

## Deploy

The production version of the project will be automatically linted, built and
uploaded to GitHub Pages, to the branch `gh-pages`, every time when updated
branch `main`. For example, after a direct push or an accepted pool-request.

Next, you need to go to the GitHub repository settings (`Settings` > `Pages`) and 
set the distribution of the production version of the files from the `/root` 
folder of the `gh-pages` branch, if this was not done automatically

### Deployment status

Deployment status of the last commit is displayed by an icon next to its identifier.

- **Yellow color** - the project is assembled and deployed.
- **Green color** - deployment completed successfully.
- **Red color** - an error occurred during linting, build or deploy.

### Живая страница

After some time, usually a couple of minutes, the live page can be viewed 
at the address specified in the edited `homepage` property.

If a blank page opens, make sure that there are no errors in the `Console` 
tab related to incorrect paths to CSS and JS files of the project (**404**). 
Most likely most likely you have an incorrect value of the `homepage` 
property in the `package.json` file.

### Routing

If your application uses the `react-router-dom` library for routing, you must 
additionally configure the `<BrowserRouter>` component by passing the exact 
name of your repository to the `basename` prop. A slash at the beginning 
of the line is mandatory.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## How it works

1. After each push to the `main` branch of the GitHub repository, a special 
    script (GitHub Action) is run from the `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized, linted and built before deployment.
3. If all steps are successful, the assembled production version of the project
   files is sent to the `gh-pages` branch. Otherwise, the log of the script
   execution log will indicate what the problem is.
