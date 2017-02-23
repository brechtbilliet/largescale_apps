# Largescale applications

This project shows how big angular modules can be developed in a standalone way.
The goal is to have a different repo/versioning system for every module. Npm seems the perfect fit for this.

The solution contains 2 projects:

- tasks: This is a tasks module project
- main: This is the main project that consumes the tasks module

## Description

### Tasks project

The tasks project contains 2 important directories:

- **src**: This contains the task module: all the source code regarding tasks
- **testenv**: This contains an angular environment where the tasks module is being used. This is being used for development purposes and documentation purposes only.


### Main project

This is the project that consumes the tasks module (that is being exposed by the tasks project). This is being installed with npm.

```
 "dependencies": {
    ...
    "tasks": "../tasks"
  },
  
```

**Note: this will ofcourse point to a real npm registry in a non-example environment (see below)** 

```
 "dependencies": {
 	...
    "keg-tasks": "1.2.3"
  },
```

It uses the tasks-component and uses a taskService through a sandbox. In short it just consumes the tasks-module. The tasks module is being installed through the package.json file


## How to run the project
- Go to the 'tasks' folder and type ```npm install``` to install all the dependencies of the tasks project
- Go to the 'main' folder and type ```npm install``` to install all the dependencies of the main project (tasks will also be installed in the node_modules folder)
- In the main folder type ```ng serve```to start the main project
- If you want to develop in the tasks project you might want to start the test enviroment with ```ng serve``` in the 'tasks' folder

## Technology stack

- Angular (2+)
- Typescript
- ngrx/store (redux implementation)
- Rxjs
- Webpack (through CLI)
- Karma, Jasmine (for unittesting)

## Architecture of the projects
### Smart & dumb components
### Ahead-of-time-compilation
### Unidirectional dataflow
### Immutability
### Statemanagement through redux (ngrx/store)
### Reactive programming
