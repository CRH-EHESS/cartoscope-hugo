# Cartoscope - Hugo edition

## Project Setup

This project uses the "Archie" theme for Hugo. Follow the steps below to set up the theme and run the Hugo server.

### Prerequisites

- Ensure you have [Hugo](https://gohugo.io/getting-started/installing/) and [Quarto](https://quarto.org/) installed on your machine.

### Add the Archie Theme as a Git submodule

1. **Clone the repository**:

    ```bash
    git clone git@github.com:CRH-EHESS/cartoscope-hugo.git
    cd cartoscope-hugo
    ```

2. **Fetch the Archie theme as a Git submodule**:

    ```bash
    git submodule update --init --recursive
    ```

### Install `maplibre-gl`

```bash
    npm install
```

### Run the website in preview mode

```bash
quarto preview
```

Access the site to the index page `http://localhost:1313/`, or one of the two available articles:

- `http://localhost:1313/posts/quarto/`
- `http://localhost:1313/posts/hugo/`

### Additional Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
