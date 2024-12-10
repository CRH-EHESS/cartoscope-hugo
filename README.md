# Cartoscope - Hugo edition

**Demo : https://crh-ehess.github.io/cartoscope-hugo** (but the Quarto+Leaflet is broken on Github Pages 😥)

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
quarto render && hugo server -D
```

Access the site to the index page `http://localhost:1313/cartoscope-hugo/`, or one of the two available articles:

- `http://localhost:1313/cartoscope-hugo/posts/quarto/`
- `http://localhost:1313/cartoscope-hugo/posts/hugo/`

### Additional Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
