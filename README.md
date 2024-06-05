# CodeBrewCafe

## Table of Contents
- [CodeBrewCafe](#CodeBrewCafe)
- [Background](#background)
- [Site](#home)
  - [Home](#home)
  - [TicTacToe](#tictactoe)
- [Usage](#usage)
  - [Forking Repository](#forking-repository)
- [Technology](#technology)
- [Future Work](#future-work)

## Welcome to CodeBrewCafe
### Background
CodeBrewCafe is a collection of small widgets and mini-projects created during my continuous learning journey. Each widget is designed to address a specific need or curiosity, allowing me to experiment with different technologies and programming concepts.

### Overview and Goals
The main goal of CodeBrewCafe is to continuously build and expand the project, making it a tangible testament to my coding learning journey.

### Inspiration and concept
The inspiration behind the design and concept of CodeBrewCafe is based on the Brain Age game on the Nintendo DS.

<img src="public\readme-assets\inspo1.png" alt="Brain Age" width="300"/>
<img src="public\readme-assets\inspo2.png" alt="Brain Age" width="300"/>
<img src="public\readme-assets\inspo3.png" alt="Brain Age" width="300"/>

The concept of having an assortment of brain training games is something I wanted to reflect in CodeBrewCafe as well as the math paper-like background and white-paper colour scheme which is inspired by Brain Age's own math-themed UI and colour design.


## Home
#### Landing Page + Demo
<img src="public\readme-assets\home-landingpage.png" alt="Home Page"/>
The landing page features a collection of many to come widgets and currently consists of the TicTacToe widget, Calcluator widget and a SimonSays widget. 

Each widget has their own page and can be accessed by selecting them from the grid layout and then selecting the go button to navigate to their page.

## Widgets
### TicTacToe
#### Landing Page + Demo
<img src="public\readme-assets\tictactoe-landingpage.png" alt="TTT Page"/>

The first widget I've created and added is the classic game of TicTacToe. Players take turns placing an 'X' or an 'O' until either players three adjacently in a straight line and earn a point. 

### Calculator
#### Landing Page
<img src="public\readme-assets\calculator-page.png" alt="Calculator Page"/>
The second widget is a simple calculator widget. It is a straightforward tool that can perform basic arithmetic operations, including addition, subtraction, multiplication, and division.

### Simon Says
#### Landing Page + Demo
<img src="public\readme-assets\simonsays-landingpage.png" alt="SimonSays Page"/>
The third widget in the roster is the game Simon Says which is an interactive game that challenges users to memorize and repeat a sequence of colors. Users have to beat 3 stages with only three lives.

## Usage
### Forking repository
1. Clone the repostory
```sh
git clone https://github.com/yourusername/CodeBrewCafe.git
```
2. Navigate to the root directory:
```sh
cd CodeBrewCafe
```
2. Run the project :
```sh
npm run dev
```

## Technology
- HTML
- CSS
- JavaScript

## Future work
### Updates for existing features:
- Most pages are responsiveness up to 600px. This does not currently considered responsiveness for smaller heights
- TicTacToe currently does not feature a tie condition. For now players can simply use the reset button for this

### Updates for upcoming features:
- Deployment is also a priority so that more complex apps can be used since this mini-project does not have a backend component