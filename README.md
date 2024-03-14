
# Postmaster

## Overview

Postmaster is a backend application designed to handle the processing of contact form submissions from your website. It serves as the intermediary between the form on your website and your email inbox, ensuring that you receive notifications whenever someone fills out the contact form.

## Features

- Receives form data from your website's contact form.
- Sends email notifications containing the form data to your specified email address.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/postmaster.git`
2. Navigate to the project directory: `cd postmaster`
3. Install dependencies: `bun install`

## Usage

1. Create a new env file named `.dev.vars` in the root of the project directory.
2. Copy the contents of the `example.dev.vars` file into the `.dev.vars` file.
3. Add your secrets accordingly.
4. Run locally with `bun dev`
5. Deploy to production with `bun run deploy`

Before using Postmaster, you need to configure it with your email credentials and other settings. Follow these steps:


## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
