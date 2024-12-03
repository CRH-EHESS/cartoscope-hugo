# Cartoscope - Hugo edition

## Project Setup

This project uses the "Archie" theme for Hugo. Follow the steps below to set up the theme and run the Hugo server.

### Prerequisites

- Ensure you have [Hugo](https://gohugo.io/getting-started/installing/) installed on your machine.

### Adding the Archie Theme

1. **Clone the repository**:

    ```bash
    git clone git@github.com:CRH-EHESS/cartoscope-hugo.git
    cd cartoscope-hugo
    ```

2. **Add the Archie theme as a submodule**:

    ```bash
    git submodule add https://github.com/athul/archie.git themes/archie
    ```

### Running the Hugo Server

1. **Start the Hugo server**:

    ```bash
    hugo server
    ```

2. **Access the site**:
    Open your browser and navigate to `http://localhost:1313/posts/card/` to see the demo page.

### Additional Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
