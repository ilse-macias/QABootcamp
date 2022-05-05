# QABootcamp
# Deliverable 1 - Front-End automation
The purpose of this repository is to complete the activities from the Capstone documentation following the best practices.

Test cases created:
1. Successful login.
2. Unsuccessful login.
3. Create a new task with 'Today' as the due date.
4. Create a single task selecting 'Tomorrow' as the due date.
5. Create new project.
6. Delete every task created (If there's any)

<b>Pre-requirements: </b>
* Install <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
* Have at least 2 browsers installed on your computer: Chrome, Firefox, Edge

<b>Technologies and Dependencies </b>
* JavaScript
* <a href="https://testcafe.io/">TestCafé</a>
* <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
* <a href="https://www.npmjs.com/search?q=eslint">eslint</a>
* <a href="https://www.npmjs.com/package/testcafe-reporter-allure-extended">Allure</a>
* <a href="https://www.npmjs.com/package/testcafe-reporter-xunit">Reporter xunit</a>

<b>Project Setup</b>
1. Open Visual Studio Code.
2. Click on "Clone Git Repository..." link from "Get Started" page.
3. On the repository search, click on "Clone from GitHub" option; you must authorized if you are not able to see all your repositories.
4. Click search this repository.

<b> Credentials </b> <br>
Email: bootcamp@qa.team <br>
Password: Bootcamp2021


# Deliverable 2 - API testing
In this deliverable is about "API testing" using Postman as a tool and export it on the front-end project.

<b> Technologies and Dependencies </b>
* <a href="https://www.postman.com/">Postman</a>
* <a href="https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/">Newman </a>

<b> How to export the enviroment and collections from postman </b>
* Collections
1. Click on "Collections" icon at left sidebar.
2. Click on the name of the collection that you're working. E.g. _Todoist_
3. Click on the "ellipsis" button to see more actions, then click on "Export" option.
4. A modal will be open, click on "Export" button.
5. Save the json file.

* Environment
1. Click on "Enviroment" icon at left sidebar.
2. Click on the environments that you're working. E.g. _Todoist_
3. On the right side panel, click on the "ellipsis" button to see more actions, then click on "Export" option.
4. Save the json file.

<b> How to implement on the front-end project </b>
  
* Once exported the collections and environments, create a folder named "api" from root from your front-end project and those JSON must be on that folder.
* To execute them, install newman and on the **package.json** add the path where the api-test is.

You can find Todoist workspace <a href="https://www.postman.com/ilse-macias/workspace/qa-bootcamp/collection/17467668-0db54632-b1bb-49bc-a843-45a34617724d">here</a>