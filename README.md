<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Dice's Pizza

A pizza tracking application built with Laravel, React, and Inertia.js featuring automatic polling and live reloads. Track your pizza orders in real-time!

## Tech Stack

- Laravel (Backend)
- React (Frontend)
- Inertia.js (Full-stack SPA)
- MySQL/PostgreSQL (Database)

## Features

- Real-time pizza order tracking
- Automatic polling for live updates
- User authentication and registration
- Seeded demo data for testing
- [Add any other key features]

## Prerequisites

- PHP >= 8.1
- Composer
- Node.js & NPM
- MySQL/PostgreSQL

## Getting Started

1. Clone the repository
    bash
    git clone [your-repository-url]
    cd dices-pizza

2. Set up environment file
    bash
    cp .env.example .env

3. Install dependencies
    bash
    composer install
    npm install

4. Set up the database
    bash
    php artisan migrate --force
    php artisan db:seed

5. Start the development servers
    bash
    npm run dev

In a separate terminal:
    bash
    php artisan serve

The application will be available at `http://localhost:8000`

## Usage

1. Open the application in your browser
2. Click the register link to create a new account
3. View and track seeded pizza orders
4. [Add any other usage instructions]

## Development

[Add any specific development instructions, coding standards, or contribution guidelines]

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


