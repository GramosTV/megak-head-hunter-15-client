<!--
Hey, thanks for using the megak-head-hunter-15-client template.
If you have any enhancements, then fork this project and create a pull request
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <!-- <img src="assets/logo.png" alt="logo" width="200" height="auto" /> -->
  <h1>Megak Head Hunter 15 Client</h1>
  
  <p>
    Megak Head Hunter 15 is a group project developed by the participants of the 15th group from the first edition of the MegaK online course.
  </p>
<h4>
    <a href="https://github.com/GramosTV/megak-head-hunter-15-client/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/GramosTV/megak-head-hunter-15-client/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://i.imgur.com/c16s0XG.png" alt="screenshot" />
  <img src="https://i.imgur.com/CXPqXbr.png" alt="screenshot" />
  <img src="https://i.imgur.com/JFsOB6V.png" alt="screenshot" />
  <img src="https://i.imgur.com/MiRQrHb.png" alt="screenshot" />
  <img src="https://i.imgur.com/1qCpiKW.png" alt="screenshot" />
  <img src="https://i.imgur.com/GNnmKWY.png" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack (for both Client and Server)

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
    <li><a href="https://www.typeorm.io/">TypeORM</a></li>
  </ul>
</details>

<!-- Features -->

## :dart: Features

### HR Panel

#### Viewing students list

![viewing_students_list](https://user-images.githubusercontent.com/92755273/184684320-5f0ba9fb-832b-4fff-bf89-24dce1670ee8.gif)

#### Searching students

![searching_students](https://user-images.githubusercontent.com/92755273/184684409-706db96e-376a-417f-ba0e-bd829bca9d7c.gif)

#### Filtering displayed students by provided criteria

![searching_students_by_provided_criteria](https://user-images.githubusercontent.com/92755273/184684528-69b53629-45c4-46dd-8445-0aa988e02c5f.gif)

#### Adding students to HR list

![adding_students_to_hr_list](https://user-images.githubusercontent.com/92755273/184684595-d51865eb-47ed-4e6c-8fce-7c3ac95cc84b.gif)

#### Viewing student's CV and removing students from the list

![viewing_cv_removing_students_from_hr_list](https://user-images.githubusercontent.com/92755273/184684689-5918ad3b-0ff4-495f-8e96-9dd9f5eadf10.gif)

### Admin Panel

#### Adding new HR by admin

![add_hr](https://user-images.githubusercontent.com/92755273/184687568-c9c0a6de-cf9f-4a76-82e2-4755d067111b.gif)

#### Importing students from .csv file

![add_students](https://user-images.githubusercontent.com/92755273/184687630-3360f0d2-a2d1-4297-9b02-5cacd57d8418.gif)

### User Panel

#### Changing user's profile data and setting hired status by the user

![user_panel](https://user-images.githubusercontent.com/92755273/184690397-fdf331f4-dfee-4dde-9e9a-1335efbf556f.gif)


<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses npm as package manager

<!-- Run Locally -->

### :running: Run Locally

**IMPORTANT**
- Put https://github.com/GramosTV/megak-head-hunter-15-server and https://github.com/GramosTV/megak-head-hunter-15-client in one folder for the shared types to work.

**Before you start, make sure to create megak-head-hunter-15 mysql database** (typeorm will take care of the tables)

Clone the project

```bash
  git clone https://github.com/GramosTV/megak-head-hunter-15-client.git
```

Go to the project directory

```bash
  cd megak-head-hunter-15-client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Head to

```bash
  http://localhost:3000
```

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  npm run build
```

<!-- Roadmap -->

<!-- ## :compass: Roadmap

<!-- License -->

## :warning: License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Contact -->

## :handshake: Contact

Email - emeraldbob020@gmail.com
Discord - GramosTV#2410

Project Link: [https://github.com/GramosTV/megak-head-hunter-15-client](https://github.com/GramosTV/megak-head-hunter-15-client)

<!-- Acknowledgments -->

## :gem: Acknowledgements

- [React](https://reactjs.org)
